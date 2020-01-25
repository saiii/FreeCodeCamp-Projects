import React from 'react';

const power = props => { 
    const clickHandler = () => {
        if (props.usePower === true) {
            document.getElementById('bar').style.justifyContent = 'flex-end';
        } else {
            document.getElementById('bar').style.justifyContent = 'flex-start';
        }
        console.log(props.usePower);
        props.power(!props.usePower);
    }
    return (
        <div id='power' className={props.className}>
            <p>Power</p>
            <div id='bar' onClick={clickHandler}>
                <span></span>
            </div>
        </div>
    );
};

export default power;