import React from 'react';

const keyButton = (props) => {
    const soundClickHandler = (sound) => {
        var audio = new Audio(sound);
        audio.play();
    }
    return (
        <div className={props.className} onClick={() => soundClickHandler(props.sound)}>
            {props.keys}   
        </div>
    );
}

export default keyButton;