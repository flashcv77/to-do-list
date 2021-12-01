import { TextField } from '@material-ui/core';
import React from 'react';

export default function MyInput(props) {
  const { input, label, validate } = props;
  const { name } = input;
  return (
    <div>
      <TextField
        id={name}
        {...input}
        label={label}
        validate={validate}
      />
    </div>
  );
}
