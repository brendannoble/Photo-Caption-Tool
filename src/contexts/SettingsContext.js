import React, { createContext, useReducer } from 'react';
import { settingsReducer, ACTIONS } from '../reducers/settingsReducer';
import ImageModel from '../models/ImageModel';

export const SettingsContext = createContext();

const SettingsContextProvider = (props) => {

  const [state, dispatch] = useReducer(settingsReducer, ImageModel);

  return (
    <SettingsContext.Provider value={{state, ACTIONS, dispatch}}>
      { props.children }
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider;
