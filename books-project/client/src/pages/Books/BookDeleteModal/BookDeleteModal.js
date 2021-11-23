import React from 'react';
import { Button, Modal, Spin } from 'antd';
import PropTypes from 'prop-types';

export const BookDeleteModal = ({
  id,
  visible,
  loading,
  closeModal,
  deleteBook,
}) => (
  <Modal
    visible={visible}
    loading={loading}
    destroyOnClose
    title="Delete book"
    onCancel={() => closeModal()}
    confirmLoading={!loading}
    footer={[
      <Button
        type="secondary"
        loading={loading}
        key="back"
        onClick={() => closeModal()}
      >
        Cancel
      </Button>,
      <Button
        key="deletebook"
        loading={loading}
        className="ant-btn ant-btn-danger"
        onClick={() => deleteBook(id)}
      >
        Delete
      </Button>,
    ]}
  >
    <Spin spinning={loading} tip="Loading...">
      <div className="textAlignCenter">Are you sure you want to delete this book? There is no undo</div>
    </Spin>
  </Modal>
);

BookDeleteModal.propTypes = {
  id: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookDeleteModal;
