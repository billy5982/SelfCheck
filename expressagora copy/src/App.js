import Maincss from './Maincss.css'
import Form from './compoment/Form'
import Button from './compoment/Button'
import Discussions from './compoment/Discussions'
import { useEffect, useState } from 'react';
function App() {
  // 같은 데이터를 사용하는 경우 부모에서 데이터 관리
  const [data,setData] = useState([]);//fetch 요청데이터를 여기에 관리할 것
  const [loading,setLoading] = useState(true);
  //페이지네이션 기준을 위한 숫자
  const [offset,setOffset] = useState(10);

  const requestData = async ()=>{
    let res = await fetch('http://localhost:4000/discussions')
    let result = await res.json();
    await setData(result); //데이터를 받아온 시점에서 데이터 랜더링이 다시 시작될 것이다
    await setLoading(false);
    // 초기 데이터가 불러와지면 0~10까지의 항목을 보여주기위해 setOffset을 기준으로 해준다.
    setOffset(10);
  }

  let pages = [];
  if(data.length!==0){
    for(let i =1; i<=Math.ceil(data.length/10);i++){
      pages.push(i);
    }
  }

  const pageNation = (event) =>{
    setOffset(event.target.value*10)
  }

  useEffect(()=>{
    requestData(); // 서버 정보가 받아와지면 내부 setData로 인해 다시 시작됨
  },[])
  return (
    <main className="container">
      <h3>나만의 아고라 스테이츠다</h3>
      <Form />
      {/* 페이지네이션 구축을 위한 버튼 나열해야됨. 해당 버튼에선 버튼을 클릭하면 offset을 바꿔주는 이벤트를 넘겨준다.*/}
      {loading ? <div>Loading...</div> : <Button pgnumber={pages} onClick = {pageNation}/>}
      {/* 페이지 네이션 구현할때 원본배열을 offset을 기준으로 slice해주어 넣어준다 */}
      {loading ? <div>Loading...</div> :  <Discussions data = {data.slice(offset-10,offset)}/>}
    </main>
  );
}

export default App;
