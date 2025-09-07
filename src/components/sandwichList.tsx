import React, { useEffect, useState } from 'react';
import { sandwichService } from '../db/services/sandwichService';
import { Sandwich } from '../db/models/sandwich';

const SandwichList: React.FC = () => {
    const [sandwiches, setSandwiches] = useState<Sandwich[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSandwiches = async () => {
            try {
                const data = await sandwichService.getSandwiches(); // Call the service to fetch data
                setSandwiches(data); // Update state with the fetched data
            } catch (err) {
                setError('Error fetching sandwiches'); // Handle any errors
            } finally {
                setLoading(false); // Set loading to false once data is fetched
            }
        };

        fetchSandwiches(); // Invoke the fetch function
    }, []); // Empty dependency array means this runs once on mount

    if (loading) return <div>Loading sandwiches...</div>; // Show loading message
    if (error) return <div>{error}</div>; // Show error message

    return (
        <ul>
            {sandwiches.map(sandwich => (
                <li key={sandwich.id}>{sandwich.name}</li> // Display sandwich names
            ))}
        </ul>
    );
};

export default SandwichList;