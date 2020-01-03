import React from 'react';

const editor = (props) => {
    return (
        <div className='Editor'>
            <div>Editor</div>
            <textarea value={props.value}/>
        </div>
    );
};

export default editor;