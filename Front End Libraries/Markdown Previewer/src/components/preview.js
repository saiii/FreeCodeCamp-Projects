import React, { Fragment } from 'react';

const preview = (props) => {
    return (
        <Fragment>
            <div>Preview</div>
            <textarea value={props.value}/>
        </Fragment>
    );
};

export default preview;