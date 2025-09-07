import React from 'react';
import SandwichList from '../../components/sandwichList';

const App: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl mb-4">Sandwiches</h1>
            <SandwichList />
        </div>
    );
};

export default App;