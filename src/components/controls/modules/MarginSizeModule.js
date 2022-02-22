import React, { useState, useContext } from 'react';
import { SettingsContext } from '../../../contexts/SettingsContext';

const MarginSizeModule = () => {

  const { state, ACTIONS, dispatch } = useContext(SettingsContext);

  const handleChange = (e) => {
    dispatch({ type: ACTIONS.SET_MARGINSIZE, payload: e.target.value });
  }

  return (
    <div className="control-well ">
      <h2 className="control-title"><i className="fas fa-ruler-vertical mr-2"></i> Margin size</h2>
      <input className="w-full text-input focus:border-blue-500" type="number" placeholder="(default: 16)" defaultValue={state.marginSize}
        onChange={handleChange}
      />
    </div>
  )
}

export default MarginSizeModule;
