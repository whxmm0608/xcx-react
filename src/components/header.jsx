import React, { Component } from 'react'

export default class header extends Component {
    render () {
        console.log('header组件收到的prop', this.props);
        return (
            <h3>12345</h3>
        )
    }
}
