import React from "react";
import { Button, Modal, Spin } from "antd";

export const BookDeleteModal = ({ id, visible, loading, handleDelete, closeModal, deleteBook, deleteBookId }) => {
    return (
        <>
            {/* {<Spin spinning={loading} tip="Loading..."> */}
            <Modal
                visible={visible}
                destroyOnClose={true}
                title={`Delete book`}
                onCancel={() => closeModal()}
                confirmLoading={!loading}
                loading={loading}
                footer={[
                    <Button
                        type="secondary"
                        key="back"
                        onClick={() => closeModal()}>
                        Cancel
                    </Button>,
                    <button
                        className="ant-btn ant-btn-danger"
                        loading={loading}
                        onClick={() => deleteBook(id)}
                    >
                        Delete
                    </button>,
                ]}
            >
                {<Spin spinning={loading} tip="Loading...">


                    <div className="textAlignCenter">Are you sure you want to delete this book? There is no undo</div>
                </Spin>}
            </Modal>
            {/* </Spin>} */}
        </>
    );
}

export default BookDeleteModal;