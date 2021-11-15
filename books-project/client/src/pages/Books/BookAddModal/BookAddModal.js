import React from 'react'
import { Modal, Button, Spin } from 'antd';
import MyForm from './MyForm'
import { connect } from 'react-redux';
import { hideModalAction, showModalAction } from '../actions/books.actions';


export class BookAddModal extends React.Component {

    handleShowModal = () => {
        this.props.show();
    }

    handleHideModal = () => {
        this.props.hide();
    }

    render() {
        const { visible, loading } = this.props;
        console.log(loading);
        return (
            <>

                <Button type="primary" onClick={this.handleShowModal}>
                    Create book
                </Button>

                <Modal
                    visible={visible}
                    title="Create/Update book"
                    onCancel={this.handleHideModal}

                    footer={[
                        <Button
                            type="primary"
                            key="back"
                            onClick={this.handleHideModal}>
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
                    {loading && <Spin tip="Loading...">

                    </Spin>}
                    <MyForm

                    />
                </Modal>

            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        visible: state.modalReducer.visible,
        loading: state.modalReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        show: () => { dispatch(showModalAction()) },
        hide: () => { dispatch(hideModalAction()) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookAddModal);