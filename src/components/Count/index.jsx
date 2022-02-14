import React, { createRef, Component } from 'react'

import { Button } from 'antd';
import store from './../../redux/store';
import { createIncrementActon, createDecrementActon, createAsyncAction } from './../../redux/count_action';
export default class Count extends Component {
    constructor(props) {
        super(props);
        this.selectNumRef = createRef();
    }

    increment = () => {
        const selectValue = parseInt(this.selectNumRef.current.value);
        store.dispatch(createIncrementActon(selectValue));
    }
    decrement = () => {
        const selectValue = parseInt(this.selectNumRef.current.value);
        store.dispatch(createDecrementActon(selectValue));
    }
    incrementIfOdd = () => {
        store.dispatch({ type: 'incrementIfOdd', data: this.selectNumRef.current.value });
    }

    incrementIfAsync = () => {
        const selectValue = parseInt(this.selectNumRef.current.value);
        store.dispatch(createAsyncAction(selectValue, 1000));
    }
    componentDidMount () {
        store.subscribe(() => {
            this.setState({})
        })
    }

    render () {
        return (
            <div>
                <h1>当前求和为: {store.getState()}</h1>
                <select name="" id="" ref={this.selectNumRef}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <Button onClick={this.increment}>+</Button>
                <Button onClick={this.decrement}>-</Button>
                <Button onClick={this.incrementIfOdd}>当前求和为奇数再加</Button>
                <Button onClick={this.incrementIfAsync}>异步加</Button>
            </div >
        )
    }


}
