// SPA Application State
const state = {
    cars: [],
    currentPage: 'home',
    editingCar: null
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
    return `
        <div class="car-card">
            <h3>${car.make} ${car.model}</h3>
            <p class="car-info"><strong>Año:</strong> ${car.year}</p>
            <p class="car-info"><strong>Descripción:</strong> ${car.description || 'Sin descripción'}</p>
            <p class="car-price">$${car.price.toLocaleString()}</p>
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
    
    return `
        <form id="carForm" class="form-container" style="margin: 0;">
            <div class="form-group">
                <label for="make">Marca:</label>
                <input type="text" id="make" name="make" value="${car.make}" required>
            </div>
            
            <div class="form-group">
                <label for="model">Modelo:</label>
                <input type="text" id="model" name="model" value="${car.model}" required>
            </div>
            
            <div class="form-group">
                <label for="year">Año:</label>
                <input type="number" id="year" name="year" value="${car.year}" min="1900" max="${new Date().getFullYear() + 1}" required>
            </div>
            
            <div class="form-group">
                <label for="price">Precio:</label>
                <input type="number" id="price" name="price" value="${car.price}" min="0" required>
            </div>
            
            <div class="form-group">
                <label for="description">Descripción:</label>
                <textarea id="description" name="description" rows="3">${car.description || ''}</textarea>
            </div>
            
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
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const carData = {
        make: formData.get('make'),
        model: formData.get('model'),
        year: parseInt(formData.get('year')),
        price: parseFloat(formData.get('price')),
        description: formData.get('description')
    };
    
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
        showMessage('Error al guardar el auto: ' + error.message, 'error');
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
    
    // Fetch initial data
    await fetchCars();
    
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
