import {useState} from 'react'
import Button from './Button'
function App() {
  const [counter,setCounter] = useState(0);
  const plus = ()=>{
    setCounter(counter+1);
  }
  const minus  = () =>{
    setCounter(counter-1);
  }
  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick ={plus} text ={'+'} />
      <Button onClick ={minus} text = {'-'}/>
    </div>
  );
}

export default App;
