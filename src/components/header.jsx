import React, { Component } from 'react'
import { Button } from 'antd';
export default class header extends Component {
    goBack () {

    }
    render () {
        console.log('header组件收到的prop', this.props);
        return (
            <div style={{padding:'20px'}}>
                <h3>React Router Demo</h3>
                <Button onClick={this.goBack}>后退</Button>
                <Button onClick={this.goFoward}>前进</Button>
                <div>
                <Button type='primary'>自定义按钮</Button>
                </div>
            </div>

        )
    }
}
