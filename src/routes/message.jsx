import React from 'react';
import { useSearchParams, useParams, useLocation } from 'react-router-dom'
export default function Message () {

  // React Router V6  接state参数(备注：刷新也可以保留参数)
  const location = useLocation();
  const { state } = location;
  console.log('state', state);

  // React Router V6  接params参数 
  const params = useParams();
  console.log('params', params);

  // React Router V6 接search参数 形如?xx=1&yy=2
  const [searchParams] = useSearchParams();
  let borthDate = searchParams.get('borthDate');
  console.log(borthDate);
  

    return (
      <main style={{ padding: "1rem 0" }}>
        <div>{ state.title}出生于{borthDate}</div>
      </main>
    );
  }