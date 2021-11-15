import React from 'react'
import { Modal, Button, Spin } from 'antd';
import MyForm from './MyForm'


export class BookAddModal extends React.Component {

    // handleShowModal = () => {
    //     this.props.showModal();
    // }

    // handleHideModal = () => {
    //     this.props.hideModal();
    // }

    render() {
        const { visible, loading, handleHideModal } = this.props;
        console.log(this.props);
        return (
            <>
                
                {/* <Button type="primary" onClick={this.handleShowModal}>
                    Create book
                </Button> */}

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
                        <MyForm />
                    </Spin>}

                </Modal>

            </>
        )
    }
}
// const mapStateToProps = (state) => {
//     return {
//         visible: state.modalReducer.visible,
//         loading: state.modalReducer.loading
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         showModal: () => { dispatch(showModalAction()) },
//         hideModal: () => { dispatch(hideModalAction()) },
//     }
// };

export default BookAddModal;
// export default connect(mapStateToProps, mapDispatchToProps)(BookAddModal);