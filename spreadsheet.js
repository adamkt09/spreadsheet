import React, { useState } from 'react';

const Spreadsheet = () => {
  // Create an initial grid state
  const [grid, setGrid] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  // Handle cell change
  const handleCellChange = (rowIndex, colIndex, value) => {
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = value;
    setGrid(newGrid);
  };

  return (
    <div>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  style={{ border: '1px solid black', padding: '8px' }}
                >
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
