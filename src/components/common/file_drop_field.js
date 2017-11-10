import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

export const FileDropField = (props) => {
    
    const { name, input, meta: { touched, error } } = props;
    const files = input.value;
    return (
      <div>
        <Dropzone
          name={name}
          onDrop={( filesToUpload, e ) => {
              input.onChange(filesToUpload)
              const reader = new FileReader();
              reader.onloadend = () => {

              }
            }}
        >
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        {touched &&
          meta.error &&
          <span className="error">{error}</span>}
        {files && Array.isArray(files) && (
          <ul>
            { files.map((file, i) => <li key={i}>{file.name}</li>) }
          </ul>
        )}
      </div>
    );
  }