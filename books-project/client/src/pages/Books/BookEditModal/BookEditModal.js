import React, { useEffect } from 'react';
import { Button, Modal, Spin } from 'antd';
import PropTypes from 'prop-types';
import MyForm from '../MyForm';

export const BookEditModal = (props) => {
  const {
    visible, loading, id, updateBook, getBookData, bookEditData, closeModal,
  } = props;
  useEffect(() => {
    getBookData(id);
  }, []);

  const onSubmit = (event) => {
    const book = {
      name: event.name,
      author: event.author,
      description: event.description,
    };
    updateBook(event.uuid, book);
  };
  return (
    <Modal
      visible={visible}
      title="Update book"
      onCancel={() => closeModal()}
      confirmLoading={!loading}
      loading={loading}
      footer={[
        <Button
          type="secondary"
          loading={loading}
          key="back"
          onClick={() => closeModal()}
        >
          Return
        </Button>,
        <Button
          form="form"
          htmlType="form"
          className="ant-btn ant-btn-primary"
          key="submit"
          type="primary"
          loading={loading}
        >
          Submit
        </Button>,
      ]}
    >
      <Spin spinning={loading} tip="Loading...">
        <MyForm
          form="form"
          initialValues={bookEditData}
          handleOnSubmit={onSubmit}
        />
      </Spin>
    </Modal>
  );
};

BookEditModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  updateBook: PropTypes.func.isRequired,
  getBookData: PropTypes.func.isRequired,
  bookEditData: PropTypes.shape({
    name: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default BookEditModal;
