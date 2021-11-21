import React from "react";
import { Button, Modal, Spin } from "antd";

export const BookDeleteModal = ({ id, visible, loading, closeModal, deleteBook }) => {
    return (
        <>
            <Modal
                visible={visible}
                loading={loading}
                destroyOnClose={true}
                title={`Delete book`}
                onCancel={() => closeModal()}
                confirmLoading={!loading}
                footer={[
                    <Button
                        type="secondary"
                        loading={loading}
                        key="back"
                        onClick={() => closeModal()}>
                        Cancel
                    </Button>,
                    <Button
                        loading={loading}
                        className="ant-btn ant-btn-danger"
                        onClick={() => deleteBook(id)}
                    >
                        Delete
                    </Button>,
                ]}
            >
                {<Spin spinning={loading} tip="Loading...">
                    <div className="textAlignCenter">Are you sure you want to delete this book? There is no undo</div>
                </Spin>}
            </Modal>
        </>
    );
}

export default BookDeleteModal;