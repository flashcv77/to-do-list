import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import { StyledInput } from './styled';

export const MyField = (props) => {
  const { input } = props;
  const { name } = input;
  const { allowClear } = props;
  return (
    <StyledInput>
      <label htmlFor={name}>{name}</label>
      <Input
        id={name}
        {...input}
        allowClear={allowClear}
      />
    </StyledInput>
  );
};

MyField.propTypes = {
  allowClear: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default MyField;
