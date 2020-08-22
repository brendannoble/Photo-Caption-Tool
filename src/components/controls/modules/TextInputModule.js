import React, { useContext } from 'react';
import { SettingsContext } from '../../../contexts/SettingsContext';

const TextInputModule = () => {

  const { state, ACTIONS, dispatch } = useContext(SettingsContext);

  const handleChange = (e) => {
    let text = e.target.value.toString();
    dispatch({ type: ACTIONS.SET_TEXT, payload: text });
    return;
  }

  return (
    <div className="w-full control-well">
      <h2 className="control-title">
        <i class="fas fa-pencil-alt mr-2"></i>
        Edit text
      </h2>
      <textarea rows="2" className="text-input focus:border-blue-500" onChange={handleChange} placeholder="Enter your text here"></textarea>
    </div>
  )
}

export default TextInputModule;
