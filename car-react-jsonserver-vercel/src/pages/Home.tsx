import React from 'react';
import CarList from '../components/CarList';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Car Application</h1>
            <CarList />
        </div>
    );
};

export default Home;