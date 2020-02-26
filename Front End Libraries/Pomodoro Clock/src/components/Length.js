import React, {Fragment} from 'react';

const Length = props => {
    return (
        <Fragment>
            <p>{props.lengthType}</p>
            <div>
                <i class="fas fa-arrow-up"></i>
                <p>{props.length}</p>
                <i class="fas fa-arrow-down"></i>
            </div>

        </Fragment>
    )
};

export default Length;