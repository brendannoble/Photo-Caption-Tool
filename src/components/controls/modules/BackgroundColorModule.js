import React, { useState, useContext } from 'react';
import { SettingsContext } from '../../../contexts/SettingsContext';
import ColorHistoryModule from './submodules/ColorHistorySubModule';

const BackgroundColorModule = () => {

  const { state, ACTIONS, dispatch } = useContext(SettingsContext);

  const [color, setColor] = useState(state.backgroundColor);
  const [ invalid, setInvalid ] = useState(false);

  const handleChange = (e) => {
    setColor(e.target.value);
  }

  const handleText = (e) => {
    e.preventDefault();
    if (/^#([0-9A-F]{3}){1,2}$/i.test(e.target.value)) {
      setColor(e.target.value);
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  }

  const handleSubmit = () => {
    dispatch({ type: ACTIONS.SET_BACKGROUNDCOLOR, payload: color });
  }

  const applyColor = (color) => {
    setColor(color);
    dispatch({ type: ACTIONS.SET_BACKGROUNDCOLOR, payload: color });
  }

  return (
    <div className="control-well md:mx-3">
      <h2 className="control-title"><i className="fas fa-fill-drip mr-2"></i> Card Color</h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:mr-2">
          <div className="flex items-center bg-white rounded-md border-2 border-gray-400 overflow-hidden mb-4">
            <label htmlFor="background-color-picker" className="w-10 h-10 mr-2 outline-none border-r-2 border-gray-400 overflow-hidden cursor-pointer"
              style={{
                backgroundColor: color
              }}
            ></label>
            <input id="background-color-picker" type="color" className="hidden" onChange={handleChange} value={color}/>
            <input className={`font-bold w-20 ${ invalid ? 'text-red-600' : null }`} placeholder={color} onChange={handleText}/>
          </div>
          <button className="btn w-full bg-blue-500 hover:bg-blue-400" onClick={handleSubmit}>
            APPLY
          </button>
        </div>
        <ColorHistoryModule currentColor={state.backgroundColor} applyColor={applyColor} storageKey={"cardColorHistory"} />
      </div>
    </div>
  )
}

export default BackgroundColorModule;
