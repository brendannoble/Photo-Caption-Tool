import React, { useContext } from 'react';
import { SettingsContext } from '../../../contexts/SettingsContext';

const TextInputModule = () => {

  const { ACTIONS, dispatch } = useContext(SettingsContext);

  const handleChange = (e) => {
    let text = e.target.value.toString();
    dispatch({ type: ACTIONS.SET_TEXT, payload: text });
    return;
  }

  // TODO Fix multiline centering issue

  return (
    <div className="w-full md:mx-3 control-well">
      <h2 className="control-title">
        <span className="text-2xl"><i className="fas fa-pencil-alt mr-2"></i> Edit text</span>
      </h2>
      <textarea rows="2" className="text-input focus:border-blue-500" onChange={handleChange} placeholder="Enter your text here"></textarea>
    </div>
  )
}

export default TextInputModule;
