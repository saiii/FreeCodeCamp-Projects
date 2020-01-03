import React, { Fragment } from 'react';

const editor = (props) => {
    return (
        <Fragment>
            <div id='editorDiv'>
                <div>Editor</div>
                <div><i class="far fa-window-maximize" onClick={props.clicked}></i></div>
            </div>
            <textarea id='editor' value={props.value} onChange={props.changed}/>
        </Fragment>
    );
};

export default editor;