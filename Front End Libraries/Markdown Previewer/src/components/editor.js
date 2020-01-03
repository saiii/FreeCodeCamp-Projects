import React, { Fragment } from 'react';

const editor = (props) => {
    return (
        <Fragment>
            <div>Editor</div>
            <textarea value={props.value}/>
        </Fragment>
    );
};

export default editor;