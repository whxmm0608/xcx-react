import React, { Component } from 'react'
import { Button, Space } from 'antd';
export default class header extends Component {
    goBack () {

    }
    render () {
        console.log('header组件收到的prop', this.props);
        return (
            <div style={{ padding: '20px' }}>
                <h3>React Router Demo</h3>
                <Space>
                    <Button onClick={this.goBack}>后退</Button>
                    <Button onClick={this.goFoward}>前进</Button>
                </Space>
                <div style={{ padding: '20px 0' }}>
                    <Space>
                        <Button type='primary'>自定义按钮1</Button>
                        <Button type='primary'>自定义按钮2 -- 读取customize.less</Button>
                    </Space>
                </div>
            </div>

        )
    }
}
