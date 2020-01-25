import React, { Component } from 'react';

class screen extends Component {
    render () {
        return (
            <div className={this.props.className}>
                {this.props.children}
                {console.log(this.props.children)}
            </div>
        )
    }
}

export default screen;