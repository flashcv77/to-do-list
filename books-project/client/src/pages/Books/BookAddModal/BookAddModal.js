import React from 'react'
import { Modal, Button, Spin } from 'antd';
import AddForm from './AddForm'

export const BookAddModal = (props) => {
    const { visible, loading, closeModal, handleSubmitCreate } = props;

    return (
        <>

            <Modal
                visible={visible}
                title="Create book"
                onCancel={() => closeModal()}
                confirmLoading={!loading}
                loading={loading}
                footer={[
                    <Button
                        type="secondary"
                        key="back"
                        onClick={() => closeModal()}>
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
                    <AddForm />
                </Spin>}
            </Modal>

        </>
    );
}

export default BookAddModal;