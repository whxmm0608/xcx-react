import React, { Component } from 'react'

const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;
export default class A extends Component {
    username = 'dasad';
    age = 18;
    render () {
        return (
            <div style={{ background: 'orange' }}>
                <div>我是A组件</div>
                <h1>我的用户名是{this.username}</h1>
                <Provider value={{ username: this.username, age: this.age }}><B /></Provider>
            </div>

        )
    }
}

class B extends Component {
    static contextType = MyContext;//声明接收Provide
    render () {
        const { username, age } = this.context;
        return (
            <div style={{ background: 'lightblue', width: '80%', margin: 'auto' }}>

                <div>我是B组件</div>
                <h1>我的用户名是{username}</h1>
                <h1>我的年龄是{age}</h1>
                <C />
            </div>

        )
    }
}

class C extends Component {
    static contextType = MyContext;//声明接收Provide 该方法只能用于类式组件
    render () {
        const { username, age } = this.context;
        return (
            <div style={{ background: 'gray', width: '70%', margin: 'auto' }}>
                <div>我是C组件</div>
                <h1>我的用户名是{username}</h1>
                <h1>我的年龄是{age}</h1>
                <D />
            </div>

        )
    }
}

function D () {
    return (
        <div style={{ background: 'green', width: '60%', margin: 'auto' }}>
            <div>我是D组件</div>
            <Consumer>
                {
                    value => `我的用户名是${value.username},我的年龄是${value.age}`
                }
            </Consumer>
        </div>

    )
}

