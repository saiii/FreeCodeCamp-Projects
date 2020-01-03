import React, { Fragment } from 'react';

const preview = (props) => {
    return (
        <Fragment>
            <div id='previewDiv' style={{width: '98%'}}>
                <div>Previewer</div>
                <div><i class="far fa-window-maximize"></i></div>
            </div>
            <div id='preview' style={{maxWidth: '98%', minWidth: '98%'}}></div>
        </Fragment>
    );
};

export default preview;