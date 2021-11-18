import { Button, Modal, Spin } from "antd";
import React from "react";
import MyForm from "../MyForm";

export const BookEditModal = (props) => {
    const { visible, loading, hideModal, initialValue, updateBook } = props;
    const onEditSubmit = (event,form) => {
        const id = event.uuid;
        const book = {
            name: event.name,
            author: event.author,
            description: event.description
        }
        updateBook(id, book);
        form.reset();
    }
    const editName="editForm";
    return (
        <>
            <Modal
                visible={visible}
                title="Update book"
                onCancel={() => hideModal()}
                confirmLoading={!loading}
                loading={loading}
                footer={[
                    <Button
                        type="secondary"
                        key="back"
                        onClick={() => hideModal()}>
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
                    <MyForm
                        form="form"
                        initialValue={initialValue}
                        updateBook={updateBook}
                        onSubmit={onEditSubmit}
                        formName={editName}
                    />
                </Spin>}
            </Modal>
        </>
    )
}

export default BookEditModal;