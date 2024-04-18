import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './Board';

function Sample() {
    const [puzzleData, setPuzzleData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Function to fetch sample puzzle data
    const fetchSamplePuzzleData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://prog2700.onrender.com/threeinarow/sample');
            setPuzzleData(response.data.rows);
        } catch (error) {
            console.error('Error fetching puzzle data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch sample puzzle data when the component mounts
    useEffect(() => {
        fetchSamplePuzzleData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <button onClick={fetchSamplePuzzleData}>Reload</button>
            <Board puzzleData={puzzleData} />
        </div>
    );
}

export default Sample;
