import React, { Fragment } from 'react';

const preview = (props) => {
    return (
        <Fragment>
            <div id='previewDiv' style={{width: '98%'}}>Preview</div>
            <textarea id='previewText' value={props.value} style={{maxWidth: '98%', minWidth: '98%'}}/>
        </Fragment>
    );
};

export default preview;