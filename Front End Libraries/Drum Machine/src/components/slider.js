import React from 'react';

const slider = props => {
    const sliderHandler = (event) => {
        console.log(event.target.value)
        props.volume(event.target.value/100);
        document.getElementById('screen').innerHTML = `Volume: ${event.target.value}`; 
        return event.target.value
    }
    return (
        <input type='range' className={props.className} min='0' max='100' defaultValue='100' onChange={sliderHandler} />
    );
};

export default slider;