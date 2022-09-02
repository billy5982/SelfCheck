import { useEffect,useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coinSetting,setConinSetting] = useState([]);
  const [usedata,setUsedata] = useState([]);
  const [selectItem, setSelectItem] = useState({});
  const [moneyCheck, setMoneyCheck] = useState('')

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
  const calculateMoney = (e) =>{
    setMoneyCheck(e.target.value);
  }

  const checkEvent = (e) =>{
    if(e.target.checked){
      let seleteCoinMoney = [...selectItem]
      let krw = (selectItem[0].quotes.USD.price).toFixed(3)*1300
      seleteCoinMoney[0].quotes.USD.price = krw;
      setSelectItem(seleteCoinMoney);
    }else{
      let seleteCoinMoney = [...selectItem]
      let USD = (selectItem[0].quotes.USD.price).toFixed(3)/1300
      seleteCoinMoney[0].quotes.USD.price = USD;
      setSelectItem(seleteCoinMoney);
    }
  }
  return (
    <div>
      <h1>Coin Tracker</h1>
      {loading ? <strong>로딩중이니 기다려라 이말이야</strong> : 
        <div>
          <input type= "number" onChange={calculateMoney} value = {moneyCheck}/>
          <select onChange={optionCheck}>
            {usedata.map((item)=>
              <option key = {item.id} value = {item.name} prop = {item}>{item.name}</option>
          )}
          </select>
          <input type="checkbox" id = "Won" onClick ={checkEvent}/>
          <label htmlFor = 'Won'>한화 변환</label>
          <br/>
          <h3>선택한 코인</h3>
             <div>{`선택한 비트 코인 명 : ${selectItem[0]['name']} 가격 : ${selectItem[0].quotes.USD.price.toFixed(3)}`}</div>
             <div>{`구매 가능 코인 : ${(Number(moneyCheck)/selectItem[0].quotes.USD.price.toFixed(3)).toFixed(3)}`}</div> 
        </div>
        }
    </div>
  );
}

export default App;
