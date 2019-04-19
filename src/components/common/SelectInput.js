import React from 'react';

const SelectInput = ({name, label, value, defaultOption, options, error, onChange}) => {
    return(
        <div className="form-group">
            <label htmlFor={name}>{name}</label>
            <select className="form-control">
                <option value="">{defaultOption}</option>
                {
                    options && options.map(o => <option key={o.value} value={o.value}>{o.value}</option>)
                }
            </select>
        </div>
    );
}

export default SelectInput;