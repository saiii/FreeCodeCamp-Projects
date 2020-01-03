import React, { Fragment } from 'react';
import classes from './windows.module.css';

const editor = (props) => {
    let style = [];
    if (props.max) {
        style = [classes.max]
    }
    return (
        <Fragment>
            <div id='editorDiv' className={style.join(' ')}>
                <div>Editor</div>
                <div><i class="far fa-window-maximize" onClick={props.clicked}></i></div>
            </div>
            <textarea id='editor' value={props.value} onChange={props.changed} className={style.join(' ')}/>
        </Fragment>
    );
};

export default editor;