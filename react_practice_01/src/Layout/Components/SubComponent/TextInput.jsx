import React from 'react';

function TextInput(props) {
    return (
        <label>
            {props.name}
            <input type={props.type} placeholder={props.placeholder} />
        </label>
    );
}

export default TextInput;