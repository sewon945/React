import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Join from './components/Join';
import { useState } from 'react';



function App() {
    // 상품목록을 넣어둘 state 생성 , 초기화값 배열로 줘야 새로고침할 때 오류 안 뜸
    const [list, setList] = useState([])

    return (
        <div className="container">
            <Header/>
            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/join' element={<Join />}></Route>
                <Route path='/login' element={<Login />}></Route>
                {/* ProductList에 state들을 적어서 내가 만든 state들 전달하기 */}
                <Route path='/list'
                    element={<ProductList list={list} setList={setList} />}></Route>
                                                        {/* Detail에서 매개변수 안에 넣어줄 값 파라미터 넣기 */}
                <Route path='/detail/:num' element={<ProductDetail list={list}/>}></Route>
                {/* * : 경로 뒤에 아무 글자나 적어도 NotFound 파일로 이동됨 */}
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
