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
  name: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
MyField.defaultProps = {
  name: '',
};

export default MyField;
