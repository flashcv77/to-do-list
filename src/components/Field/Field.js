import React from "react";

export const Field = ({ name, label, value, error, onChange, type }) => {

    return (
        <div>
            <div className="input-container">
                <label htmlFor={name}>{label}</label>
                <input
                    autoComplete="off"
                    className={error ? "invalid" : "valid"}
                    placeholder={label}
                    type={type}
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

export default Field;