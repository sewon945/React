import React, { useRef } from 'react'

const Ex15 = () => {
    let pdfRef = useRef()

    const changePdf = () => {
      console.log(pdfRef.current.src);
      // pdf 변경하기 버튼을 삼항연산자를 통해 변경(반환)시키기
      pdfRef.current.src == 'http://localhost:3000/pdf/pdfFile1.pdf'   // ref 속성이 이 조건이랑 같냐?
     ? pdfRef.current.src = '/pdf/pdfFile2.pdf'   // 참일 때
     : pdfRef.current.src = '/pdf/pdfFile1.pdf'   // 거짓
    }
    

    return (
      // vh : viewport height : 문서의 가시영역
      <div style={{ height: '100vh' }}>
        <button onClick={changePdf}>pdf 변경하기</button>
        {/* <iframe> 태그는 HTML 문서에서 인라인 프레임을 생성하는데 사용
          인라인 프레임은 현재 문서 안에 다른 문서를 삽입하는 방법을 제공 */}
        <iframe
          ref={pdfRef}
          width='100%'
          height='90%'
          // public 안에 있는 이미지/정적인 파일들을 접근할 때에는 public을 기준으로 삼고 src에 바로 그 경로만 적어주면 됨
          src='/pdf/pdfFile1.pdf'
        >
      
        </iframe>
      </div>
    )
}

export default Ex15