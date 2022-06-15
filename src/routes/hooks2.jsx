/**
 * https://blog.csdn.net/frontend_frank/article/details/118347085
 */
import React, { useState } from 'react';
const Child = React.memo((props) => {
    console.log("我是前端开发爱好者的子组件，我更新了...");
        return (
            <div>
                <h3>子组件</h3>
                <div>text:{props.name}</div>
                <div>{new Date().getTime()}</div>
            </div>
        )
    }
)

const Parent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("")

    //避免rerender
    const handleClick = () => {
        setCount(count + 1);
    }
    const handleInputChange = (e) => {
        setText(e.target.value)
    }
    return (<div>
        <input onChange={handleInputChange} />
        <button onClick={handleClick}>+1</button>
        <div>count:{count}</div>
        <Child name={text} />
    </div>)
}

export default Parent;