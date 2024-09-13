import React, { useState, useEffect } from 'react'


// 영화진흥위원회 API의 발급받은 키를 통해 브라우저 만들기
const Ex19 = () => {
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        // 발급받은 키를 키값에 넣기
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=2f61e3584a807ced8d242076c77d57c2&targetDt=20240701`

        // 비동기함수 - 매개변수로 사이트url
        fetch(url)
            .then((res) => res.json())   // res라는 데이터를 파일 json으로 변환해주기
            .then((res) => {        // res 매개변수를 가져와서 setMovieList함수에 넣어주기
                // console.log(res);
                setMovieList(res.boxOfficeResult.dailyBoxOfficeList)
            })

            // 통신 실패
            .catch(() => {
                console.log('failed');
            })

    }, [])

    // [] 화면이 처음 렌더링 됐을 때만
    // [state] 감지할 대상을 배열 안에 넣기
    // [] 배열이 없으면 화면이 렌더링 될 때마다

    return (
        <div>
            <h1>영화 순위!</h1>
            <table border='1px'>
                <tbody>
                    {movieList.map((item) => (
                        <tr key={item.rnum}>
                            <td>{item.rank}</td>
                            <td>{item.movieNm}</td>
                            <td>{item.openDt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Ex19