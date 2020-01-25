import React, { Component } from 'react';

class Keyboard extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.onKeydown);
    }
    onKeydown = (event) => {
        console.log(event);
        let audio;
        switch (event.key) {
            case 'q': 
                audio = new Audio(this.props.sound[0][2]);
                audio.play();
                break;
            case 'w': 
                audio = new Audio(this.props.sound[1][2]);
                audio.play();
                break;
            case 'e':
                audio = new Audio(this.props.sound[2][2]);
                audio.play();
                break;
            case 'a':
                audio = new Audio(this.props.sound[3][2]);
                audio.play();
                break;
            case 's':
                audio = new Audio(this.props.sound[4][2]);
                audio.play();
                break;
            case 'd':
                audio = new Audio(this.props.sound[5][2]);
                audio.play();
                break;
            case 'z':
                audio = new Audio(this.props.sound[6][2]);
                audio.play();
                break;
            case 'x':
                audio = new Audio(this.props.sound[7][2]);
                audio.play();
                break;
            case 'c':
                audio = new Audio(this.props.sound[8][2]);
                audio.play();
                break;
            default:
                audio = new Audio(this.props.sound[2][2]);
                audio.play();
        }      
    }
    render () {
        return (
            <div></div>
        )
    }
}

export default Keyboard;