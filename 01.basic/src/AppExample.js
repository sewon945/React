function AppExample() {

    // 1. 사용자에게 이름을 입력 받아주기
    // prompt (데이터 타입은 당연히 문자열)
    let name = prompt('이름을 말해주세요.'); 
    // localhost:3000 내용: 이라는 창 하나 띄워서 name 적는 칸 만들어주기

    // 2. 현재 날짜를 가지고 오기
    // 현재 몇 월인지? => getMonth()
    let today = new Date();
    let date = today.toLocaleDateString();
    console.log('오늘의 날짜는?', date);
    // 브라우저 F12 눌러서 콘솔창에서 확인 가능

    let month = today.getMonth() + 1;  // +1을 해줘야 12까지 나옴
    console.log('이번 달은?', month);

    // 3. 다중 if문 만들기
    // 조건1) 3~5월 : 봄
    // 조건2) 6~8월 : 여름
    // 조건3) 9~11월 : 가을
    // 조건4) 12~2월 : 겨울

    let season =""; // 아래에 season이라는 변수를 써주기 위해 빈 문자열 생성해주기

    if(month >= 3 && month <= 5) {
        season = '봄';
    } else if(month >= 6 && month <= 8) {
        season = '여름';
    } else if(month === 9 || month === 10 || month === 11) {
        season = '가을';
    } else {
        season = '겨울';
    }

    return(
        <>
        <h1>{date}</h1> 
        <hr/>
        <h4>{name}님 지금은 {season}입니다. 좋은 하루 보내세요!</h4>
        </>
    )


// App.js처럼 만들었으니 index.js로 가야함
// index.js 파일에서 AppExample.js 파일 불러오는 import 생성해주기
}

// 내가 만든 AppExample 파일을 밖으로 내보내겠다는 뜻
export default AppExample;