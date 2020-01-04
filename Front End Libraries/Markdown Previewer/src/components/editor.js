import React, { Fragment } from 'react';
import classes from './Editor.module.css';

const editor = (props) => {
    let styleEditor = [classes.Editor];
    let styleText = [classes.Editor];
    if (props.max) {
        styleEditor = [classes.MaxEditor];
        styleText = [classes.MaxText];
    }
    return (
        <Fragment>
            <div id='editorDiv' className={styleEditor.join(' ')}>
                <div>Editor</div>
                <div className={classes.Cursor}><i class="far fa-window-maximize" onClick={props.clicked} ></i></div>
            </div>
            <textarea id='editor' value={props.value} onChange={props.changed} className={styleText.join(' ')}/>
        </Fragment>
    );
};

export default editor;