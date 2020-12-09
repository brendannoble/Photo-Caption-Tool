export const ACTIONS = {
  SET_FONTSIZE: 'set_fontsize',
  SET_MARGINSIZE: 'set_marginsize',
  SET_TEXT: 'set_text',
  SET_IMAGE: 'set_image',
  SET_FONT: 'set_font',
  SET_FILENAME: 'set_filename',
  SET_FILESELECTED: 'set_fileselected',
  SET_ALIGNMENT: 'set_alignment',
  SET_CAPTIONPLACEMENT: 'set_captionplacement',
  SET_WIDTH: 'set_width',
  SET_NATURALWIDTH: 'set_naturalwidth',
  SET_SCALE: 'set_scale',
  TOGGLE_BOLD: 'set_bold',
  TOGGLE_ITALIC: 'set_italic',
  TOGGLE_UNDERLINE: 'set_underline',
  SET_TEXTCOLOR: 'set_textcolor',
  SET_BACKGROUNDCOLOR: 'set_backgroundcolor',
  TOGGLE_ISRENDERING: 'toggle_isrendering',
  SET_FINALIMAGEURL: 'set_finalimageurl',
}

export const settingsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_FONTSIZE:
      return {
        ...state, fontSize: action.payload,
      }
    case ACTIONS.SET_MARGINSIZE:
      return {
        ...state, marginSize: action.payload, 
      }
    case ACTIONS.SET_ALIGNMENT:
      return {
        ...state, alignment: action.payload,
      }
    case ACTIONS.SET_CAPTIONPLACEMENT:
      return {
        ...state, captionPlacement: action.payload,
      }
    case ACTIONS.TOGGLE_BOLD:
      return {
        ...state, bold: !state.bold
      }
    case ACTIONS.TOGGLE_ITALIC:
      return {
        ...state, italic: !state.italic
      }
    case ACTIONS.TOGGLE_UNDERLINE:
      return {
        ...state, underline: !state.underline
      }
    case ACTIONS.SET_TEXTCOLOR:
      return {
        ...state, textColor: action.payload,
      }
    case ACTIONS.SET_BACKGROUNDCOLOR:
      return {
        ...state, backgroundColor: action.payload,
      }
    case ACTIONS.SET_TEXT:
      return {
        ...state, captionText: action.payload,
      }
    case ACTIONS.SET_FONT:
    return {
      ...state, fontFamily: action.payload,
    }
    case ACTIONS.SET_IMAGE:
      return {
        ...state, imageUrl: action.payload,
      }
    case ACTIONS.SET_FILESELECTED:
      return {
        ...state, fileSelected: action.payload,
      }
    case ACTIONS.SET_FILENAME:
      return {
        ...state, fileName: action.payload,
      }
    case ACTIONS.SET_WIDTH:
      return {
        ...state, width: action.payload,
      }
    case ACTIONS.SET_NATURALWIDTH:
      return {
        ...state, naturalWidth: action.payload,
      }
    case ACTIONS.SET_SCALE:
      return {
        ...state, scale: action.payload,
      }
    case ACTIONS.TOGGLE_ISRENDERING:
      return {
        ...state, isRendering: !state.isRendering,
      }
    case ACTIONS.SET_FINALIMAGEURL:
      return {
        ...state, finalImageUrl: action.payload,
      }
    default:
      return state;
  }
}