import React, { useState, useContext } from 'react';
import { SettingsContext } from '../../../contexts/SettingsContext';

const FontSizeModule = () => {

  const { state, ACTIONS, dispatch } = useContext(SettingsContext);

  const handleChange = (e) => {
    dispatch({ type: ACTIONS.SET_FONTSIZE, payload: e.target.value });
  }

  return (
    <div className="control-well ">
      <h2 className="control-title"><i className="fas fa-text-height mr-2"></i> Font size</h2>
        <input className="w-full text-input focus:border-blue-500" type="number" placeholder="(default: 16)" defaultValue={state.fontSize}
          onChange={handleChange}
        />
    </div>
  )
}

export default FontSizeModule;
