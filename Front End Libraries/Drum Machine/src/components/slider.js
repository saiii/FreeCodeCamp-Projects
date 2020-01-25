import React from 'react';

const slider = props => {
    return (
        <input type='range' className={props.className} min='0' max='100' value='100'></input>
    );
};

export default slider;