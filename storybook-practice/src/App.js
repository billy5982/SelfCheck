import styled from "styled-components";
import { useRef,useState } from "react";
const Button = styled.button`
  background-color : red;
  color : black;
  border-radius : 10px;
  height : 50px
  width : 50px
`
//hover을 이용할 스타일 컴포넌트입니다. (div 태그)
const Colorfuldiv = styled.button`
  background-color : yellow;
  font-size : 50px;
  border : 2px solid green;
  &:hover{ 
    // 이와 같이 호버 이벤트 등 &:이벤트 명 을 사용하면 컴포넌트 내에 이벤트를 줄수 있
    width : 200px;
    height : 200px;
   }
`
//props를 사용할 수 있다는 것을 보여주는 스타일 컴포넌트 입니다.
const PropsButton = styled.button`
   background-color : ${({color})=>(color? color : "white")}; //CSS 작성 시 세미 콜론은 꼭 찍어줘야 한다.
   font-size : ${({textSize})=>textSize ? textSize : '12px'};
`

// 상속을 구현할 스타일 컴포넌트입니다
const ColorRadiusDiv = styled(Colorfuldiv)` // () 소괄호를 이용하여 소괄호 내부에 상속을 원하는 컴포넌트를 넣어 상속을 구현합니다
border-radius : 10px
`


//추가로 useRef이용하기
//useRef를 변경되지 않는 값을 저장할 때 용이, 직접 값을 건들여주면 랜더링 시 변화를 확인 
//하지만 직접값을 건드려도 랜더링이 되진 않음. 다른 무언가가 전체를 랜더링 해준다면 그 때 같이 화면에 변경사항이 랜더링 됨.
// 태그에서 ref로 useRef 할당값을 넣으면 해당 태그가 할당됨 
// const uu = useRef(null); uu = {current: null}
// <li ref = {uu}> =>  uu = {current : li} 
// 다른 곳에서 uu.current.focus() 라던지, uu.current.value() => 인풋에 주소를 넣었다면 document.querySelector 처럼 사용이 가능

function App() {
   const ref = useRef(null)
   console.log(ref)
   const focusInput = () =>{
    console.log('이벤트 발생!_!')
    ref.current.focus()
   }
  return (
    <div>
    <Colorfuldiv>내가 만든 div</Colorfuldiv>
    <ColorRadiusDiv>상속을 구현한 컴포넌트 입니다.</ColorRadiusDiv>
    <br/>
    <input type = "text" ref={ref}/>
    <Button onClick={focusInput}>내가 만든 기린 그림</Button>
    <PropsButton textSize = '18px' color = 'skyblue'>두개의 속성을 전달받은 버튼입니다</PropsButton>
    <PropsButton textSize = '25px'>텍스트 사이즈만 전달 받은 버튼입니다.</PropsButton>
    <PropsButton color = "yellow">color 속성만 전달 받은 버튼입니다. </PropsButton>
    </div>
  );
}

export default App;
