import React from "react";
import { Button, Input, Row, Col } from 'antd';
class Person extends React.Component {
    handleClick = () => {
        console.log(this.saveInput.value);
    }
    render () {
        return <div>
            <Input.Group size="large">
                <Row align={'center'}>
                    <Col><Input type="text" ref={e => this.saveInput = e} /></Col>
                    <Col><Button type="primary" onClick={this.handleClick}>点击获取输入框的值</Button></Col>
                </Row>
            </Input.Group>
        </div>
    }
}

export default Person;