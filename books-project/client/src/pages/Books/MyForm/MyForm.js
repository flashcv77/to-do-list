import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { MyField } from './MyField/MyField';
import MyTextArea from './MyTextArea';

const MyForm = (props) => {
  const { initialValues, handleOnSubmit } = props;
  return (
    <Form
      initialValues={initialValues || {}}
      id="form"
      onSubmit={handleOnSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} id="form">
          <Field name="name" placeholder="Name" component={MyField} allowClear />
          <Field name="author" placeholder="Author" component={MyField} allowClear />
          <Field name="description" placeholder="description" component={MyTextArea} allowClear />
        </form>
      )}
    />
  );
};

MyForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
  }),
  handleOnSubmit: PropTypes.func.isRequired,
};

MyForm.defaultProps = {
  initialValues: {},
};

export default MyForm;
