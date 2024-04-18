import React from 'react';

function Square({ row, col, cellData, handleClick, errorDisplayEnabled }) {
    const getBackgroundColor = () => {
        if (errorDisplayEnabled && cellData.currentState !== cellData.correctState) {
            return 'red';
        }
        switch (cellData.currentState) {
            case -1:
                return 'green';
            case 0:
                return 'grey';
            case 1:
                return 'blue';
            case 2:
                return 'white';
            default:
                return 'green';
        }
    };

    const backgroundColor = getBackgroundColor();

    return (
        <td
            style={{ backgroundColor }}
            data-row={row}
            data-col={col}
            onClick={() => handleClick(row, col)}
        ></td>
    );
}

export default Square;
