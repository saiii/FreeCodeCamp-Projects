import React, { Component } from 'react';

class screen extends Component {
    render () {
        return (
            <div id='screen' className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}

export default screen;