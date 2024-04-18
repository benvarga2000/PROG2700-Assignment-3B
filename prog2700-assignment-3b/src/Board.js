import React, { useState } from 'react';
import Square from './Square';

function Board({ puzzleData }) {
    const [currentData, setCurrentData] = useState(puzzleData);
    const [errorDisplayEnabled, setErrorDisplayEnabled] = useState(false);
    const [puzzleState, setPuzzleState] = useState('');

    const checkPuzzle = () => {
        let errorCount = 0;
        let allCellsCorrect = true;

        for (let i = 0; i < currentData.length; i++) {
            for (let j = 0; j < currentData[i].length; j++) {
                const cell = currentData[i][j];
                if (cell.currentState !== cell.correctState) {
                    errorCount++;
                    allCellsCorrect = false;
                }
            }
        }

        if (errorCount === 0) {
            if (allCellsCorrect) {
                setPuzzleState('You did it!!');
            } else {
                setPuzzleState('So far so good');
            }
        } else {
            setPuzzleState('Something is wrong');
        }
    };

    const toggleErrorDisplay = () => {
        setErrorDisplayEnabled(!errorDisplayEnabled);
    };

    const handleSquareClick = (row, col) => {
        const newData = [...currentData];
        const cell = newData[row][col];
        if (cell.canToggle) {
            cell.currentState = (cell.currentState + 1) % 3;
            setCurrentData(newData);
        }
    };

    return (
        <div>
            <table>
                <tbody>
                    {currentData.map((rowData, rowIndex) => (
                        <tr key={rowIndex}>
                            {rowData.map((cellData, colIndex) => (
                                <Square
                                    key={colIndex}
                                    row={rowIndex}
                                    col={colIndex}
                                    cellData={cellData}
                                    handleClick={handleSquareClick}
                                    errorDisplayEnabled={errorDisplayEnabled}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id="controls">
                <button onClick={checkPuzzle}>Check</button>
                <label>
                    <input
                        type="checkbox"
                        checked={errorDisplayEnabled}
                        onChange={toggleErrorDisplay}
                    />
                    Show incorrect squares
                </label>
                <div>{puzzleState}</div>
            </div>
        </div>
    );
}

export default Board;
