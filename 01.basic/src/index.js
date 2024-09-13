import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// ctrl + (import에 있는 App)클릭 => 사용되고 있는 App.js 파일로 이동
import App from './AppExample'
// ctrl + App => AppExample..js 파일로 이동
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  // <React.StrictMode>
    <App /> 
  // </React.StrictMode> => 내가 코드를 잘 작성했는 지 한 번 더 확인시켜 주게끔 콘솔창에 한 번 더 나옴(중복됨)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
