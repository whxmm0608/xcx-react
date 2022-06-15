/**
 * https://blog.csdn.net/frontend_frank/article/details/118347085
 */
import React, { useState, useCallback } from 'react';

const Child = React.memo((props) => {
    console.log("我是前端开发爱好者的子组件，我更新了...");
    return (
        <div>
            <h3>子组件</h3>
            <div>text:{props.name}</div>
            <div> <input onChange={props.handleInputChange} /></div>
            <div>{new Date().getTime()}</div>
        </div>
    )
})
const Parent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("")
    const handleClick = () => {
        setCount(count + 1);
    }
    const handleInputChange = useCallback((e) => {
        setText(e.target.value + count)
    }, [count])
    /**
     * useCallback第二个参数是依赖项，我的理解是当成vue的计算属性，如果count不改变，useCallback不会重新执行
     */
    return (<div>
        <button onClick={handleClick}>+1</button>
        <div>count:{count}</div>
        <Child name={text} handleInputChange={handleInputChange} />
    </div>)
}

export default Parent;