import React from 'react';

const TextInput = ({name, value, placeholder, onChange, onSave, error}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{name}</label>
            <input className="form-control" name={name} value={value} onChange={onChange} placeholder={placeholder}/>
            {
                error && (
                    <div className="alert alert-danger">{error}</div>
                )
            }
        </div>
    );
}

export default TextInput;