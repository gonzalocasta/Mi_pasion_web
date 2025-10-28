import React, { useEffect } from 'react';
import { useCars } from '../hooks/useCars';
import CarCard from './CarCard';

const CarList: React.FC = () => {
    const { cars, fetchCars } = useCars();

    useEffect(() => {
        fetchCars();
    }, [fetchCars]);

    return (
        <div>
            <h2>Car List</h2>
            <div className="car-list">
                {cars.map(car => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default CarList;