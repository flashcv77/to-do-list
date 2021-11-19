import { Button, Modal, Spin } from "antd";
import React from "react";
import EditForm from "./EditForm";

export const BookEditModal = (props) => {
    const { visible, loading, closeModal, bookEdit, handleSubmitEdit, initialValue, updateBook } = props;
    // console.log(loading, "is loading", visible, "is visible");
    console.log(bookEdit, 'bookEdit');
    return (
        <>
            {/* {<Spin spinning={loading} tip="Loading..."> */}
            <Modal
                visible={visible}
                title="Update book"
                onCancel={closeModal()}
                confirmLoading={!loading}
                loading={loading}
                footer={[
                    <Button
                        type="secondary"
                        key="back"
                        onClick={closeModal()}>
                        Return
                    </Button>,
                    <button
                        form="editForm"
                        className="ant-btn ant-btn-primary"
                        key="submit"
                        type="primary"
                        loading={loading} >
                        Submit
                    </button>,
                ]}
            >
                {<Spin spinning={loading} tip="Loading...">
                    <EditForm
                        form="formEdit"
                        initialValue={initialValue}
                        updateBook={updateBook}
                    />
                </Spin>}
            </Modal>
            {/* </Spin>} */}
        </>
    )
}

export default BookEditModal;