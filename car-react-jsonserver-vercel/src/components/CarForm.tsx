import React, { useState } from 'react';
import { Car } from '../types/car';
import { addCar } from '../services/api';

const CarForm: React.FC<{ car?: Car; onSuccess: () => void }> = ({ car, onSuccess }) => {
    const [make, setMake] = useState(car ? car.make : '');
    const [model, setModel] = useState(car ? car.model : '');
    const [year, setYear] = useState(car ? car.year : '');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newCar: Car = { make, model, year };
        await addCar(newCar);
        onSuccess();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Make:</label>
                <input
                    type="text"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Model:</label>
                <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Year:</label>
                <input
                    type="number"
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                    required
                />
            </div>
            <button type="submit">{car ? 'Update Car' : 'Add Car'}</button>
        </form>
    );
};

export default CarForm;