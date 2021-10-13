import React from "react";
import './ToDo.css'

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        };
    };

    render() {
        return (
            <div class="task">ToDo</div >
        )
    }

}

export default ToDo;