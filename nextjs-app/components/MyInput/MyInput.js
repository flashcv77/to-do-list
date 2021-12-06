// import { TextField } from '@material-ui/core';
import { Input } from 'antd';
import React from 'react';

export default function MyInput(props) {
  const { input, label, validate, meta, placeholder } = props;
  const { name } = input;
  console.log(input);
  return (
    <div>
      <Input
        id={name}
        {...input}
        validate={validate}
        bordered={false}
        placeholder={placeholder}
      />
    </div>
  );
}
