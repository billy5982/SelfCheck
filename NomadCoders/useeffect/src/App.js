import { useState,useEffect } from "react";

// function App() {
//   //useState의 경우엔 실행될때마다 페이지가 재렌더링됨.
//   const [counter,setCounter] = useState(0);
//   const [keyword,setKeyword] = useState('')
//   const onClick = ()=>{
//     setCounter(counter+1);
//   }
//   const onChange = (e)=>setKeyword(e.target.value);
//   console.log("i'm running")
//   //useEffect도 두가지의 값을 배열로 반환, 원하는 시점에만 실행될 함수, useState로 인해 화면이 계속 렌더되는데 
//   //API를 불러오는 상황이라면 계속 API를 호출하게 될것,
//   //화면이 재렌더링(useState로 인해) 되더라도 useEffect은 실행되지 않음. 처음 화면이 켜졌을때, 새로고침됐을때는 한번 실행이 됨.if문으로 실행내용 제어
//   useEffect( ()=>{
//     if(keyword!==''&&keyword.length>4){
//     console.log("i'm only one")}
//   },[keyword]); // keyword 값이 변경될때만 첫번째 인자 함수가 실행됨., SeachAPI 사용하면 (2개 이상의 변수를 적어줄수 있음.)

//   return (
//     <div>
//       <input onChange={onChange} value = {keyword} type="text" placeholder="Search"/>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// h1 hello를 리턴하는 컴포넌트
const Hello = () => {
	useEffect(()=>{
		console.log('hello');
	return ()=>{
		console.log('bye'); //해당 컴포넌트가 지워질 때 리턴함수가 실행된다. 이를 cleanup function	
	}
},
[])//두번째 인자에 아무 변수도 넣어주지 않았기 때문에 생성되는 시점에서 useEffect 함수가 실행된다.
	return (<h1>hello</h1>)
} 
 
function App() {
  //useState의 경우엔 실행될때마다 페이지가 재렌더링됨
	const [isShow,setIsShow] = useState(false);
	
	const onClick = () =>{
	setIsShow(!isShow); // 버튼 이벤트가 발생되면 isShow가 반대로 바뀜.
	}
  return (
    <div>
{/*해당 구문은 isShow 상태를 통해 Hello의 노출을 결정한다. 이 과정에서 Hello는 숨겨짐에
개념이 아닌 지워졌다, 생성되었다 라는 개념이 된다.useState 함수로 인해 Hello 컴포넌트가 생성되고,
해당 함수로 인해 Hello 컴포넌트가 지워진다.*/}
      {isShow ? <Hello/> : null} 
      <button onClick={onClick}>{isShow ? 'hide' : 'show'}</button>
    </div>
  );
}


export default App;
