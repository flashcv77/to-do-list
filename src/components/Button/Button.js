import React from "react";
import "./Button.scss"

class Button extends React.Component {
    render() {
        return (
            <>
                <button>{this.props.buttonName}</button>
            </>
        )
    }
}

export default Button;