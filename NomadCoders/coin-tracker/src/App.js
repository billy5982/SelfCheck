import { useEffect,useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coinSetting,setConinSetting] = useState([]);
  const [usedata,setUsedata] = useState([]);
  const [selectItem, setSelectItem] = useState({});

  useEffect(()=>{
    (async function coinApi(){
      let api = await fetch("https://api.coinpaprika.com/v1/tickers?limit=30")
      let data = await api.json(); // await가 안써지면 pending을 배출 
      await setConinSetting(data);
      await setUsedata(data)
      await setLoading(!loading)
      await setSelectItem([data[0]])
    })();
  },[])

  const optionCheck = (e) =>{
    
    let filter = usedata.filter((item)=>item.name===e.target.value)
    console.log(filter)
    setSelectItem(filter)
  }

  return (
    <div>
      <h1>Coin Tracker</h1>
      {loading ? <strong>로딩중이니 기다려라 이말이야</strong> : 
        <div>
          <input type= "text" />
          <select onChange={optionCheck}>
            {usedata.map((item)=>
              <option key = {item.id} value = {item.name} prop = {item}>{item.name}</option>
          )}
          </select>
          <br/>
          <h3>선택한 코인</h3>
             <div>{`선택한 비트 코인 명 : ${selectItem[0]['name']} 가격 : ${selectItem[0].quotes.USD.price.toFixed(3)}`}</div> 
        </div>
        }
    </div>
  );
}

export default App;
