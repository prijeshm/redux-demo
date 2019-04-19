import React from 'react';

const ButtonInput = ({name, value, onClick}) => {
    return (
        <input type="button" name={name} value={value} onClick={onClick} />
    );
}

export default ButtonInput;