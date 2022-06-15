/**
 * https://blog.csdn.net/frontend_frank/article/details/118347085
 */
import React, { useState, useMemo } from 'react';
const Parent = () => {
    console.log("parent 执行了...")
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");
    const [price, setPrice] = useState(10);
    const handleClick = () => {
        setCount(count + 1);
    }

    /**
     * useMemo缓存函数的计算结果
     */
    const getTotal = useMemo(() => {
        console.log("getTotal 执行了 ...")
        return count * price
    }, [count, price])
    return (<div>


        <div> 颜色: <input onChange={(e) => setColor(e.target.value)} /></div>
        <div> 单价: <input value={price} onChange={(e) => setPrice(Number(e.target.value))} /></div>
        <div> 数量:{count} <button onClick={handleClick}>+1</button></div>
        <div>总价:{getTotal}</div>
    </div>)
}