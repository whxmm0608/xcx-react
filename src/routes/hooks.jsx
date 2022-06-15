import React, { useState } from 'react';
import { Button } from 'antd';

export default function Example () {
  // 声明一个叫 "count" 的 state 变量
  // const [count, setCount] = useState(() => {
  //   let a = 1;
  //   console.log('useState');
  //   return a;
  // });

  let a = 1;
  const [count, setCount] = useState(a);
  console.log('useState',count);


  return (
    <div style={{ 'border': '1px solid', padding: '10px' }}>
      <p>You clicked {count} times</p>
      <Button onClick={() => { setCount(count + 1) }}>
        Click me
      </Button>
    </div>
  );
}