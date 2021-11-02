import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'
import { showModal, hideModal } from '../../reducers/modalReducer'

const ModalRedux = () => {
    const isActive = useSelector((state) => state.modal_status.value)

    const dispatch = useDispatch();

    return (
        <div>
            <Button
                color="danger"
                onClick={() => dispatch(showModal())}
            >
                Click Me
            </Button>
            <Modal
                fullscreen="md"
                size="md"
                isOpen={isActive}
                toggle={() => dispatch(hideModal())}
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
                    <Button onClick={() => dispatch(hideModal())}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalRedux;