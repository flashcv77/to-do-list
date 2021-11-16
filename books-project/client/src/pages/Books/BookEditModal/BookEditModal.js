import { Button, Modal, Spin } from "antd";
import React from "react";

export const BookEditModal = (props) => {
    const { visible, loading, handleHideModal } = props
    return (
        <>
            <Modal
                visible={visible}
                title="Create/Update book"
                onCancel={() => handleHideModal()}
                confirmLoading={!loading}
                loading={this.props.loading}
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
                    {/* <MyForm /> */}
                </Spin>}

            </Modal>
        </>
    )
}