import React, { Component } from 'react';

import KeyButton from '../components/keyButton';
import Screen from '../components/screen';

import classes from './Drum.module.css';

class Drum extends Component {
    state = {
        keys: [
            ['Q', 'Chord 1', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'],
            ['W', 'Chord 2', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'],
            ['E', 'Chord 3', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'],
            ['A', 'Shaker', 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'],
            ['S', 'Open HH', 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'],
            ['D', 'Closed HH', 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'],
            ['Z', 'Punchy Kick', 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'],
            ['X', 'Side Stick', 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'],
            ['C', 'Snare', 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3']
        ]
    }

    componentDidMount() {
        document.addEventListener('keydown', this.onKeydown);
    }
    onKeydown = (event) => {
        console.log(event);
        let audio;
        switch (event.key) {
            case 'q': 
                audio = new Audio(this.state.keys[0][2]);
                audio.play();
                break;
            case 'w': 
                audio = new Audio(this.state.keys[1][2]);
                audio.play();
                break;
            case 'e':
                audio = new Audio(this.state.keys[2][2]);
                audio.play();
                break;
            case 'a':
                audio = new Audio(this.state.keys[3][2]);
                audio.play();
                break;
            case 's':
                audio = new Audio(this.state.keys[4][2]);
                audio.play();
                break;
            case 'd':
                audio = new Audio(this.state.keys[5][2]);
                audio.play();
                break;
            case 'z':
                audio = new Audio(this.state.keys[6][2]);
                audio.play();
                break;
            case 'x':
                audio = new Audio(this.state.keys[7][2]);
                audio.play();
                break;
            case 'c':
                audio = new Audio(this.state.keys[8][2]);
                audio.play();
                break;
            default:
                audio = new Audio(this.state.keys[2][2]);
                audio.play();
        }      
    }
    render() {
        return (
            <div id="drum-machine" className={classes.Drum}>
                <div id="display" className={classes.Display}>
                {this.state.keys.map(key => {
                    return (
                        <KeyButton key={key[0]} keys={key[0]} className={classes.Keys} sound={key[2]} />
                    )
                    })}
                </div>
                <div className={classes.Control}>
                    <Screen className={classes.Screen} />
                    
                </div>
            </div>
        );
    }
}

export default Drum;