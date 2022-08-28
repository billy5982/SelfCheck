// 스토리북에 Title 컴포넌트를 추가할 것이다. (스토리북 스토리 => (디자인 컴포넌트?))
// 스토리북에 추가할 컴포넌트에 대한 세팅을 해야한다.
import Title from './Title'

// 스토리북에 추가할 스토리에 대한 세팅 => 
export default {
    title : 'Practice/Title', //스토리에 위치를 나타냄. Practice폴더가 없으면 제작하고, Title이란 카테고리를 만들
    component : Title, //어떤 컴포넌트를 스토리로 만들어줄 것인지 명시
    //스토리북에서 컴포넌트에게 전달해줄 props
    argTypes : {
        //props를 내려줄 때 텍스트를 칠것인지 color를 선택할 것인지
        title : {control : 'text'}, 
        textColor : {control : "color"},  
    }
}
// 스토리북에서 argTypes로 정한 props를 타이틀에 전달해준다. 이를 Title 에게 내려준다
// 템플릿을 만들어준것
const Template = (args) => {return <h1 {...args}></h1>}

//위에 템플릿을 통해 RedTitle을 만든것 export const를 이용해서 스토리를 스토리북에 추가
export const RedTitle = Template.bind({});
RedTitle.args = {
    title : "hell"
}

//템플릿을 통하지 않고 바로 스토리를 만들어 줄 수 있음
export const anyTitle = (args) => <Title {...args}></Title>



// import Title from './Title' //Title 컴포넌트를 가져와서 스토리에 적용할 예정

// //여기는 스토리북에 추가될 스토리를 설정하는 과정
// //Title 컴포넌트를 스토리북에 추가할 것이며, 어디에 둘것이며, 인자는 어떤 것을 받아서 title에 전달해줄 것인지
// export default {
//     title : 'Practice/Title',// 스토리에 카테고리를 추가 Practice 폴더에 title컴포넌트
//     component : Title, // 어떤 컴포넌트를 스토리로 만들어줄 것인지 명시
//     argTypes : { //스토리북에서 해당 Title에 props로 어떤걸 전달해줄 것인지 작성
//         title : {control : "text"}, //스토리북에서 전달되는 props 값의 타입(입력을 칠것인지 radio 선택할 것인지)
//         textColor : {control : "text"}
//     }
// }
// // 템플릿을 만들어준 것. 해당 템플릿을 이용해서 Title 기반에 새로운 스타일을 넣은 스토리를 추가할 수 있음
// // args를 전달받아 Title 컴포넌트로 내려준다
// const Template = (args) => {
//     return <Title {...args}/>
// }
// //RedTitle이라는 것은 Title을 복사 한것 스토리북에 RedTitle이라는 스토리가 추가됨
// //스토리로 추가하는 것은 export const를 이용
// export const RedTitle = Template.bind({})

// RedTitle.args = {
//     title : "너무어려워",
//     textColor : "red",
// }

// //이제 스토리북에서 받은 값으로 변경될 수 있는 새로운 스토리를 제작
// //args를 전달받아 Title로 내려준다. args는 default에서 설정한 a
// export const userStory = (args) => {
//     return <Title {...args}/>
// }