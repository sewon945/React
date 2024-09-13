import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 내가 화면(브라우저)에 띄울 거 경로 설정해주기
// import App from './App';
// import App from './example/Ex01'
// import App from './example/Ex02'
// import App from './example/Ex03'
// import App from './example/Ex04'
// bimport App from './example/Ex05'
// import App from './example/Ex06'
// import App from './example/Ex07'
// import App from './example/Ex08'
// import App from './example/Ex09'
// import App from './example/Ex10'
// import App from './example/Ex11'
// import App from './example/Ex12'
// import App from './example/Ex13'
// import App from './example/Ex14'
// import App from './example/Ex15'
// import App from './example/Ex16'
// import App from './example/Ex17'
// import App from './example/Ex18'
// import App from './example/Ex19'
import App from './example/Ex20'

import reportWebVitals from './reportWebVitals';

// 화면을 계속 렌더링 시킴
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <App />
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
