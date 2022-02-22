import React, { useContext, useState, createRef } from 'react';
import { SettingsContext } from '../../../contexts/SettingsContext';

const FileUploadModule = () => {

  const { ACTIONS, dispatch } = useContext(SettingsContext);
  const [ isOver, setIsOver ] = useState(false);
  const fileInput = createRef();

  const onOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setIsOver(true);
  }

  const onLeave = (e) => {
    e.preventDefault();
    setIsOver(false);
  }

  const onDrop = (e) => {
    e.preventDefault();

    let fr = new FileReader();
    fr.onload = function(e) {
      dispatch({ type: ACTIONS.SET_IMAGE, payload: this.result });
      dispatch({ type: ACTIONS.SET_FILESELECTED, payload: true });
    }

    fr.readAsDataURL(e.dataTransfer.files[0]);

    let ref = e.dataTransfer.files[0].name;
    let rawName = ref.substr(0, ref.indexOf('.'));

    dispatch({ type: ACTIONS.SET_FILENAME, payload: rawName })
    setIsOver(false);
  }

  const onChange = (e) => {
    let fr = new FileReader();
    fr.onload = function(e) {
      dispatch({ type: ACTIONS.SET_IMAGE, payload: this.result });
      dispatch({ type: ACTIONS.SET_FILESELECTED, payload: true });
    }

    fr.readAsDataURL(fileInput.current.files[0]);

    let ref = fileInput.current.files[0].name;
    let rawName = ref.substr(0, ref.indexOf('.'));

    dispatch({ type: ACTIONS.SET_FILENAME, payload: rawName });
  }

  return (
    <div className="control-well ">
      <h2 className="control-title">
        <i className="fa-solid fa-image mr-2"></i> Select image
      </h2>
      <label 
        htmlFor="src-file"
        className={`${ isOver ? 'file-upload-over' : '' } file-upload hover:bg-blue-500 hover:border-blue-800`}
        onDragOver={onOver}
        onDragEnter={onOver}
        onDragLeave={onLeave}
        onDrop={onDrop}
      >
        Select image or drop file here
      </label>
      <input ref={fileInput} id="src-file" type="file" className="hidden" onChange={onChange}/>
    </div>
  )
}

export default FileUploadModule;
