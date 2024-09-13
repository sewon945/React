import logo from './logo.svg';
import './App.css';

function App() {

  // JSX : 하나의 파일 안에 HTML과 JS를 동시에 작성 가능
  //      => 가독성이 좋고, 작성이 쉽다

  // 1) 여러 요소가 있다면 반드시 부모요소로 감싸야 한다! -> 그렇지 않으면 error
  //    => 이때, 꼭 div태그가 아니더라도 가능( <></> )

  // 2) 표현식 사용 가능 - JSX 내부에서는 JS 표현식이 가능
  // 만약, return() 안에서 JS 문법을 사용하려면? {} 안에 작성
  //    => 단, 표현식 내부에서 if문 사용 불가능
  // 2-1) 만약, 조건이 한 개라면 => && 연산자 사용 
  // 2-2)       조건이 true / false 두 개라면 => 삼항 연산자 사용
  // 2-3)       조건이 3개 이상이면 => return문 위에 다중 if문 작성 (AppExample.js 파일에서 실습)
  let name = '오세원'; // 변수를 만들었지만 사용하지 않았으면 name 색이 회색 처리가 됨
  let state ='open';

  // 3) 기존 문법과 다른 점들!
  //    className
  //      class 대신에 className 사용!
  //      태그를 사용할 때, *소문자*만 사용할 것!
  //      컴포넌트 이름을 만들 때, ** 대문자**만 사용할 것!
  //      끝 태그 생략 불가! (content가 없더라도 끝 태그 생략하면 안됨)

  // 4) 스타일링 적용 가능
  // 4-1) 객체(Object) 형태로 삽입
  const welStyle = {
    fontSize : '38px',
    color : 'yellow',
    backgroundColor : 'darkgreen'
  }

  // 화면으로 전달
  return (
    // 1)
    //<div>
    // <div className="App">
    //   <h1>react</h1>
    // </div>
    //</div>

    // 2)
    <div className="App" style={welStyle}>
      <h1>{name}님 반갑습니다!</h1>
      {/* 2-2) 삼항연산자 사용 */}
      {name === '오세원' ? // 조건식
      <p>{name}님의 방문을 환영합니다</p> // 참일 때 실행
      :
      <p>{name}님 다음에 방문해주세요!</p> // 거짓일 때 실행(위의 변수 이름과 같지 않을 때)
      }

      {/* 2-1) && 연산자 이용 */}
      {state === 'open' && <p>오픈완료! 어서오세요!</p>}
      {/* {state === 'close' && <p>오픈완료! 어서오세요!</p>} => false */}
      {/* <div style={welStyle}></div> */}
      <div>react</div>
    </div>
    
    
  );
}

export default App;
// App이라는 코드 자체를 수출하겠다는 뜻