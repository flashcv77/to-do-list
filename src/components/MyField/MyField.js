import React from "react";

export const MyField = ({ name, label, value, error, onChange }) => {

    return (
        <div>
            <div className="input-container">
                <label htmlFor={name}>{label}</label>
                <input
                    autoComplete="off"
                    className={error ? "invalid" : "valid"}
                    placeholder={label}
                    type={
                        name === "password" || name === "confirmPassword"
                            ? "password"
                            : "text"
                    }
                    value={value}
                    onChange={onChange}
                    name={name}
                    id={name}
                />
                <div className="error">
                    <span>{error && <span>{error}</span>}</span>
                </div>
            </div>

        </div>
    );
};

export default MyField;