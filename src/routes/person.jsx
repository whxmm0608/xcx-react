import React from "react";
import { Button, Input, Row, Space } from 'antd';
class Person extends React.Component {
    handleClick = () => {
        console.log(this.saveInput.value);
    }
    render () {
        return <div>
            <Input.Group size="large">
                <Row align={'center'}>
                    <Space>
                        <Input type="text" ref={e => this.saveInput = e} />
                        <Button type="primary" onClick={this.handleClick}>点击获取输入框的值</Button>
                    </Space>
                </Row>
            </Input.Group>
        </div>
    }
}

export default Person;