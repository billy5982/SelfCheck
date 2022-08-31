import { useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { addAction } from "../index";
export default function Input(){
  
    const state = useSelector((state)=>state); // 인풋값이 여기에 저장되어야 함
    const dispatch = useDispatch();
    console.log(state)
    const [inputValue,setInputValue] = useState('')
    const ref = useRef(null)
    useEffect(()=>{ //처음 화면이 랜더되었을 때 인풋창에 focus
      ref.current.focus()
    },[]); 
  
    const saveData = () =>{
      if(inputValue.length===0)return
      if(!state.includes(inputValue)){ //중복되는 것은 추가되지 않음
        dispatch(addAction([inputValue,...state]))
        setInputValue('');
        ref.current.focus()
      }else{ //중복이 발생되었을 때 인풋창을 비워줄거임
        setInputValue('');
        ref.current.focus()
      }
    }
  
    const changeInput = (e) => {
      setInputValue(e.target.value)
    }
  
    const onEnter = (e)=>{
      if(e.key ==='Enter'){
          saveData()
        }
    }
    
   
  
    return(
      <div>
        <input value = {inputValue} onChange = {changeInput} ref = {ref} onKeyUp={onEnter}/> {/* ref로 주소값 연결*/}
        <button onClick={()=>saveData()}>저장 </button>
      </div>
    )
  }

 