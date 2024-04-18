import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './Board';

function Random() {
    const [puzzleData, setPuzzleData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Function to fetch random puzzle data
    const fetchRandomPuzzleData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://prog2700.onrender.com/threeinarow/random');
            setPuzzleData(response.data.rows);
        } catch (error) {
            console.error('Error fetching puzzle data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch random puzzle data when the component mounts
    useEffect(() => {
        fetchRandomPuzzleData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <button onClick={fetchRandomPuzzleData}>Reload</button>
            <Board puzzleData={puzzleData} />
        </div>
    );
}

export default Random;
