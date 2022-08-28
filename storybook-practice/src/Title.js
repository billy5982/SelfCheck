//타이틀 컴포넌트를 제작 
import React from "react";

//부모요소에서 title,textColor props를 전달받아 해당 h1스타일에 적용해준다
export default function Title({title,textColor}){ //h1태그 컴포넌트 제작 
    return (
        <h1 style={{color:textColor}}>{title}</h1>
    )
}