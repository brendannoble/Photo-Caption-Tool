import React, { useContext } from 'react';
import { SettingsContext } from '../../../contexts/SettingsContext';

const AppearanceModule = () => {

  const { state, ACTIONS, dispatch } = useContext(SettingsContext);

  const changeAlignment = (direction) => {
    if (direction === state.alignment) return;
    dispatch({ type: ACTIONS.SET_ALIGNMENT, payload: direction });    
  }

  const changePlacement = (position) => {
    if (position === state.captionPlacement) return;
    dispatch({ type: ACTIONS.SET_CAPTIONPLACEMENT, payload: position });    
  }

  const changeDecoration = (decoration) => {
    switch (decoration) {
      case 'bold':
        dispatch({ type: ACTIONS.TOGGLE_BOLD });
        break;
      case 'italic':
        dispatch({ type: ACTIONS.TOGGLE_ITALIC });
        break;
      case 'underline':
        dispatch({ type: ACTIONS.TOGGLE_UNDERLINE });
        break;
      default:
        break;
    }
  }

  return (
    <div className="control-well">
      <h2 className="control-title"><i className="fas fa-sticky-note mr-2"></i> Appearance</h2>
      <div className="flex">
        <div className="flex-grow">
          <div className="flex rounded-md overflow-hidden shadow-md mb-4">
            <button onClick={() => changeAlignment('left')} className={`appearance-btn hover:bg-gray-800 ${ state.alignment === 'left' ? 'appearance-btn-on hover:bg-blue-700' : null}`}>
              <i className="fas fa-align-left"></i>
            </button>
            <button onClick={() => changeAlignment('center')} className={`appearance-btn border-l border-r hover:bg-gray-800 ${ state.alignment === 'center' ? 'appearance-btn-on hover:bg-blue-700' : null}`}>
              <i className="fas fa-align-center"></i>
            </button>
            <button onClick={() => changeAlignment('right')} className={`appearance-btn hover:bg-gray-800 ${ state.alignment === 'right' ? 'appearance-btn-on hover:bg-blue-700' : null}`}>
              <i className="fas fa-align-right"></i>
            </button>
          </div>
          <div className="flex rounded-md overflow-hidden shadow-md">
            <button onClick={() => changeDecoration('bold')} className={`appearance-btn hover:bg-gray-800 ${ state.bold ? 'appearance-btn-on hover:bg-blue-700' : null}`}>
              <i className="fas fa-bold"></i>
            </button>
            <button onClick={() => changeDecoration('italic')} className={`appearance-btn border-l border-r hover:bg-gray-800 ${ state.italic ? 'appearance-btn-on hover:bg-blue-700' : null}`}>
              <i className="fas fa-italic"></i>
            </button>
            <button onClick={() => changeDecoration('underline')} className={`appearance-btn hover:bg-gray-800 ${ state.underline ? 'appearance-btn-on hover:bg-blue-700' : null}`}>
              <i className="fas fa-underline"></i>
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-2 rounded-md shadow-md">
          <button onClick={() => changePlacement('top')} className={`flex-grow text-sm font-bold appearance-btn rounded-t-md hover:bg-gray-800 border-b ${ state.captionPlacement === 'top' ? 'appearance-btn-on hover:bg-blue-700' : null }`}>
          <i className="fas fa-arrow-up"></i> <i className={`${ state.captionPlacement === 'top' ? 'fas' : 'far' } fa-square`}></i>
          </button>
          <button onClick={() => changePlacement('bottom')} className={`flex-grow text-sm font-bold appearance-btn rounded-b-md hover:bg-gray-800 ${ state.captionPlacement === 'bottom' ? 'appearance-btn-on hover:bg-blue-700' : null }`}>
            <i className="fas fa-arrow-down"></i> <i className={`${ state.captionPlacement === 'bottom' ? 'fas' : 'far' } fa-square`}></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppearanceModule;
