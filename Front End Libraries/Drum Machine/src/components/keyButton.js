import React from 'react';

const keyButton = (props) => {
    const soundClickHandler = (sound) => {
        var audio = new Audio(sound);
        props.whichKey(props.drumName);
        audio.volume = +props.volume;
        console.log(props.volume)
        audio.play();
    }
    return (
        <div className={props.className} onClick={() => soundClickHandler(props.sound)}>
            {props.keys}   
        </div>
    );
}

export default keyButton;