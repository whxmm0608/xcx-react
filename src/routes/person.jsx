import React from "react";
class Person extends React.Component{
    handleClick = () => {
        console.log(this.saveInput.value);
    }
    render () {
        return <div>
            <input type="text" ref={e => this.saveInput = e} />
            <button onClick={this.handleClick}>点击获取输入框的值</button>
        </div>
    }
 }

export default Person;