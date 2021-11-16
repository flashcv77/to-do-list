import React from "react";
import MyForm from '../BookAddModal/MyForm/';
import { Button, Modal, Spin } from "antd";

export const BookDeleteModal = ({ visible, loading, handleDeleteHideModal, handleDeleteBook }) => {
    console.log(" ?", visible)
    return (
        <>
            <Modal
                visible={visible}
                title="Are you sure you wanna delete this book?"
                onCancel={() => handleDeleteHideModal()}
                confirmLoading={!loading}
                loading={loading}
                footer={[
                    <Button
                        type="secondary"
                        key="back"
                        onClick={() => handleDeleteHideModal()}>
                        Return
                    </Button>,
                    <button
                        form="form"
                        className="ant-btn ant-btn-danger"
                        key="submit"
                        loading={loading}
                        onClick={(id) => handleDeleteBook(id)}
                    >
                        Delete
                    </button>,
                ]}
            >
                {/* {<Spin spinning={loading} tip="Loading...">
                 
                </Spin>} */}

            </Modal>

        </>
    )

}

export default BookDeleteModal;