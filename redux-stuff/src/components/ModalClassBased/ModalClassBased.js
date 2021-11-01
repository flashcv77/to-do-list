// import { Button } from 'bootstrap';
import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';


class ModalClassBased extends React.Component {
    state = {
        show: false,
    }

    handleToggle = () => {
        this.setState({ show: !this.state.show })
    }

    render() {
        return (
            <div>
                <Button
                    color="danger"
                    onClick={this.handleToggle}
                >
                    Click Me
                </Button>
                <Modal
                    fullscreen="lg"
                    size="lg"
                    isOpen={this.state.show}
                    toggle={() => { this.handleToggle() }}
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
                        <Button onClick={this.handleToggle}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ModalClassBased;
