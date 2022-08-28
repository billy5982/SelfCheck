import styled from "styled-components";
import React from "react";

//스타일 컴포넌트에 props를 구현하려면 구현하는 스타일에서
//${(전달 받을 props)=>{}} => 스타일마다 직접 props를 전달받아야함
const UserBtn = styled.button`
    background : ${({color})=>color||"white"}; //color가 참값이라면 color, 아니면 "white"
`

//스토리북에서 전달받을 props를 상위 컴포넌트에서 받아서 스타일 컴포넌트로 전달받아도 됨(텍스트를 사용할 때 유용한 거 같음)
//스토리북에서 해당 텍스트를 직접 전달받게 사용해도 됨. 스토리에서 예시 한번더 작성할 것임 그거 확인

//Btn은 스토리북에서 세팅 인자로 color와 title을 받을 것이다. 그리고 전달받은 인자의 대한 값을
//UserBtn에게 props값으로 전달 할 것. 스토리북 설정 -> Btn -> UserBtn 순으로 전달됨
const Btn = ({color,title})=> (<UserBtn color={color}>{title}</UserBtn>)

export {Btn,UserBtn}



