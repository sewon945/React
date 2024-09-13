import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App from './example/MovieList'
import reportWebVitals from './reportWebVitals';
// TERMINAL에서 npm i react-router-dom 적어주면 BrowserRouter 자동완성 가능
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //  <React.StrictMode>
    // import 하고 App 감싸주기
    <BrowserRouter>
        <App />
    </BrowserRouter>
    //  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
