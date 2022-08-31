import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// 로컬 스토리지 구현 완료
let data = localStorage.getItem('Todo')
if(data){
  data = JSON.parse(data);
}else{
  data = []
}

export const addAction = (array) =>{
  return {type : "ADDTODO" , payload : array}
}

const listStorage = (state=data, action) =>{
  switch(action.type){

    case "ADDTODO" :
      localStorage.setItem('Todo',JSON.stringify(action.payload));
      return action.payload;

    default :
      return state
  }
}

const store =  createStore(listStorage); // 전역상태 보관소로 제작

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Provider로 감싸줘야 컴포넌트들이 전역 상태를 참조할 수 있음. */}
    <Provider store = {store}> 
      <App />
    </Provider>
  </React.StrictMode>
);
