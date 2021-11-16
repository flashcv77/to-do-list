import React from 'react'
import { Modal, Button, Spin } from 'antd';
import MyForm from './MyForm'


export const BookAddModal = (props) => {
    const { visible, loading, handleHideModal } = props;

    return (
        <>
            <Modal
                visible={visible}
                title="Create/Update book"
                onCancel={() => handleHideModal()}
                confirmLoading={!loading}
                loading={loading}
                footer={[
                    <Button
                        type="secondary"
                        key="back"
                        onClick={() => handleHideModal()}>
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
                    <MyForm />
                </Spin>}

            </Modal>

        </>
    )

}

export default BookAddModal;