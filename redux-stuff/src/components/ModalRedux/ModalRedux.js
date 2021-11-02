import { useDispatch } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { toggleModal } from "../../action";

const ModalRedux = () => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleModal())     //receives "action from /action"
    }

    return (
        <div>
            <Button
                color="danger"
                onClick={handleToggle}
            >
                Click Me
            </Button>
            <Modal
                fullscreen="lg"
                size="lg"
                isOpen={handleToggle()}
                toggle={() => { handleToggle() }}
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
                    <Button onClick={handleToggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalRedux;