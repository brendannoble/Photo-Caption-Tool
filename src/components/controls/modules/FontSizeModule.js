import React, { useState, useContext } from 'react';
import { SettingsContext } from '../../../contexts/SettingsContext';

const FontSizeModule = () => {

  const { state, ACTIONS, dispatch } = useContext(SettingsContext);

  const [ size, setSize ] = useState(state.fontSize);

  const handleChange = (e) => {
    setSize(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.SET_FONTSIZE, payload: size });
  }

  return (
    <div className="control-well md:mx-3">
      <h2 className="control-title"><i className="fas fa-text-height mr-2"></i> Font size</h2>
      <form onSubmit={handleSubmit}>
        <input className="w-full md:w-32 mb-4 text-input focus:border-blue-500" type="number" placeholder="(default: 16)" defaultValue={state.fontSize}
          onChange={handleChange}
        />
        <button className="btn w-full bg-blue-500 hover:bg-blue-400">
          APPLY
        </button>
      </form>
    </div>
  )
}

export default FontSizeModule;
