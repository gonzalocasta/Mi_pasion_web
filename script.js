// SPA Application State
const state = {
    cars: [],
    currentPage: 'home',
    editingCar: null,
    manufacturers: [], // External API data
    loadingManufacturers: false
};

// Mock data (in case API is not available)
const mockCars = [
    {
        id: 1,
        make: "Toyota",
        model: "Camry",
        year: 2020,
        price: 24000,
        description: "Un sedán confiable y eficiente en combustible"
    },
    {
        id: 2,
        make: "Honda",
        model: "Accord",
        year: 2021,
        price: 26000,
        description: "Sedán elegante con tecnología avanzada"
    },
    {
        id: 3,
        make: "Ford",
        model: "Mustang",
        year: 2019,
        price: 30000,
        description: "Potente deportivo americano icónico"
    },
    {
        id: 4,
        make: "Chevrolet",
        model: "Malibu",
        year: 2022,
        price: 22000,
        description: "Sedán espacioso y cómodo para familias"
    },
    {
        id: 5,
        make: "Nissan",
        model: "Altima",
        year: 2021,
        price: 25000,
        description: "Sedán moderno con excelente rendimiento"
    }
];

// API Configuration
// To use with json-server, update this URL to match your server
// For production, replace with your backend API endpoint
const API_URL = 'http://localhost:3001/cars';

// External API - NHTSA Vehicle API (Free, no key required)
const NHTSA_API_URL = 'https://vpic.nhtsa.dot.gov/api';

// ===== SECURITY: XSS Prevention Functions =====
// Sanitize user input to prevent XSS attacks
function sanitizeHTML(str) {
    if (typeof str !== 'string') return '';
    
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// Additional validation to prevent XSS in attributes
function sanitizeAttribute(str) {
    if (typeof str !== 'string') return '';
    
    // Remove any potentially dangerous characters
    return str.replace(/[<>"'&]/g, function(match) {
        const escape = {
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '&': '&amp;'
        };
        return escape[match];
    });
}

// ===== SECURITY: Input Validation Functions =====
function validateCarForm(formData) {
    const errors = [];
    
    // Validate make (required, 2-50 characters, letters and spaces only)
    if (!formData.make || formData.make.trim().length < 2) {
        errors.push('La marca debe tener al menos 2 caracteres');
    } else if (formData.make.length > 50) {
        errors.push('La marca no puede exceder 50 caracteres');
    } else if (!/^[a-zA-Z]+(?:[\s\-][a-zA-Z]+)*$/.test(formData.make)) {
        errors.push('La marca solo puede contener letras, espacios y guiones (no al inicio o final)');
    }
    
    // Validate model (required, 1-50 characters)
    if (!formData.model || formData.model.trim().length < 1) {
        errors.push('El modelo es obligatorio');
    } else if (formData.model.length > 50) {
        errors.push('El modelo no puede exceder 50 caracteres');
    }
    
    // Validate year (required, valid range)
    const currentYear = new Date().getFullYear();
    const year = parseInt(formData.year);
    if (isNaN(year) || year < 1900 || year > currentYear + 1) {
        errors.push(`El año debe estar entre 1900 y ${currentYear + 1}`);
    }
    
    // Validate price (required, positive number)
    const price = parseFloat(formData.price);
    if (isNaN(price) || price < 0) {
        errors.push('El precio debe ser un número positivo');
    } else if (price > 10000000) {
        errors.push('El precio parece demasiado alto');
    }
    
    // Validate description (optional, max 500 characters)
    if (formData.description && formData.description.length > 500) {
        errors.push('La descripción no puede exceder 500 caracteres');
    }
    
    return {
        valid: errors.length === 0,
        errors: errors
    };
}

// ===== External API: NHTSA Vehicle API Integration =====
async function fetchManufacturers() {
    if (state.loadingManufacturers || state.manufacturers.length > 0) {
        return state.manufacturers;
    }
    
    state.loadingManufacturers = true;
    
    try {
        // Fetch all vehicle manufacturers from NHTSA API
        const response = await fetch(`${NHTSA_API_URL}/vehicles/GetAllManufacturers?format=json`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch manufacturers');
        }
        
        const data = await response.json();
        
        // Extract and sort manufacturer names
        const manufacturers = data.Results
            .filter(m => m.Mfr_Name && m.Mfr_Name.trim())
            .map(m => m.Mfr_Name.trim())
            .sort();
        
        // Remove duplicates
        state.manufacturers = [...new Set(manufacturers)];
        
        return state.manufacturers;
    } catch (error) {
        console.error('Error fetching manufacturers:', error);
        // Return some common manufacturers as fallback
        state.manufacturers = [
            'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan',
            'BMW', 'Mercedes-Benz', 'Volkswagen', 'Audi', 'Hyundai'
        ].sort();
        return state.manufacturers;
    } finally {
        state.loadingManufacturers = false;
    }
}

// Search for vehicle by VIN (demonstration of API usage)
async function searchVehicleByVIN(vin) {
    try {
        const response = await fetch(
            `${NHTSA_API_URL}/vehicles/DecodeVin/${vin}?format=json`
        );
        
        if (!response.ok) {
            throw new Error('Failed to decode VIN');
        }
        
        const data = await response.json();
        return data.Results;
    } catch (error) {
        console.error('Error decoding VIN:', error);
        return null;
    }
}

// API Functions
async function fetchCars() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('API not available');
        const data = await response.json();
        state.cars = data;
    } catch (error) {
        console.log('Using mock data:', error.message);
        state.cars = [...mockCars];
    }
}

async function addCar(carData) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carData)
        });
        if (!response.ok) throw new Error('Failed to add car');
        return await response.json();
    } catch (error) {
        // Fallback to mock data
        const newCar = {
            ...carData,
            id: state.cars.length > 0 ? Math.max(...state.cars.map(c => c.id)) + 1 : 1
        };
        state.cars.push(newCar);
        return newCar;
    }
}

async function updateCar(carData) {
    try {
        const response = await fetch(`${API_URL}/${carData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carData)
        });
        if (!response.ok) throw new Error('Failed to update car');
        return await response.json();
    } catch (error) {
        // Fallback to mock data
        const index = state.cars.findIndex(c => c.id === carData.id);
        if (index !== -1) {
            state.cars[index] = carData;
        }
        return carData;
    }
}

async function deleteCar(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete car');
    } catch (error) {
        console.log('Deleting from mock data:', error.message);
    }
    // Always remove from local state
    state.cars = state.cars.filter(car => car.id !== id);
}

// Router
function navigateTo(page) {
    state.currentPage = page;
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${page}`) {
            link.classList.add('active');
        }
    });
    
    // Render the page
    render();
}

// Render Functions
function render() {
    const app = document.getElementById('app');
    
    switch (state.currentPage) {
        case 'home':
            app.innerHTML = renderHomePage();
            break;
        case 'admin':
            app.innerHTML = renderAdminPage();
            attachAdminEventListeners();
            break;
        default:
            app.innerHTML = renderHomePage();
    }
}

function renderHomePage() {
    return `
        <div class="page-header">
            <h1>Bienvenido a Mi Pasión</h1>
            <p>Descubre nuestra increíble colección de autos</p>
        </div>
        
        ${state.cars.length === 0 ? `
            <div class="empty-state">
                <h2>No hay autos disponibles</h2>
                <p>Visita el panel de administración para agregar autos</p>
            </div>
        ` : `
            <div class="car-grid">
                ${state.cars.map(car => renderCarCard(car)).join('')}
            </div>
        `}
    `;
}

function renderCarCard(car) {
    // Sanitize all user-generated content to prevent XSS
    const safeMake = sanitizeHTML(car.make || '');
    const safeModel = sanitizeHTML(car.model || '');
    const safeYear = sanitizeHTML(String(car.year || ''));
    const safeDescription = sanitizeHTML(car.description || 'Sin descripción');
    const safePrice = isNaN(car.price) ? 0 : parseFloat(car.price);
    
    return `
        <div class="car-card" data-car-id="${sanitizeAttribute(String(car.id))}">
            <h3>${safeMake} ${safeModel}</h3>
            <p class="car-info"><strong>Año:</strong> ${safeYear}</p>
            <p class="car-info"><strong>Descripción:</strong> ${safeDescription}</p>
            <p class="car-price">$${safePrice.toLocaleString()}</p>
        </div>
    `;
}

function renderAdminPage() {
    return `
        <div class="page-header">
            <h1>Panel de Administración</h1>
            <p>Gestiona tu catálogo de autos</p>
        </div>
        
        <div class="admin-container">
            <div class="admin-section">
                <h2>${state.editingCar ? 'Editar Auto' : 'Agregar Nuevo Auto'}</h2>
                ${renderCarForm()}
            </div>
            
            <div class="admin-section">
                <h2>Lista de Autos (${state.cars.length})</h2>
                ${renderCarList()}
            </div>
        </div>
    `;
}

function renderCarForm() {
    const car = state.editingCar || { make: '', model: '', year: '', price: '', description: '' };
    
    // Sanitize form values
    const safeMake = sanitizeAttribute(car.make || '');
    const safeModel = sanitizeAttribute(car.model || '');
    const safeYear = sanitizeAttribute(String(car.year || ''));
    const safePrice = sanitizeAttribute(String(car.price || ''));
    const safeDescription = sanitizeAttribute(car.description || '');
    
    // Generate manufacturer options if available
    let manufacturerOptions = '';
    if (state.manufacturers.length > 0) {
        manufacturerOptions = state.manufacturers
            .slice(0, 100) // Limit to first 100 for performance
            .map(mfr => `<option value="${sanitizeAttribute(mfr)}">${sanitizeHTML(mfr)}</option>`)
            .join('');
    }
    
    return `
        <form id="carForm" class="form-container" style="margin: 0;" novalidate>
            <div class="form-group">
                <label for="make">Marca: <span style="color: red;">*</span></label>
                ${state.manufacturers.length > 0 ? `
                    <select id="makeSelect" name="makeSelect" class="form-control">
                        <option value="">-- Seleccionar marca --</option>
                        ${manufacturerOptions}
                        <option value="custom">Otra (escribir manualmente)</option>
                    </select>
                ` : ''}
                <input 
                    type="text" 
                    id="make" 
                    name="make" 
                    value="${safeMake}"
                    pattern="[a-zA-Z\s\-]+"
                    minlength="2"
                    maxlength="50"
                    required
                    placeholder="Ej: Toyota"
                    ${state.manufacturers.length > 0 && !car.make ? 'style="display: none;"' : ''}
                >
                <small class="form-text">Solo letras, espacios y guiones (2-50 caracteres)</small>
            </div>
            
            <div class="form-group">
                <label for="model">Modelo: <span style="color: red;">*</span></label>
                <input 
                    type="text" 
                    id="model" 
                    name="model" 
                    value="${safeModel}"
                    maxlength="50"
                    required
                    placeholder="Ej: Camry"
                >
                <small class="form-text">Máximo 50 caracteres</small>
            </div>
            
            <div class="form-group">
                <label for="year">Año: <span style="color: red;">*</span></label>
                <input 
                    type="number" 
                    id="year" 
                    name="year" 
                    value="${safeYear}" 
                    min="1900" 
                    max="${new Date().getFullYear() + 1}"
                    required
                    placeholder="${new Date().getFullYear()}"
                >
                <small class="form-text">Entre 1900 y ${new Date().getFullYear() + 1}</small>
            </div>
            
            <div class="form-group">
                <label for="price">Precio: <span style="color: red;">*</span></label>
                <input 
                    type="number" 
                    id="price" 
                    name="price" 
                    value="${safePrice}" 
                    min="0"
                    max="10000000"
                    step="0.01"
                    required
                    placeholder="Ej: 25000"
                >
                <small class="form-text">Número positivo menor a $10,000,000</small>
            </div>
            
            <div class="form-group">
                <label for="description">Descripción:</label>
                <textarea 
                    id="description" 
                    name="description" 
                    rows="3"
                    maxlength="500"
                    placeholder="Describe las características del auto (máx. 500 caracteres)"
                >${safeDescription}</textarea>
                <small class="form-text">Opcional, máximo 500 caracteres</small>
            </div>
            
            <div id="formErrors" class="form-errors" style="display: none;"></div>
            
            <div class="form-actions">
                ${state.editingCar ? `
                    <button type="button" class="button button-secondary" onclick="cancelEdit()">Cancelar</button>
                    <button type="submit" class="button">Actualizar Auto</button>
                ` : `
                    <button type="submit" class="button">Agregar Auto</button>
                `}
            </div>
        </form>
    `;
}

function renderCarList() {
    if (state.cars.length === 0) {
        return '<p class="empty-state" style="color: #666;">No hay autos en el catálogo</p>';
    }
    
    return `
        <div style="max-height: 600px; overflow-y: auto;">
            ${state.cars.map(car => `
                <div class="car-card" style="margin-bottom: 1rem;">
                    <h3>${car.make} ${car.model}</h3>
                    <p class="car-info"><strong>Año:</strong> ${car.year}</p>
                    <p class="car-price">$${car.price.toLocaleString()}</p>
                    <div class="car-actions">
                        <button class="button button-small" onclick="editCar(${car.id})">Editar</button>
                        <button class="button button-small button-danger" onclick="confirmDelete(${car.id})">Eliminar</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Event Listeners
function attachAdminEventListeners() {
    const form = document.getElementById('carForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
        
        // Handle manufacturer selection dropdown
        const makeSelect = document.getElementById('makeSelect');
        const makeInput = document.getElementById('make');
        
        if (makeSelect && makeInput) {
            makeSelect.addEventListener('change', (e) => {
                if (e.target.value === 'custom') {
                    makeInput.style.display = 'block';
                    makeInput.value = '';
                    makeInput.focus();
                } else if (e.target.value) {
                    makeInput.style.display = 'none';
                    makeInput.value = e.target.value;
                } else {
                    makeInput.style.display = 'none';
                    makeInput.value = '';
                }
            });
        }
        
        // Real-time validation feedback
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                validateFieldOnBlur(input);
            });
        });
    }
}

function validateFieldOnBlur(field) {
    const value = field.value.trim();
    let error = '';
    
    switch (field.name) {
        case 'make':
            if (value.length < 2) {
                error = 'La marca debe tener al menos 2 caracteres';
            } else if (!/^[a-zA-Z\s\-]+$/.test(value)) {
                error = 'Solo letras, espacios y guiones';
            }
            break;
        case 'model':
            if (value.length < 1) {
                error = 'El modelo es obligatorio';
            }
            break;
        case 'year':
            const year = parseInt(value);
            const currentYear = new Date().getFullYear();
            if (isNaN(year) || year < 1900 || year > currentYear + 1) {
                error = `Año debe estar entre 1900 y ${currentYear + 1}`;
            }
            break;
        case 'price':
            const price = parseFloat(value);
            if (isNaN(price) || price < 0) {
                error = 'El precio debe ser positivo';
            }
            break;
    }
    
    // Show/hide error message
    let errorElement = field.parentElement.querySelector('.field-error');
    if (error) {
        if (!errorElement) {
            errorElement = document.createElement('small');
            errorElement.className = 'field-error';
            field.parentElement.appendChild(errorElement);
        }
        errorElement.textContent = error;
        field.classList.add('field-invalid');
    } else {
        if (errorElement) {
            errorElement.remove();
        }
        field.classList.remove('field-invalid');
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    // Clear previous errors
    const formErrors = document.getElementById('formErrors');
    if (formErrors) {
        formErrors.style.display = 'none';
        formErrors.innerHTML = '';
    }
    
    const formData = new FormData(e.target);
    const carData = {
        make: formData.get('make').trim(),
        model: formData.get('model').trim(),
        year: parseInt(formData.get('year')),
        price: parseFloat(formData.get('price')),
        description: formData.get('description').trim()
    };
    
    // Validate form data
    const validation = validateCarForm(carData);
    
    if (!validation.valid) {
        // Show validation errors
        if (formErrors) {
            formErrors.innerHTML = `
                <div class="error-message" style="margin: 1rem 0;">
                    <strong>Errores de validación:</strong>
                    <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
                        ${validation.errors.map(err => `<li>${sanitizeHTML(err)}</li>`).join('')}
                    </ul>
                </div>
            `;
            formErrors.style.display = 'block';
        }
        return;
    }
    
    try {
        if (state.editingCar) {
            carData.id = state.editingCar.id;
            await updateCar(carData);
            state.editingCar = null;
            render();
            showMessage('Auto actualizado correctamente', 'success');
        } else {
            await addCar(carData);
            render();
            showMessage('Auto agregado correctamente', 'success');
        }
    } catch (error) {
        showMessage('Error al guardar el auto: ' + sanitizeHTML(error.message), 'error');
    }
}

// Make functions available globally for inline onclick handlers
// Note: In a production app, consider using event delegation instead
window.editCar = editCar;
window.cancelEdit = cancelEdit;
window.confirmDelete = confirmDelete;

function editCar(id) {
    state.editingCar = state.cars.find(car => car.id === id);
    render();
}

function cancelEdit() {
    state.editingCar = null;
    render();
}

async function confirmDelete(id) {
    const car = state.cars.find(c => c.id === id);
    if (confirm(`¿Estás seguro de que quieres eliminar ${car.make} ${car.model}?`)) {
        try {
            await deleteCar(id);
            render();
            showMessage('Auto eliminado correctamente', 'success');
        } catch (error) {
            showMessage('Error al eliminar el auto: ' + error.message, 'error');
        }
    }
}

function showMessage(message, type) {
    const app = document.getElementById('app');
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    // Use textContent instead of innerHTML to prevent XSS
    messageDiv.textContent = message;
    
    app.insertBefore(messageDiv, app.firstChild);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Initialize App
async function init() {
    // Show loading
    document.getElementById('app').innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Cargando...</p>
        </div>
    `;
    
    // Fetch initial data in parallel for better performance
    await Promise.all([
        fetchCars(),
        fetchManufacturers() // Load manufacturers from external API
    ]);
    
    // Handle navigation
    window.addEventListener('hashchange', () => {
        const page = window.location.hash.slice(1) || 'home';
        navigateTo(page);
    });
    
    // Set up nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('href').slice(1);
            window.location.hash = page;
        });
    });
    
    // Initial render
    const initialPage = window.location.hash.slice(1) || 'home';
    navigateTo(initialPage);
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
