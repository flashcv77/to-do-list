import React from "react";
import { Button, Modal, Spin } from "antd";

export const BookDeleteModal = ({ visible, loading, handleDeleteHideModal, deleteBook, deleteBookId }) => {
    return (
        <>
            <Modal
                visible={visible}
                title={`Delete book`}
                onCancel={() => handleDeleteHideModal()}
                confirmLoading={!loading}
                loading={loading}
                footer={[
                    <Button
                        type="secondary"
                        key="back"
                        onClick={() => handleDeleteHideModal()}>
                        Cancel
                    </Button>,
                    <button
                        className="ant-btn ant-btn-danger"
                        loading={loading}
                        onClick={() => deleteBook(deleteBookId)}
                    >
                        Delete
                    </button>,
                ]}
            >
                {<Spin spinning={loading} tip="Loading...">


                    <div className="textAlignCenter">Are you sure you want to delete this book? There is no undo</div>
                </Spin>}
            </Modal>

        </>
    )

}

export default BookDeleteModal;