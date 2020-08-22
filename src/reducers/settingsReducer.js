export const ACTIONS = {
  SET_FONTSIZE: 'set_fontsize',
  SET_MARGINSIZE: 'set_marginsize'
}

export const settingsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_FONTSIZE:
      console.log(state, action.payload);
      return {
        ...state, fontSize: action.payload,
      }
    case ACTIONS.SET_MARGINSIZE:
      return {
        ...state, marginSize: action.payload, 
      }
    default:
      return state;
  }
}