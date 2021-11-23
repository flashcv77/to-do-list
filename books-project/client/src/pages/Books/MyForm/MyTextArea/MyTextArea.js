import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import { StyledTextArea } from './styled';

export const MyTextArea = (props) => {
  const { input } = props;
  const { name } = input;
  const { allowClear } = props;
  return (
    <StyledTextArea>
      <label htmlFor={name}>{name}</label>
      <Input.TextArea
        rows={4}
        id={name}
        {...input}
        allowClear={allowClear}
      />
    </StyledTextArea>
  );
};

MyTextArea.propTypes = {
  allowClear: PropTypes.bool.isRequired,
  name: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

MyTextArea.defaultProps = {
  name: '',
};

export default MyTextArea;
