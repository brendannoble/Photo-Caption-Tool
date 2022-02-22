import React, { useState, useContext } from 'react';
import { SettingsContext } from '../../../contexts/SettingsContext';

const QualityModule = () => {

  const { state, ACTIONS, dispatch } = useContext(SettingsContext);

  const handleChange = (e) => {
    dispatch({ type: ACTIONS.SET_QUALITY, payload: e.target.value });
  }

  return (
    <div className="control-well">
      <h2 className="control-title"><i class="fa-solid fa-star-half-stroke mr-2"></i>Quality (0.0 - 1.0)</h2>
        <input className="w-full text-input focus:border-blue-500" type="number" placeholder="(default: 0.95)" defaultValue={state.quality}
          onChange={handleChange}
        />
    </div>
  )
}

export default QualityModule;
