import React from 'react';

const bank = props => { 
    const clickHandler = () => {
        if (props.useBank === true) {
            document.getElementById('barBank').style.justifyContent = 'flex-end';
        } else {
            document.getElementById('barBank').style.justifyContent = 'flex-start';
        }
        console.log(props.useBank);
        props.bank(!props.useBank);
    }
    return (
        <div id='bank' className={props.className}>
            <p>Bank</p>
            <div id='barBank' onClick={clickHandler}>
                <span></span>
            </div>
        </div>
    );
};

export default bank;