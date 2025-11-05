// SPA Application State
const state = {
    currentPage: 'home',
    selectedBrand: null,
    selectedModel: null
};

// Car Brands Data with Models and Specifications
const carBrands = [
    {
        id: 1,
        name: "Toyota",
        logo: "images/logos/toyota.svg",
        country: "Japón",
        models: [
            {
                name: "Camry",
                year: 2024,
                price: 28000,
                description: "Sedán elegante y confiable",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.5L 4-cilindros",
                    potencia: "203 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "Delantera",
                    consumo: "7.8 L/100km",
                    aceleracion: "8.3 segundos (0-100 km/h)"
                }
            },
            {
                name: "Corolla",
                year: 2024,
                price: 22000,
                description: "Compacto eficiente y económico",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "1.8L 4-cilindros",
                    potencia: "139 HP",
                    transmision: "CVT",
                    traccion: "Delantera",
                    consumo: "6.5 L/100km",
                    aceleracion: "9.8 segundos (0-100 km/h)"
                }
            },
            {
                name: "RAV4",
                year: 2024,
                price: 32000,
                description: "SUV compacto versátil",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "2.5L 4-cilindros",
                    potencia: "203 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "AWD",
                    consumo: "8.2 L/100km",
                    aceleracion: "8.5 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 2,
        name: "Honda",
        logo: "images/logos/honda.svg",
        country: "Japón",
        models: [
            {
                name: "Accord",
                year: 2024,
                price: 29000,
                description: "Sedán premium con tecnología avanzada",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "1.5L Turbo 4-cilindros",
                    potencia: "192 HP",
                    transmision: "CVT",
                    traccion: "Delantera",
                    consumo: "7.4 L/100km",
                    aceleracion: "7.9 segundos (0-100 km/h)"
                }
            },
            {
                name: "Civic",
                year: 2024,
                price: 24000,
                description: "Compacto deportivo y eficiente",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.0L 4-cilindros",
                    potencia: "158 HP",
                    transmision: "CVT",
                    traccion: "Delantera",
                    consumo: "7.0 L/100km",
                    aceleracion: "8.8 segundos (0-100 km/h)"
                }
            },
            {
                name: "CR-V",
                year: 2024,
                price: 33000,
                description: "SUV familiar espacioso",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "1.5L Turbo 4-cilindros",
                    potencia: "190 HP",
                    transmision: "CVT",
                    traccion: "AWD",
                    consumo: "8.0 L/100km",
                    aceleracion: "8.2 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 3,
        name: "Ford",
        logo: "images/logos/ford.svg",
        country: "Estados Unidos",
        models: [
            {
                name: "Mustang",
                year: 2024,
                price: 35000,
                description: "Icónico muscle car americano",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.3L EcoBoost 4-cilindros",
                    potencia: "310 HP",
                    transmision: "Manual 6 velocidades",
                    traccion: "Trasera",
                    consumo: "10.2 L/100km",
                    aceleracion: "5.3 segundos (0-100 km/h)"
                }
            },
            {
                name: "F-150",
                year: 2024,
                price: 38000,
                description: "Pickup resistente y capaz",
                image: "images/cars/truck.svg",
                specs: {
                    motor: "3.5L V6 EcoBoost",
                    potencia: "400 HP",
                    transmision: "Automática 10 velocidades",
                    traccion: "4WD",
                    consumo: "12.5 L/100km",
                    aceleracion: "6.1 segundos (0-100 km/h)"
                }
            },
            {
                name: "Explorer",
                year: 2024,
                price: 36000,
                description: "SUV de tres filas familiar",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "2.3L EcoBoost 4-cilindros",
                    potencia: "300 HP",
                    transmision: "Automática 10 velocidades",
                    traccion: "AWD",
                    consumo: "11.0 L/100km",
                    aceleracion: "7.2 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 4,
        name: "Chevrolet",
        logo: "images/logos/chevrolet.svg",
        country: "Estados Unidos",
        models: [
            {
                name: "Malibu",
                year: 2024,
                price: 25000,
                description: "Sedán espacioso y cómodo",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "1.5L Turbo 4-cilindros",
                    potencia: "160 HP",
                    transmision: "CVT",
                    traccion: "Delantera",
                    consumo: "7.5 L/100km",
                    aceleracion: "8.7 segundos (0-100 km/h)"
                }
            },
            {
                name: "Camaro",
                year: 2024,
                price: 32000,
                description: "Deportivo americano potente",
                image: "images/cars/sports.svg",
                specs: {
                    motor: "2.0L Turbo 4-cilindros",
                    potencia: "275 HP",
                    transmision: "Manual 6 velocidades",
                    traccion: "Trasera",
                    consumo: "10.0 L/100km",
                    aceleracion: "5.5 segundos (0-100 km/h)"
                }
            },
            {
                name: "Equinox",
                year: 2024,
                price: 28000,
                description: "SUV compacto moderno",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "1.5L Turbo 4-cilindros",
                    potencia: "175 HP",
                    transmision: "Automática 6 velocidades",
                    traccion: "AWD",
                    consumo: "8.5 L/100km",
                    aceleracion: "8.9 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 5,
        name: "Nissan",
        logo: "images/logos/nissan.svg",
        country: "Japón",
        models: [
            {
                name: "Altima",
                year: 2024,
                price: 27000,
                description: "Sedán moderno con excelente rendimiento",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.5L 4-cilindros",
                    potencia: "188 HP",
                    transmision: "CVT",
                    traccion: "Delantera",
                    consumo: "7.6 L/100km",
                    aceleracion: "8.5 segundos (0-100 km/h)"
                }
            },
            {
                name: "Sentra",
                year: 2024,
                price: 21000,
                description: "Compacto eficiente y elegante",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.0L 4-cilindros",
                    potencia: "149 HP",
                    transmision: "CVT",
                    traccion: "Delantera",
                    consumo: "6.8 L/100km",
                    aceleracion: "9.2 segundos (0-100 km/h)"
                }
            },
            {
                name: "Rogue",
                year: 2024,
                price: 30000,
                description: "SUV compacto cómodo",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "2.5L 4-cilindros",
                    potencia: "181 HP",
                    transmision: "CVT",
                    traccion: "AWD",
                    consumo: "8.3 L/100km",
                    aceleracion: "9.0 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 6,
        name: "BMW",
        logo: "images/logos/bmw.svg",
        country: "Alemania",
        models: [
            {
                name: "Serie 3",
                year: 2024,
                price: 45000,
                description: "Sedán deportivo de lujo",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.0L Turbo 4-cilindros",
                    potencia: "255 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "Trasera",
                    consumo: "8.5 L/100km",
                    aceleracion: "5.8 segundos (0-100 km/h)"
                }
            },
            {
                name: "X5",
                year: 2024,
                price: 62000,
                description: "SUV de lujo espacioso",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "3.0L Turbo 6-cilindros",
                    potencia: "335 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "AWD",
                    consumo: "10.5 L/100km",
                    aceleracion: "5.5 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 7,
        name: "Mercedes-Benz",
        logo: "images/logos/mercedes.svg",
        country: "Alemania",
        models: [
            {
                name: "Clase C",
                year: 2024,
                price: 48000,
                description: "Sedán de lujo elegante",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.0L Turbo 4-cilindros",
                    potencia: "255 HP",
                    transmision: "Automática 9 velocidades",
                    traccion: "Trasera",
                    consumo: "8.3 L/100km",
                    aceleracion: "6.0 segundos (0-100 km/h)"
                }
            },
            {
                name: "GLE",
                year: 2024,
                price: 65000,
                description: "SUV de lujo premium",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "3.0L Turbo 6-cilindros",
                    potencia: "362 HP",
                    transmision: "Automática 9 velocidades",
                    traccion: "AWD",
                    consumo: "10.8 L/100km",
                    aceleracion: "5.7 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 8,
        name: "Audi",
        logo: "images/logos/audi.svg",
        country: "Alemania",
        models: [
            {
                name: "A4",
                year: 2024,
                price: 46000,
                description: "Sedán premium tecnológico",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.0L Turbo 4-cilindros",
                    potencia: "261 HP",
                    transmision: "Automática 7 velocidades",
                    traccion: "Quattro AWD",
                    consumo: "8.4 L/100km",
                    aceleracion: "5.9 segundos (0-100 km/h)"
                }
            },
            {
                name: "Q5",
                year: 2024,
                price: 52000,
                description: "SUV premium versátil",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "2.0L Turbo 4-cilindros",
                    potencia: "261 HP",
                    transmision: "Automática 7 velocidades",
                    traccion: "Quattro AWD",
                    consumo: "9.2 L/100km",
                    aceleracion: "6.3 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 9,
        name: "Volkswagen",
        logo: "images/logos/volkswagen.svg",
        country: "Alemania",
        models: [
            {
                name: "Jetta",
                year: 2024,
                price: 23000,
                description: "Sedán confiable y espacioso",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "1.4L Turbo 4-cilindros",
                    potencia: "147 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "Delantera",
                    consumo: "7.2 L/100km",
                    aceleracion: "9.1 segundos (0-100 km/h)"
                }
            },
            {
                name: "Tiguan",
                year: 2024,
                price: 29000,
                description: "SUV compacto europeo",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "2.0L Turbo 4-cilindros",
                    potencia: "184 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "AWD",
                    consumo: "8.8 L/100km",
                    aceleracion: "8.4 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 10,
        name: "Mazda",
        logo: "images/logos/mazda.svg",
        country: "Japón",
        models: [
            {
                name: "Mazda3",
                year: 2024,
                price: 24000,
                description: "Compacto deportivo y elegante",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.5L 4-cilindros",
                    potencia: "186 HP",
                    transmision: "Automática 6 velocidades",
                    traccion: "Delantera",
                    consumo: "7.5 L/100km",
                    aceleracion: "8.3 segundos (0-100 km/h)"
                }
            },
            {
                name: "CX-5",
                year: 2024,
                price: 31000,
                description: "SUV compacto premium",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "2.5L Turbo 4-cilindros",
                    potencia: "227 HP",
                    transmision: "Automática 6 velocidades",
                    traccion: "AWD",
                    consumo: "9.0 L/100km",
                    aceleracion: "7.5 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 11,
        name: "Hyundai",
        logo: "images/logos/hyundai.svg",
        country: "Corea del Sur",
        models: [
            {
                name: "Elantra",
                year: 2024,
                price: 22000,
                description: "Sedán moderno y eficiente",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.0L 4-cilindros",
                    potencia: "147 HP",
                    transmision: "CVT",
                    traccion: "Delantera",
                    consumo: "7.1 L/100km",
                    aceleracion: "9.0 segundos (0-100 km/h)"
                }
            },
            {
                name: "Tucson",
                year: 2024,
                price: 28000,
                description: "SUV compacto atractivo",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "2.5L 4-cilindros",
                    potencia: "187 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "AWD",
                    consumo: "8.6 L/100km",
                    aceleracion: "8.7 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 12,
        name: "Kia",
        logo: "images/logos/kia.svg",
        country: "Corea del Sur",
        models: [
            {
                name: "Forte",
                year: 2024,
                price: 21000,
                description: "Sedán económico y confiable",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.0L 4-cilindros",
                    potencia: "147 HP",
                    transmision: "CVT",
                    traccion: "Delantera",
                    consumo: "7.0 L/100km",
                    aceleracion: "8.9 segundos (0-100 km/h)"
                }
            },
            {
                name: "Sportage",
                year: 2024,
                price: 27000,
                description: "SUV compacto moderno",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "2.5L 4-cilindros",
                    potencia: "187 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "AWD",
                    consumo: "8.7 L/100km",
                    aceleracion: "8.6 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 13,
        name: "Subaru",
        logo: "images/logos/subaru.svg",
        country: "Japón",
        models: [
            {
                name: "Impreza",
                year: 2024,
                price: 23000,
                description: "Compacto con tracción AWD",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.0L 4-cilindros",
                    potencia: "152 HP",
                    transmision: "CVT",
                    traccion: "AWD",
                    consumo: "7.8 L/100km",
                    aceleracion: "9.3 segundos (0-100 km/h)"
                }
            },
            {
                name: "Outback",
                year: 2024,
                price: 32000,
                description: "Wagon aventurero",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "2.5L 4-cilindros",
                    potencia: "182 HP",
                    transmision: "CVT",
                    traccion: "AWD",
                    consumo: "8.9 L/100km",
                    aceleracion: "8.7 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 14,
        name: "Volvo",
        logo: "images/logos/volvo.svg",
        country: "Suecia",
        models: [
            {
                name: "S60",
                year: 2024,
                price: 43000,
                description: "Sedán de lujo escandinavo",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.0L Turbo 4-cilindros",
                    potencia: "250 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "AWD",
                    consumo: "8.8 L/100km",
                    aceleracion: "6.4 segundos (0-100 km/h)"
                }
            },
            {
                name: "XC90",
                year: 2024,
                price: 58000,
                description: "SUV de lujo de 7 plazas",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "2.0L Turbo+Supercharger 4-cilindros",
                    potencia: "316 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "AWD",
                    consumo: "10.2 L/100km",
                    aceleracion: "6.5 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 15,
        name: "Porsche",
        logo: "images/logos/porsche.svg",
        country: "Alemania",
        models: [
            {
                name: "911",
                year: 2024,
                price: 115000,
                description: "Icónico deportivo alemán",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "3.0L Twin-Turbo 6-cilindros",
                    potencia: "379 HP",
                    transmision: "PDK 8 velocidades",
                    traccion: "Trasera",
                    consumo: "11.5 L/100km",
                    aceleracion: "4.2 segundos (0-100 km/h)"
                }
            },
            {
                name: "Cayenne",
                year: 2024,
                price: 75000,
                description: "SUV deportivo de lujo",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "3.0L Turbo V6",
                    potencia: "335 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "AWD",
                    consumo: "11.8 L/100km",
                    aceleracion: "6.2 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 16,
        name: "Lexus",
        logo: "images/logos/lexus.svg",
        country: "Japón",
        models: [
            {
                name: "ES",
                year: 2024,
                price: 44000,
                description: "Sedán de lujo refinado",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.5L 4-cilindros",
                    potencia: "203 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "Delantera",
                    consumo: "8.0 L/100km",
                    aceleracion: "8.9 segundos (0-100 km/h)"
                }
            },
            {
                name: "RX",
                year: 2024,
                price: 52000,
                description: "SUV de lujo premium",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "3.5L V6",
                    potencia: "295 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "AWD",
                    consumo: "10.0 L/100km",
                    aceleracion: "7.7 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 17,
        name: "Tesla",
        logo: "images/logos/tesla.svg",
        country: "Estados Unidos",
        models: [
            {
                name: "Model 3",
                year: 2024,
                price: 42000,
                description: "Sedán eléctrico innovador",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "Motor eléctrico",
                    potencia: "283 HP",
                    transmision: "Automática 1 velocidad",
                    traccion: "Trasera",
                    consumo: "14 kWh/100km",
                    aceleracion: "5.8 segundos (0-100 km/h)"
                }
            },
            {
                name: "Model Y",
                year: 2024,
                price: 50000,
                description: "SUV eléctrico versátil",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "Motor eléctrico dual",
                    potencia: "384 HP",
                    transmision: "Automática 1 velocidad",
                    traccion: "AWD",
                    consumo: "16 kWh/100km",
                    aceleracion: "5.0 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 18,
        name: "Jeep",
        logo: "images/logos/jeep.svg",
        country: "Estados Unidos",
        models: [
            {
                name: "Wrangler",
                year: 2024,
                price: 35000,
                description: "SUV todoterreno icónico",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "3.6L V6",
                    potencia: "285 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "4WD",
                    consumo: "11.5 L/100km",
                    aceleracion: "7.4 segundos (0-100 km/h)"
                }
            },
            {
                name: "Grand Cherokee",
                year: 2024,
                price: 42000,
                description: "SUV de lujo capaz",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "3.6L V6",
                    potencia: "293 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "4WD",
                    consumo: "11.0 L/100km",
                    aceleracion: "7.2 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 19,
        name: "Ram",
        logo: "images/logos/ram.svg",
        country: "Estados Unidos",
        models: [
            {
                name: "1500",
                year: 2024,
                price: 40000,
                description: "Pickup full-size potente",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "3.6L V6",
                    potencia: "305 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "4WD",
                    consumo: "13.5 L/100km",
                    aceleracion: "7.5 segundos (0-100 km/h)"
                }
            },
            {
                name: "2500",
                year: 2024,
                price: 48000,
                description: "Pickup heavy-duty",
                image: "images/cars/truck.svg",
                specs: {
                    motor: "6.4L V8",
                    potencia: "410 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "4WD",
                    consumo: "15.5 L/100km",
                    aceleracion: "8.2 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 20,
        name: "GMC",
        logo: "images/logos/gmc.svg",
        country: "Estados Unidos",
        models: [
            {
                name: "Sierra",
                year: 2024,
                price: 42000,
                description: "Pickup premium robusta",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "5.3L V8",
                    potencia: "355 HP",
                    transmision: "Automática 10 velocidades",
                    traccion: "4WD",
                    consumo: "13.0 L/100km",
                    aceleracion: "6.8 segundos (0-100 km/h)"
                }
            },
            {
                name: "Yukon",
                year: 2024,
                price: 55000,
                description: "SUV full-size espacioso",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "5.3L V8",
                    potencia: "355 HP",
                    transmision: "Automática 10 velocidades",
                    traccion: "4WD",
                    consumo: "13.5 L/100km",
                    aceleracion: "7.1 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 21,
        name: "Alfa Romeo",
        logo: "images/logos/alfaromeo.svg",
        country: "Italia",
        models: [
            {
                name: "Giulia",
                year: 2024,
                price: 46000,
                description: "Sedán deportivo italiano",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.0L Turbo 4-cilindros",
                    potencia: "280 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "Trasera",
                    consumo: "9.2 L/100km",
                    aceleracion: "5.5 segundos (0-100 km/h)"
                }
            },
            {
                name: "Stelvio",
                year: 2024,
                price: 50000,
                description: "SUV deportivo italiano",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "2.0L Turbo 4-cilindros",
                    potencia: "280 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "AWD",
                    consumo: "9.8 L/100km",
                    aceleracion: "5.7 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 22,
        name: "Jaguar",
        logo: "images/logos/jaguar.svg",
        country: "Reino Unido",
        models: [
            {
                name: "XE",
                year: 2024,
                price: 47000,
                description: "Sedán deportivo británico",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.0L Turbo 4-cilindros",
                    potencia: "247 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "Trasera",
                    consumo: "8.9 L/100km",
                    aceleracion: "6.6 segundos (0-100 km/h)"
                }
            },
            {
                name: "F-PACE",
                year: 2024,
                price: 52000,
                description: "SUV deportivo elegante",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "2.0L Turbo 4-cilindros",
                    potencia: "247 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "AWD",
                    consumo: "9.5 L/100km",
                    aceleracion: "6.8 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 23,
        name: "Land Rover",
        logo: "images/logos/landrover.svg",
        country: "Reino Unido",
        models: [
            {
                name: "Range Rover Evoque",
                year: 2024,
                price: 48000,
                description: "SUV compacto de lujo",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.0L Turbo 4-cilindros",
                    potencia: "246 HP",
                    transmision: "Automática 9 velocidades",
                    traccion: "AWD",
                    consumo: "9.5 L/100km",
                    aceleracion: "7.1 segundos (0-100 km/h)"
                }
            },
            {
                name: "Defender",
                year: 2024,
                price: 55000,
                description: "SUV todoterreno legendario",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "2.0L Turbo 4-cilindros",
                    potencia: "296 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "4WD",
                    consumo: "10.5 L/100km",
                    aceleracion: "7.7 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 24,
        name: "Mitsubishi",
        logo: "images/logos/mitsubishi.svg",
        country: "Japón",
        models: [
            {
                name: "Outlander",
                year: 2024,
                price: 28000,
                description: "SUV familiar económico",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "2.5L 4-cilindros",
                    potencia: "181 HP",
                    transmision: "CVT",
                    traccion: "AWD",
                    consumo: "8.8 L/100km",
                    aceleracion: "9.5 segundos (0-100 km/h)"
                }
            },
            {
                name: "Eclipse Cross",
                year: 2024,
                price: 26000,
                description: "SUV compacto dinámico",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "1.5L Turbo 4-cilindros",
                    potencia: "152 HP",
                    transmision: "CVT",
                    traccion: "AWD",
                    consumo: "8.5 L/100km",
                    aceleracion: "10.1 segundos (0-100 km/h)"
                }
            }
        ]
    },
    {
        id: 25,
        name: "Peugeot",
        logo: "images/logos/peugeot.svg",
        country: "Francia",
        models: [
            {
                name: "308",
                year: 2024,
                price: 26000,
                description: "Compacto europeo elegante",
                image: "images/cars/sedan.svg",
                specs: {
                    motor: "1.5L Turbo Diesel 4-cilindros",
                    potencia: "130 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "Delantera",
                    consumo: "5.5 L/100km",
                    aceleracion: "10.5 segundos (0-100 km/h)"
                }
            },
            {
                name: "3008",
                year: 2024,
                price: 32000,
                description: "SUV compacto francés moderno",
                image: "images/cars/suv.svg",
                specs: {
                    motor: "1.6L Turbo 4-cilindros",
                    potencia: "180 HP",
                    transmision: "Automática 8 velocidades",
                    traccion: "Delantera",
                    consumo: "7.8 L/100km",
                    aceleracion: "8.9 segundos (0-100 km/h)"
                }
            }
        ]
    }
];

// Navigation helpers
function selectBrand(brandId) {
    const brand = carBrands.find(b => b.id === brandId);
    if (brand) {
        state.selectedBrand = brand;
        state.currentPage = 'brand-models';
        render();
    }
}

function selectModel(modelName) {
    if (!state.selectedBrand) {
        console.error('No brand selected');
        navigateTo('home');
        return;
    }
    
    const model = state.selectedBrand.models.find(m => m.name === modelName);
    if (!model) {
        console.error(`Model ${modelName} not found in ${state.selectedBrand.name}`);
        state.currentPage = 'brand-models';
        render();
        return;
    }
    
    state.selectedModel = model;
    state.currentPage = 'model-details';
    render();
}

function goBack() {
    if (state.currentPage === 'model-details') {
        state.selectedModel = null;
        state.currentPage = 'brand-models';
    } else if (state.currentPage === 'brand-models') {
        state.selectedBrand = null;
        state.currentPage = 'home';
    }
    render();
}

// Router
function navigateTo(page) {
    state.currentPage = page;
    
    // Reset navigation state when going to home
    if (page === 'home') {
        state.selectedBrand = null;
        state.selectedModel = null;
    }
    
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
        case 'brand-models':
            app.innerHTML = renderBrandModelsPage();
            break;
        case 'model-details':
            app.innerHTML = renderModelDetailsPage();
            break;
        case 'historia':
            app.innerHTML = renderHistoriaPage();
            break;
        case 'admin':
            app.innerHTML = renderAdminPage();
            break;
        default:
            app.innerHTML = renderHomePage();
    }
}

function renderHomePage() {
    return `
        <div class="page-header">
            <h1>Bienvenido a Mi Pasión</h1>
            <p>Descubre nuestra colección de ${carBrands.length} marcas de autos</p>
        </div>
        
        <div class="brands-grid">
            ${carBrands.map(brand => renderBrandCard(brand)).join('')}
        </div>
    `;
}

function renderBrandCard(brand) {
    return `
        <div class="brand-card" onclick="selectBrand(${brand.id})">
            <div class="brand-logo"><img src="${brand.logo}" alt="${brand.name} logo"></div>
            <h3>${brand.name}</h3>
            <p class="brand-country">${brand.country}</p>
            <p class="brand-models-count">${brand.models.length} modelos disponibles</p>
        </div>
    `;
}

function renderBrandModelsPage() {
    if (!state.selectedBrand) {
        console.error('No brand selected for models page');
        return `
            <div class="page-header">
                <h1>Error</h1>
                <p>No se ha seleccionado ninguna marca</p>
                <button class="button" onclick="navigateTo('home')">Volver al Inicio</button>
            </div>
        `;
    }
    
    const brand = state.selectedBrand;
    
    return `
        <div class="page-header">
            <button class="back-button" onclick="goBack()">← Volver a Marcas</button>
            <h1><img src="${brand.logo}" alt="${brand.name}" style="height: 40px; vertical-align: middle; margin-right: 10px;"> ${brand.name}</h1>
            <p>${brand.country} - ${brand.models.length} modelos disponibles</p>
        </div>
        
        <div class="models-grid">
            ${brand.models.map(model => renderModelCard(model)).join('')}
        </div>
    `;
}

function renderModelCard(model) {
    return `
        <div class="model-card" onclick="selectModel('${model.name}')">
            <h3>${model.name}</h3>
            <p class="model-year">Año ${model.year}</p>
            <p class="model-description">${model.description}</p>
            <p class="model-price">$${model.price.toLocaleString()}</p>
            <button class="button button-small">Ver Especificaciones →</button>
        </div>
    `;
}

function renderModelDetailsPage() {
    if (!state.selectedModel || !state.selectedBrand) {
        console.error('No model or brand selected for details page');
        return `
            <div class="page-header">
                <h1>Error</h1>
                <p>No se ha seleccionado ningún modelo</p>
                <button class="button" onclick="navigateTo('home')">Volver al Inicio</button>
            </div>
        `;
    }
    
    const model = state.selectedModel;
    const brand = state.selectedBrand;
    
    return `
        <div class="page-header">
            <button class="back-button" onclick="goBack()">← Volver a ${brand.name}</button>
            <h1><img src="${brand.logo}" alt="${brand.name}" style="height: 40px; vertical-align: middle; margin-right: 10px;"> ${brand.name} ${model.name}</h1>
            <p class="model-subtitle">${model.description}</p>
        </div>
        
        <div class="model-details-container">
            <div class="model-image-container">
                <img src="${model.image}" alt="${brand.name} ${model.name}">
            </div>
            
            <div class="model-main-info">
                <div class="info-card">
                    <h2>Información General</h2>
                    <div class="info-row">
                        <span class="info-label">Marca:</span>
                        <span class="info-value">${brand.name}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Modelo:</span>
                        <span class="info-value">${model.name}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Año:</span>
                        <span class="info-value">${model.year}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Precio:</span>
                        <span class="info-value price-highlight">$${model.price.toLocaleString()}</span>
                    </div>
                </div>
                
                <div class="info-card">
                    <h2>Especificaciones Técnicas</h2>
                    <div class="specs-grid">
                        <div class="spec-item">
                            <div class="spec-icon">⚙️</div>
                            <div class="spec-info">
                                <span class="spec-label">Motor</span>
                                <span class="spec-value">${model.specs.motor}</span>
                            </div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-icon">💪</div>
                            <div class="spec-info">
                                <span class="spec-label">Potencia</span>
                                <span class="spec-value">${model.specs.potencia}</span>
                            </div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-icon">🔄</div>
                            <div class="spec-info">
                                <span class="spec-label">Transmisión</span>
                                <span class="spec-value">${model.specs.transmision}</span>
                            </div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-icon">🚗</div>
                            <div class="spec-info">
                                <span class="spec-label">Tracción</span>
                                <span class="spec-value">${model.specs.traccion}</span>
                            </div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-icon">⛽</div>
                            <div class="spec-info">
                                <span class="spec-label">Consumo</span>
                                <span class="spec-value">${model.specs.consumo}</span>
                            </div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-icon">🏁</div>
                            <div class="spec-info">
                                <span class="spec-label">Aceleración</span>
                                <span class="spec-value">${model.specs.aceleracion}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderHistoriaPage() {
    return `
        <div class="page-header">
            <h1>Historia del Automóvil</h1>
            <p>Un viaje a través del tiempo y la evolución del transporte</p>
        </div>
        
        <div class="historia-section">
            <h2>La Evolución del Automóvil</h2>
            <p>
                El automóvil ha sido una de las invenciones más revolucionarias de la historia moderna, 
                transformando radicalmente la forma en que las personas se desplazan, trabajan y viven. 
                Desde sus humildes comienzos hasta convertirse en una parte integral de la vida cotidiana, 
                el automóvil ha recorrido un largo camino de innovación y desarrollo.
            </p>
            
            <div class="timeline">
                <div class="timeline-item">
                    <div class="year">1885-1886</div>
                    <h4>Los Primeros Pasos</h4>
                    <p>
                        Karl Benz desarrolló el primer automóvil práctico impulsado por un motor de combustión 
                        interna en 1885. Un año después, Gottlieb Daimler y Wilhelm Maybach construyeron 
                        el primer vehículo de cuatro ruedas con motor. Estos pioneros alemanes sentaron las 
                        bases de la industria automotriz moderna.
                    </p>
                </div>
                
                <div class="timeline-item">
                    <div class="year">1908</div>
                    <h4>La Revolución de la Producción en Masa</h4>
                    <p>
                        Henry Ford introdujo el Modelo T, el primer automóvil producido en masa mediante 
                        la línea de ensamblaje. Esta innovación revolucionaria redujo drásticamente los 
                        costos de producción y hizo que los automóviles fueran accesibles para la clase media. 
                        El Modelo T vendió más de 15 millones de unidades entre 1908 y 1927.
                    </p>
                </div>
                
                <div class="timeline-item">
                    <div class="year">1930-1950</div>
                    <h4>La Era Dorada del Diseño</h4>
                    <p>
                        Durante estas décadas, el diseño automotriz experimentó una transformación radical. 
                        Los fabricantes comenzaron a enfocarse no solo en la funcionalidad, sino también en 
                        la estética. Surgieron diseños aerodinámicos, cromados relucientes y líneas elegantes 
                        que definieron el estilo art déco en el automovilismo.
                    </p>
                </div>
                
                <div class="timeline-item">
                    <div class="year">1960-1980</div>
                    <h4>Innovación y Seguridad</h4>
                    <p>
                        La industria automotriz comenzó a priorizar la seguridad con la introducción de 
                        cinturones de seguridad, zonas de deformación programada y frenos antibloqueo (ABS). 
                        También surgió una mayor conciencia ambiental, lo que llevó al desarrollo de motores 
                        más eficientes y la introducción de convertidores catalíticos.
                    </p>
                </div>
                
                <div class="timeline-item">
                    <div class="year">1990-2010</div>
                    <h4>La Era Digital</h4>
                    <p>
                        Los automóviles se volvieron cada vez más sofisticados con la integración de 
                        sistemas electrónicos, computadoras de a bordo, sistemas de navegación GPS y 
                        tecnologías de asistencia al conductor. Los híbridos, como el Toyota Prius (1997), 
                        marcaron el comienzo de una nueva era de eficiencia energética.
                    </p>
                </div>
                
                <div class="timeline-item">
                    <div class="year">2010-Presente</div>
                    <h4>Hacia el Futuro Eléctrico y Autónomo</h4>
                    <p>
                        La industria está experimentando una transformación sin precedentes con la 
                        electrificación masiva, liderada por marcas como Tesla. Los vehículos autónomos 
                        están en desarrollo activo, y la conectividad del Internet de las Cosas (IoT) está 
                        convirtiendo a los automóviles en dispositivos inteligentes móviles. La sostenibilidad 
                        y la reducción de emisiones son ahora prioridades centrales en el diseño automotriz.
                    </p>
                </div>
            </div>
            
            <h3>El Impacto Social y Cultural</h3>
            <p>
                El automóvil no solo cambió el transporte, sino que también transformó la sociedad. 
                Facilitó la expansión de las ciudades hacia los suburbios, revolucionó la industria del 
                turismo, cambió los patrones de trabajo y se convirtió en un símbolo de estatus y libertad 
                personal. Hoy en día, con más de mil millones de vehículos en circulación a nivel mundial, 
                el automóvil sigue siendo una parte fundamental de la economía global y la vida cotidiana.
            </p>
            
            <h3>Mirando Hacia el Futuro</h3>
            <p>
                El futuro del automóvil promete ser tan revolucionario como su pasado. Con el desarrollo 
                de vehículos totalmente eléctricos, conducción autónoma, inteligencia artificial y nuevos 
                materiales sostenibles, estamos en el umbral de una nueva era en la movilidad. Los desafíos 
                ambientales y urbanos están impulsando la innovación hacia soluciones más limpias, 
                eficientes y conectadas que redefinirán nuestra relación con el transporte personal.
            </p>
        </div>
    `;
}

function renderAdminPage() {
    return `
        <div class="page-header">
            <h1>Panel de Administración</h1>
            <p>Gestiona el catálogo de marcas y modelos</p>
        </div>
        
        <div class="admin-info">
            <div class="stat-card">
                <h3>${carBrands.length}</h3>
                <p>Marcas Disponibles</p>
            </div>
            <div class="stat-card">
                <h3>${carBrands.reduce((total, brand) => total + brand.models.length, 0)}</h3>
                <p>Modelos Totales</p>
            </div>
        </div>
        
        <div class="admin-section">
            <h2>Catálogo de Marcas</h2>
            <div class="brands-list">
                ${carBrands.map(brand => `
                    <div class="brand-admin-card">
                        <div class="brand-admin-header">
                            <span class="brand-logo-small"><img src="${brand.logo}" alt="${brand.name}"></span>
                            <h3>${brand.name}</h3>
                            <span class="badge">${brand.models.length} modelos</span>
                        </div>
                        <div class="brand-admin-models">
                            ${brand.models.map(model => `
                                <span class="model-tag">${model.name}</span>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Make functions available globally for inline onclick handlers
window.selectBrand = selectBrand;
window.selectModel = selectModel;
window.goBack = goBack;

// Initialize App
async function init() {
    // Show loading
    document.getElementById('app').innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Cargando...</p>
        </div>
    `;
    
    // Small delay for loading animation
    await new Promise(resolve => setTimeout(resolve, 500));
    
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
