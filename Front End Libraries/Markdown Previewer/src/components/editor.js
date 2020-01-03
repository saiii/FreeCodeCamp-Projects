import React, { Fragment } from 'react';

const editor = (props) => {
    return (
        <Fragment>
            <div id='editorDiv'>Editor</div>
            <textarea id='editor' value={props.value}/>
        </Fragment>
    );
};

export default editor;