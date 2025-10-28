import { useEffect, useState } from 'react';
import { Car } from '../types/car';
import { fetchCars, addCar, updateCar, deleteCar } from '../services/api';

const useCars = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadCars = async () => {
            try {
                const data = await fetchCars();
                setCars(data);
            } catch (err) {
                setError('Error fetching cars');
            } finally {
                setLoading(false);
            }
        };

        loadCars();
    }, []);

    const handleAddCar = async (newCar: Car) => {
        try {
            const addedCar = await addCar(newCar);
            setCars((prevCars) => [...prevCars, addedCar]);
        } catch (err) {
            setError('Error adding car');
        }
    };

    const handleUpdateCar = async (updatedCar: Car) => {
        try {
            const car = await updateCar(updatedCar);
            setCars((prevCars) =>
                prevCars.map((c) => (c.id === car.id ? car : c))
            );
        } catch (err) {
            setError('Error updating car');
        }
    };

    const handleDeleteCar = async (id: number) => {
        try {
            await deleteCar(id);
            setCars((prevCars) => prevCars.filter((car) => car.id !== id));
        } catch (err) {
            setError('Error deleting car');
        }
    };

    return { cars, loading, error, handleAddCar, handleUpdateCar, handleDeleteCar };
};

export default useCars;