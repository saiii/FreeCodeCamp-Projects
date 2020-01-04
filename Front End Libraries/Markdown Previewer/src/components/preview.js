import React, { Fragment } from 'react';
import classes from './Preview.module.css';

const preview = (props) => {
    let stylePreview= [classes.Preview];
    let styleText = [classes.Preview];
    if (props.max) {
        stylePreview = [classes.MaxPreview];
        styleText = [classes.MaxText];
    }
    return (
        <Fragment>
            <div id='previewDiv' className={stylePreview.join(' ')}>
                <div>Previewer</div>
                <div className={classes.Cursor}><i class="far fa-window-maximize" onClick={props.clicked}></i></div>
            </div>
            <div id='preview' className={styleText.join(' ')}></div>
        </Fragment>
    );
};

export default preview;