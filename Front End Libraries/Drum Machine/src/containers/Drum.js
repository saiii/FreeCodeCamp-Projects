import React, { Component, Fragment } from 'react';

import KeyButton from '../components/keyButton';
import Screen from './screen';
import Keyboard from './keyboard';
import Slider from '../components/slider';
import Power from '../components/power';

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
        ], 
        whichKey: null,
        volume: 1,
        power: true
    }
    sendDatafromParent = (data) => {
        this.setState({whichKey: data});
    }
    setVolume = (data) => {
        this.setState({volume: data});
    }
    switchPower = (power) => {
        this.setState({power: power});
    }
    render() {
        return (
            <Fragment>
                <div id="drum-machine" className={classes.Drum}>
                    <div id="display" className={classes.Display}>
                    {this.state.keys.map(key => {
                        return (
                            <KeyButton key={key[0]} keys={key[0]} className={classes.Keys} sound={key[2]} whichKey={this.sendDatafromParent} drumName={key[1]} volume={this.state.volume} power={this.state.power}/>
                        )
                        })}
                    </div>
                    <div className={classes.Control}>
                        <Power className={classes.Power} start={classes.Start} end={classes.End} power={this.switchPower} usePower={this.state.power}/>
                        <Screen className={classes.Screen}>{this.state.whichKey}</Screen>
                        <Slider className={classes.Slider} volume={this.setVolume} />
                    </div>
                </div>
                <Keyboard sound={this.state.keys} whichKey={this.sendDatafromParent} volume={this.state.volume} power={this.state.power}/>
            </Fragment>
        );
    }
}

export default Drum;