import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';

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
      {/* React Router V6 navigate ---> 编程式路由导航 */}
      {/* 注意params参数需要声明接收 */}
      {/* 备注：React Router旧版本使用this.props.history.push/replace 方式实现编程式路由跳转  */}
      <Button onClick={() => { navigate('/message/hunan/hengyang/China-JiePai?borthDate=20210803', naviParams) }}>点击跳转到消息列表</Button>
    </main>
  );
}