import './App.css';
import MenuBox from './components/MenuBox';
import Member from './components/Member';
// MenuBox 임폴트 해주기
// 경로를 바꿔주기 위해 TERMINAL에서 cd ./ tap 적고 npm start

// 상위 요소(App.js)에서 만든 <MenuBox>의 키와 값을 하위 요소(MenuBox.jsx)로 전달 (= 부모요소 -> 자식요소)

function App() {
  // rafce : 함수형 컴포넌트를 만드는 단축키(화살표 함수 구조)

  // 컴포넌트 : 리엑트로 만들어진 앱을 이루는 최소 단위 (하나의 웹 페이지를 만들기 위해서는 하나의 컴포넌트들을 잘 제어하고 조립해야 함)
  //   => 목적성 : 반복되는 코드를 하나로 묶어서 컴포넌트로 만듦 -> jsx파일에서 내가 만든 속성이 객체 형태로 자식에게 전달됨
  // 컴포넌트를 만들 때에는 ** 반드시, 대문자로 시작! => 기존의 HTML 태그와 구분하기 위해서

  // props
  // : 상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용
  // 상위 컴포넌트 : <컴포넌트 이름(MenuBox) 속성(name과 price)='값'/>
  // 하위 컴포넌트 : 매개 변수로 값을 Object(객체 형태)로 전달 받는다 - (jsx 파일의 화살표 함수 안에서?)

  let temp ='Ice';
  let team ='런닝맨'

  return (
    <>
      {/* 메뉴판 만들기 */}
      <table border='1px'>
        <tr>
          <th>메뉴 이름</th>
          <th>가격</th>
        </tr>
        <tr>
          <td>아메리카노</td>
          <td>2500원</td>
        </tr>
        <tr>
          <td>카페라떼</td>
          <td>3000원</td>
        </tr>
        {/* menubox라는 컴포넌트를 src폴더에서 components라는 폴더에서 MenuBox.jsx라는 컴포넌트를 만들어서 */}
        <MenuBox name="바닐라라떼" price='3500원'></MenuBox>
        <MenuBox temp={temp} name={'복숭아아이스티'} price={'1500원'}></MenuBox>
        {/* temp라는 속성 안에 temp라고 변수를 만들면 jsx 파일의 props로 Ice 전달 */}
      </table>

      <hr></hr>
      {/* 실습) 팀원을 소개하는 컴포넌트를 생성하기 */}
      {/* 1) Member라는 이름의 컴포넌트 파일 생성하기 */}
      {/* 2) props를 활용하여 2개의 속성을 전달해주기 - (1) teamName (2) MemberName 전달 */}

      <table>
      <Member teamName='RE+ECO' memberName='오세원'></Member>
      <Member teamName='RE+ECO' memberName='최지원'></Member>
      <Member teamName='RE+ECO' memberName='이혜성'></Member>
      </table>

      <hr></hr>
      <Member teamName={team} memberName=' 유재석'></Member>
      <Member teamName={team} memberName=' 지석진'></Member>
      <Member teamName={team} memberName=' 양세찬'></Member>
    </>
  );
}

export default App;
