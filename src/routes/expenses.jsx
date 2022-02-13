import React from 'react';
import { useNavigate } from 'react-router-dom'
export default function Invoices () {
  const navigate = useNavigate();
  const naviParams = {
    replace: false,
    state: {
      title: '方晟小鹏偶'
    }
  }
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
      {/* navigate ---> 编程式路由导航 */}
      {/* 注意params参数需要声明接收 */}
      <button onClick={() => { navigate('/message/hunan/hengyang/?borthDate=20210803', naviParams) }}>点击跳转到消息列表</button>
    </main>
  );
}