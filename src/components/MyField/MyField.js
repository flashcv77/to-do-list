import React from "react";

export const MyField = ({ name, label, autoComplete, type, input, placeholder, meta }) => {
    console.log(name, label, autoComplete, type, input, placeholder, meta);
    return (
        <div>
            <div className="input-container">
                <label htmlFor={name}>{label}</label>
                <input
                    {...input}
                    autoComplete={autoComplete}
                    className={meta.error ? "invalid" : "valid"}
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    id={name}
                />
                <div className="error">
                    <span>{meta.error && meta.touched && <span>{meta.error}</span>}</span>
                </div>
            </div>
        </div>
    );
};

export default MyField;