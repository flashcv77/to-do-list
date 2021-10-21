import React from "react";

export const Field = (props) => {
    return (
        <div>
            <div className="input-container">
                <label htmlFor={props.name}>{props.label}</label>
                <input
                    autoComplete="off"
                    className={props.error ? "invalid" : "valid"}
                    placeholder={props.label}
                    type={
                        props.name === "password" || props.name === "confirmPassword"
                            ? "password"
                            : "text"
                    }
                    value={props.value}
                    onChange={props.onChange}
                    name={props.name}
                    id={props.name}
                />
            </div>
            <div className="error">
                <span>{props.error && <span>{props.error}</span>}</span>
            </div>
        </div>
    );
};

export default Field;