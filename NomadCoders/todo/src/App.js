import { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import Input from './component/Input'
import List from './component/List'
import { useSelector,useDispatch } from "react-redux";

//스타일 컴포넌트
const Main  = styled.div`
  margin: 1%;
  width: 60%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
   .Tab{
    display: flex;
  }
`


function App() {
  const state = useSelector((state)=>state);
  // const [inputData, setInputData] = useState([]) // 작성된 데이터를 저장할 곳 

  return(
   
    <Main>
      <h1>내가 만드는 투두리스트</h1>
      <Input/>
      {/* 배열을 수정하기 위한 배열 데이터, 배열의 원본을 바꾸는 데이터가 필요함 */}
      <div>
        <div>탭을 만들 예정</div>
        <div className="Tab">
          <div>전체</div>
          <div>완료</div>
          <div>진행 중</div>
        </div>

      </div>
      <ul>
      {state.length!==0 ? (state.map((el,i)=>
      (<List key = {`i+${i}`} value = {el} idx = {i} />))) : null
      }
      </ul>
    </Main>
 
  );
}


// 

export default App;
