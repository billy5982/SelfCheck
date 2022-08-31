import { useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { addAction } from "../index";


export default function List({value,idx}){
    const state = useSelector((state)=>state)
    const dispatch = useDispatch();
    // 전달된 item 즉 작성된 것을 기준으로 함 
    // 대신 수정이 필요하니깐 새로운 상태를 만들어야 함
    
    const [newData, setNewData] = useState('');
    //수정 버튼을 클릭했을 때 input과 li의 상태를 바꿔줘야 함
    const [editMode,setEditMode] = useState(true);
    const inputEl = useRef(null);
  
    const inputNewData  = (e) =>{
      setNewData(e.target.value);
    }
    // onRepair에 함수가 실행되면 focus가 동작되게 해봤지만 동작을 안한다
    // useEffect으로 이용해서 editMode 변경에 대해 설정해주니깐 동작이 되는데 흠,,,
    useEffect(()=>{
      if(!editMode){
        inputEl.current.focus()
      };
    },[editMode])
    
    const onRepair = (value)=>{
      setNewData(value);
      setEditMode(!editMode)
    }
  
    const cancel = () =>{
      setEditMode(!editMode);
    }
    const saveNewdata = (idx) =>{
       const copyData = [...state]; // 원본데이터를 직접 수정할 수 없어서 데이터를 복사해야함
       copyData[idx] = newData;  // 현재 입력된 데이터를 원본 데이터 index에 저장
      
       dispatch(addAction([...copyData]))
       //  setInputData(copyData); // 원본데이터를 수정
       setEditMode(!editMode); // 다시 원본 li태그를 돌리기 위해 해당 태그의 editmode를 원래대로 돌림
    }
    return (
      <li>
      {/* 처음엔 div에 value 대신 setNewData를 이용해서 전달받은 value를 newData로 전환하고 배포하였는데 왜 인지 모르게 배열의 첫번째 값만 갱신되는 걸 확인할수 있다
          이건 추후에 좀 더 학습을 하면서 한번 알아봐야겠다(왜 관리해주려 했냐면 List가 For로 여러개 생성됐기 때문에 상태관리도 같은 함수지만 여러개로 관리할 수 있다고 생각했다)
          각각 다른 id값을 가지고 있을거라 생각했는 데 그게 생각처럼 되지 않았다 그래서 value로 초기 세팅을 잡아준 후 수정 버튼을 눌렀을 때 해당 div에 있는 value를 전달했고
          해당 데이터를 상태 관리해줄 수 있게 해주었다. onRepair함수를 확인해보자 */}
      {editMode ? (<div>  
        {value} 
        <button onClick={()=>{onRepair(value)}}>수정</button> 
        <button>완료</button>
        </div>) 
      : 
      (
      <>
      {/* 수정 중 엔터를 누르면 해당 수정 데이터 저장 ESC버튼 누르면 수정 취소 */}
      <input value = {newData} 
      type = "text" onChange={inputNewData} 
      onKeyUp ={(e)=>{
        if(e.key==="Enter")saveNewdata(idx)
        if(e.key==="Escape")cancel();
      }
      }
      ref = {inputEl}
      /> 
  
      {/* 취소를 하게 되면 데이터는 상태변경된 데이터는 변하면 안되기 때문에 그냥 editMode만 false로 변경해줘도 됐다. */}
      <button onClick={cancel}>취소</button>
      {/* map으로 컴포넌트를 배포할 때 인덱스 값을 같이 전달되게 했다. onClick함수에는 클릭되면 saveNewData에 map에서 전달받은 인덱스를 이용하여
          원본배열에 데이터를 수정해줄 예정이다. */}
      <button onClick={()=>{saveNewdata(idx)}}>저장</button>
      </>
      )
      }
      </li>
    )
  }