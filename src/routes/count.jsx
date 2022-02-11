import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom'

// React Router V6已经不直接支持在类组件中获取props，尽量使用函数式组件。
export default function Example () {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

  const a = useLocation();
  console.log('useLocation', a);
  console.log('useParams', useParams());
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}