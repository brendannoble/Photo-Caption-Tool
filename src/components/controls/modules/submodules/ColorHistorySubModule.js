import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ColorHistoryModule = ({ currentColor, applyColor, storageKey }) => {

  
  const defaultColors = ['#000000', '#FFFFFF', '#e53e3e', '#3182ce', '#ecc94b'];
  
  const [ colors, setColors ] = useState(defaultColors);

  const loadColors = () => {
    let loadedColors;

    if (localStorage.getItem(storageKey) === null) {
      localStorage.setItem(storageKey, JSON.stringify(colors));
      loadedColors = JSON.parse(localStorage.getItem(storageKey));
      setColors([...loadedColors]);
      return;
    }
    loadedColors = JSON.parse(localStorage.getItem(storageKey));
    setColors([...loadedColors]);
  }

  const changeColor = (color) => {
    applyColor(color);
    if (colors.includes(color)) return;
    let newColors = [...colors];
    newColors.unshift(currentColor);
    newColors.pop();
    setColors(newColors);
    localStorage.setItem(storageKey, JSON.stringify(newColors));
  }

  useEffect(() => {
    loadColors();
  }, [])

  useEffect(() => {
    if (currentColor === undefined) return;
    if (colors.includes(currentColor)) return;
    let newColors = [...colors];
    newColors.unshift(currentColor);
    newColors.pop();
    setColors(newColors);
    localStorage.setItem(storageKey, JSON.stringify(newColors));
  }, [currentColor, colors, storageKey])

  return (
    <div className="flex flex-row md:w-6 w-full md:flex-col border-2 border-gray-400 mt-4 md:mt-0 rounded-lg overflow-hidden">
      { colors.map((color, index) => (
        <div key={uuidv4()} className={`${ index !== 4 ? 'border-r-2 md:border-b-2' : null} h-10 md:h-auto md:w-10 flex-grow border-gray-400 cursor-pointer`}
          style={{ backgroundColor: color }}
          onClick={() => changeColor(color)}
        >
        </div>
      )) }
    </div>
  )
}

export default ColorHistoryModule;
