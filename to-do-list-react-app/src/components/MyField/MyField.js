import React from "react";

export const MyField = ({ label, autoComplete, input, placeholder, meta }) => {
    return (
        <div>
            <div className="input-container">
                <label htmlFor={input.name}>{label}</label>
                <input
                    // autoComplete={autoComplete}
                    autoComplete="off"
                    className={meta.error ? "invalid" : "valid"}
                    placeholder={placeholder}
                    id={input.name}
                    {...input}
                />
                <div className="error">
                    <span>{meta.error && meta.touched && <span>{meta.error}</span>}</span>
                </div>
            </div>
        </div>
    );
};

export default MyField;