import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import './App.css';

function App() {
  const [selectedColor, setSelectedColor] = useState('#ffffff'); // Default color is white

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  return (
    <div className="app">
      <h1>Color Picker App</h1>
      <div className="color-container">
        <div className="color-display" style={{ backgroundColor: selectedColor }}>
          <p>{selectedColor}</p>
        </div>
        <ChromePicker color={selectedColor} onChange={handleColorChange} />
      </div>
    </div>
  );
}

export default App;
