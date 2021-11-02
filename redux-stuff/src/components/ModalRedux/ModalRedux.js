import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from "react-redux";
import { showModalAction, hideModalAction } from "../../store";

const ModalRedux = (props) => {
    console.log(props);

    return (
        <div>
            {/* <div>Reduct</div>
            {props.isOpen && <div>Hello</div>}
            <button onClick={props.openModal}>Click me</button> */}
            <Button
                color="danger"
                onClick={props.openModal}
            >
                Click Me
            </Button>

            <Modal
                fullscreen="md"
                size="md"
                isOpen={props.isOpen}
                toggle={props.hideModal}
            >
                <ModalHeader>
                    Modal title
                </ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                    >
                        Do Something
                    </Button>
                    {' '}
                    <Button
                        onClick={props.hideModal}>
                        Close
                    </Button>
                </ModalFooter>

            </Modal>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        isOpen: state.isModalOpen,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => {
            dispatch(showModalAction(true));
        },
        hideModal: () => {
            dispatch(hideModalAction(false))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRedux);