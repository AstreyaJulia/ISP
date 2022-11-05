import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';

import Toolbar, { customHrHandler, formats, redoChange, undoChange } from './Toolbar';

const TextEditor = ({ id = 'editor-quill', value, onChange, simple = false, helperText, ...other }) => {
  const modules = {
    toolbar: {
      container: `#${id}`,
      handlers: {
        undo: undoChange,
        redo: redoChange,
        hr: customHrHandler,
      },
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
    syntax: true,
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <div>
      <Toolbar id={id} isSimple={simple} />

      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Напишите что-нибудь..."
        {...other}
      />
      {helperText && helperText}
    </div>
  );
};

TextEditor.propTypes = {
  id: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  simple: PropTypes.bool,
  helperText: PropTypes.string,
};

export default TextEditor;
