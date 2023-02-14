import React from 'react';

function TextArea(props) {
    return (
        <label>
            {props.name}
            <textarea placeholder={props.placeholder} col={props.col} rows={props.row}></textarea>
        </label>
    );
}

export default TextArea;