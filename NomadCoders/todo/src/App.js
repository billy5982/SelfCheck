import { useState } from "react";

function App() {
 const [toDo,setToDo] = useState('')
 const [toDos,setToDos] = useState([]); // 제출된 글들은 배열로 관리하고, map으로 컴포넌트를 줄력해줘야함
 const onChange = (e) =>{
  setToDo(e.target.value)
  console.log('h1')
 }
 const onSubmit = (event)=>{
  event.preventDefault();
  if(toDo ===''){
    return;
  }
  //스테이트는 직접 수정하지 않고 modifier함수를 이용
  // 새로운 toDO와 기존에 등록된 toDos를 합치는 과정
  // currentArray는 toDos가 가지고 있는 현재값
  setToDos(currentArray=>[toDo,...currentArray])
  setToDo('');
 }
  return(
    <div>
      <h1>My todos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input type = 'text' onChange={onChange} value = {toDo} placeholder="Write your to do.."/>
      {/*form 내부에 버튼과 인풋이 있으면, 버튼을 누르면 submit이 작동하여 새로고침됨 */}
      <button>Add to do</button>
      </form>
      <ul>
      {toDos.map((item,i)=>{return <li key = {i}>{item}</li>})}
      </ul>
    </div>
  );
}

export default App;
