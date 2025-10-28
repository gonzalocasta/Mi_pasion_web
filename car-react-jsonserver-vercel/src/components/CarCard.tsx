import React from 'react';
import { Car } from '../types/car';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="car-card">
      <h2>{car.make} {car.model}</h2>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
      <p>Description: {car.description}</p>
    </div>
  );
};

export default CarCard;