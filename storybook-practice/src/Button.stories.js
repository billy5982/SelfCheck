import { UserBtn, Btn} from "./Button";

//1. 스토리북에 추가할 설정
export default {
    title : "Practice/Button", // 해당 위치에 추가되는 스토리를 보낼 것임
    component : Btn,  //어떤 컴포넌트를 스토리로 만들 것인지 명시(나중에 스타일 컴포넌트가 많아지고 해당 내용을 조금 수정하려면 해당 컴포넌트가 뭔지 알아야되기 떄문일까?)
    argTypes : { //스토리북에서 컴포넌트로 전달할 props 종류
        title : {control : "text"}, //스토리북에서 전달 값을 정하는 타입
        color : {control : "color"},
    }
}

//스타일 컴포넌트를 가지고 있는 곳에다 props를 전달해줌
export const BBtn = (args) =>{ // args는 스토리북에서 설정할 props 값
    return (<Btn {...args}/>)
}

//템플릿 제작 방법
// 똑같이 템플릿도 하나의 컴포넌트라고 생각하고 컴포넌트의 props를 내려주면 됨
const Template = (args) => <Btn {...args}/>

// 템플릿을 이용하여 새로운 스토리 만들기
export const BBtn2 = Template.bind({})
BBtn2.args = {
    title : "어렵구먼",
    textColor : "red",
}


//스타일 컴포넌트에 직접적으로 전달해주는 경우(개인적인 생각으로는 css설정이 많을 떄는 위에가 좀더 편할 수 있을듯)
export const BBtn3 = (args) =>{
    return (<UserBtn {...args}>{args.title}</UserBtn>)
}
