import React, { Component } from 'react';

class Keyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentKey: null
        }
    }
    componentDidMount() {
        document.addEventListener('keydown', this.onKeydown);
    }
    onKeydown = (event) => {
        let audio;
        let sound;
        switch (event.key) {
            case 'q': 
            sound = this.props.bank ? this.props.sound[0][2] : this.props.sound[0][4];
                audio = new Audio(sound);
                if (this.props.power === false) {
                    audio.volume = 0;
                } else {
                    audio.volume = this.props.volume;
                }
                audio.play();
                this.setState({currentKey: 'Chord 1'});
                this.props.whichKey(this.state.currentKey);
                break;
            case 'w': 
                sound = this.props.bank ? this.props.sound[1][2] : this.props.sound[1][4];
                audio = new Audio(sound);
                if (this.props.power === false) {
                    audio.volume = 0;
                } else {
                    audio.volume = this.props.volume;
                }
                audio.play();
                this.setState({currentKey: 'Chord 2'});
                this.props.whichKey(this.state.currentKey);
                break;
            case 'e':
                sound = this.props.bank ? this.props.sound[2][2] : this.props.sound[2][4];
                audio = new Audio(sound);
                if (this.props.power === false) {
                    audio.volume = 0;
                } else {
                    audio.volume = this.props.volume;
                }
                audio.play();
                this.setState({currentKey: 'Chord 3'});
                this.props.whichKey(this.state.currentKey);
                break;
            case 'a':
                sound = this.props.bank ? this.props.sound[3][2] : this.props.sound[3][4];
                audio = new Audio(sound);
                if (this.props.power === false) {
                    audio.volume = 0;
                } else {
                    audio.volume = this.props.volume;
                }
                audio.play();
                this.setState({currentKey: 'Shaker'});
                this.props.whichKey(this.state.currentKey);
                break;
            case 's':
                sound = this.props.bank ? this.props.sound[4][2] : this.props.sound[4][4];
                audio = new Audio(sound);
                if (this.props.power === false) {
                    audio.volume = 0;
                } else {
                    audio.volume = this.props.volume;
                }
                audio.play();
                this.setState({currentKey: 'Open HH'});
                this.props.whichKey(this.state.currentKey);
                break;
            case 'd':
                sound = this.props.bank ? this.props.sound[5][2] : this.props.sound[5][4];
                audio = new Audio(sound);
                if (this.props.power === false) {
                    audio.volume = 0;
                } else {
                    audio.volume = this.props.volume;
                }
                audio.play();
                this.setState({currentKey: 'Closed HH'});
                this.props.whichKey(this.state.currentKey);
                break;
            case 'z':
                sound = this.props.bank ? this.props.sound[6][2] : this.props.sound[6][4];
                audio = new Audio(sound);
                if (this.props.power === false) {
                    audio.volume = 0;
                } else {
                    audio.volume = this.props.volume;
                }
                audio.play();
                this.setState({currentKey: 'Punchy Kick'});
                this.props.whichKey(this.state.currentKey);
                break;
            case 'x':
                sound = this.props.bank ? this.props.sound[7][2] : this.props.sound[7][4];
                audio = new Audio(sound);
                if (this.props.power === false) {
                    audio.volume = 0;
                } else {
                    audio.volume = this.props.volume;
                }
                audio.play();
                this.setState({currentKey: 'Side Stick'});
                this.props.whichKey(this.state.currentKey);
                break;
            case 'c':
                sound = this.props.bank ? this.props.sound[8][2] : this.props.sound[8][4];
                audio = new Audio(sound);
                if (this.props.power === false) {
                    audio.volume = 0;
                } else {
                    audio.volume = this.props.volume;
                }
                audio.play();
                this.setState({currentKey: 'Snare'});
                this.props.whichKey(this.state.currentKey);
                break;
            default:
                audio = new Audio();
        } 
    }
    render () {
        return (
            <div onKeyDown={this.sendKey}>
            </div>
        )
    }
}

export default Keyboard;