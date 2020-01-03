import React, { Fragment } from 'react';

const preview = (props) => {
    return (
        <Fragment>
            <div id='previewDiv' style={{width: '98%'}}>Preview</div>
            <div id='preview' value={props.value} style={{maxWidth: '98%', minWidth: '98%'}}></div>
        </Fragment>
    );
};

export default preview;