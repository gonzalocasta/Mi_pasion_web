import axios from 'axios';
import { Car } from '../types/car';

const API_URL = 'http://localhost:3000/cars';

export const getCars = async (): Promise<Car[]> => {
    const response = await axios.get<Car[]>(API_URL);
    return response.data;
};

export const addCar = async (car: Car): Promise<Car> => {
    const response = await axios.post<Car>(API_URL, car);
    return response.data;
};

export const updateCar = async (car: Car): Promise<Car> => {
    const response = await axios.put<Car>(`${API_URL}/${car.id}`, car);
    return response.data;
};

export const deleteCar = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};