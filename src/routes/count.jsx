import React, { useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { Button } from 'antd';

// React Router V6已经不直接支持在类组件中获取props，尽量使用函数式组件。
export default function Example () {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

  // console.log('useLocation', useLocation());
  console.log('useParams', useParams());

  let location = useLocation();
  console.log(location);
  console.log(location.state);


  // 用法参考 https://juejin.cn/post/7026994491680620557
  const [searchParams] = useSearchParams();
  let name = searchParams.get('name');
  let age = searchParams.get('age');
  let hobby = searchParams.get('hobby');
  console.log(name, age, hobby);


  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
}