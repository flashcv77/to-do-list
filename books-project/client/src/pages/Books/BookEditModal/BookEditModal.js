import { Button, Modal, Spin } from "antd";
import React from "react";
import MyForm from "../BookAddModal/MyForm";

export const BookEditModal = (props) => {
    const { visible, loading, handleUpdateHideModal, initialValue } = props;
    // console.log(initialValue);
    return (
        <>
            <Modal
                visible={visible}
                title="Create/Update book"
                onCancel={() => handleUpdateHideModal()}
                confirmLoading={!loading}
                loading={loading}
                footer={[
                    <Button
                        type="secondary"
                        key="back"
                        onClick={() => handleUpdateHideModal()}>
                        Return
                    </Button>,
                    <button
                        form="form"
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
                        form="formEdit"
                        initialValue={initialValue}
                    />
                </Spin>}
            </Modal>
        </>
    )
}

export default BookEditModal;