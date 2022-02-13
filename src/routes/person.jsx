import React from "react";
class Person extends React.Component{
    handleClick = () => {
        console.log(this.saveInput.value);
    }
    handleGoto = () => {
        console.log(this.saveInput.value);
    }
    
    render () {
        return <div>
            <input type="text" ref={e => this.saveInput = e} />
            <button onClick={this.handleClick}>点击获取输入框的值</button>
            <button onClick={this.handleGoto}>点击跳转到用户列表</button>
        </div>
    }
 }

export default Person;