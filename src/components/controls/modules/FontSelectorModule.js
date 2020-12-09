import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../../contexts/SettingsContext';

const FontSelectorModule = () => {

  const { ACTIONS, dispatch } = useContext(SettingsContext);

  const [ font, setFont ] = useState('');

  const handleChange = (e) => {
    setFont(e.target.value);
    return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.SET_FONT, payload: font });
  }

  return (
    <div className="w-full control-well">
      <h2 className="control-title"><i className="fas fa-font mr-2"></i> Font Name</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="w-full md:w-48 mb-4 text-input focus:border-blue-500" onChange={handleChange} placeholder="Calibri"/>
        <button className="btn w-full bg-blue-500 hover:bg-blue-400" onClick={handleSubmit}>
          APPLY
        </button>
      </form>
    </div>
  )
}

export default FontSelectorModule;
