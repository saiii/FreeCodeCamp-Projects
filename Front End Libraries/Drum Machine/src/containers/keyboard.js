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
        switch (event.key) {
            case 'q': 
                audio = new Audio(this.props.sound[0][2]);
                audio.play();
                this.setState({currentKey: 'Chord 1'});
                this.props.whichKey(this.state.currentKey);
                break;
            case 'w': 
                audio = new Audio(this.props.sound[1][2]);
                audio.play();
                this.setState({currentKey: 'Chord 2'});
                this.props.whichKey(this.state.currentKey);
                break;
            case 'e':
                audio = new Audio(this.props.sound[2][2]);
                audio.play();
                this.setState({currentKey: 'Chord 3'});
                this.props.whichKey(this.state.currentKey);
                break;
            case 'a':
                audio = new Audio(this.props.sound[3][2]);
                audio.play();
                this.setState({currentKey: 'Shaker'});
                this.props.whichKey(this.state.currentKey);
                break;
            case 's':
                audio = new Audio(this.props.sound[4][2]);
                audio.play();
                this.setState({currentKey: 'Open HH'});
                this.props.whichKey(this.state.currentKey);
                break;
            case 'd':
                audio = new Audio(this.props.sound[5][2]);
                audio.play();
                this.setState({currentKey: 'Closed HH'});
                this.props.whichKey(this.state.currentKey);
                break;
            case 'z':
                audio = new Audio(this.props.sound[6][2]);
                audio.play();
                this.setState({currentKey: 'Punchy Kick'});
                this.props.whichKey(this.state.currentKey);
                break;
            case 'x':
                audio = new Audio(this.props.sound[7][2]);
                audio.play();
                this.setState({currentKey: 'Side Stick'});
                this.props.whichKey(this.state.currentKey);
                break;
            case 'c':
                audio = new Audio(this.props.sound[8][2]);
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