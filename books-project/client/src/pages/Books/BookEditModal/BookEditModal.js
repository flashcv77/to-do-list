import { Button, Modal, Spin } from "antd";
import React, { useEffect } from "react";
// import EditForm from "./EditForm";
import MyForm from "../BookAddModal/MyForm/MyForm";

export const BookEditModal = (props) => {
    const { visible, loading, closeModal, bookEdit, handleSubmitEdit, initialValue, updateBook, getBookData, id } = props;
    // console.log(loading, "is loading", visible, "is visible");
    useEffect(() => {

        getBookData(id)
    }, [])
    const onSubmit = (event) => {
        const id = event.uuid;
        const book = {
            name: event.name,
            author: event.author,
            description: event.description
        }
        updateBook(id, book);
    }
    return (
        <>
            {/* {<Spin spinning={loading} tip="Loading..."> */}
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
                        onClick={() => closeModal()}>
                        Return
                    </Button>,
                    <Button
                        // for="form"
                        form="form"
                        htmlType="form"
                        className="ant-btn ant-btn-primary"
                        key="submit"
                        type="primary"
                        loading={loading} >
                        Submit
                    </Button>,
                ]}
            >
                {<Spin spinning={loading} tip="Loading...">
                    <MyForm
                        form="form"
                        initialValue={bookEdit}
                        updateBook={updateBook}
                        closeModal={closeModal}
                        handleOnSubmit={onSubmit}
                    />
                </Spin>}
            </Modal>
            {/* </Spin>} */}
        </>
    )
}

export default BookEditModal;