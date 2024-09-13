import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main';
import About from './components/About'
import MyPage from './components/MyPage';
import Product from './components/Product';

function App() {

  /*
    1) React Router 설치
      - TERMINAL 창에 npm i react-router-dom
    2) BrowserRouter
      - App 컴포넌트 전체를 감싸주기
        - 브라우저 주소를 감지하는 역할!
    3) Routes
      - 여러 Route(경로)를 감싸서 가지고 있다가, 사용자가 요청한 조건에 맞는 Route가 있을 때,
        그 Route를 렌더링 해준다
    4) Route는 여러가지 경로를 설정할 수 있다

    참고) 예전에는 Routes가 Switch라는 이름으로 사용됨

    5) Route 필수 속성 2가지 : path, element
      - path(경로) : 사용자가 url을 요청했을 때 ( ex. /파일경로 )
      - element : 어떤 컴포넌트를 보여줄 지 ( ex. {<파일이름/>} )
  */


  return (
    <div className="App">
      <h1>React Router 학습하기</h1>

      <Routes>
        {/* path : 경로 , element : 어떤 컴포넌트를 보여줄 것인가 */}
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/mypage' element={<MyPage/>}></Route>
        {/* num이라는 변수를 붙여줌 */}
        <Route path='/product/:num' element={<Product/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
