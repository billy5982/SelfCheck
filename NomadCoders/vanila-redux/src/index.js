import {createStore} from "redux";
//reducer은 함수, 상태를 수정, 저장하는 함수
//reducer가 리턴하는 값이 저장소의 저장하는 상태가 된다. 
//reducer는 action을 통해 상태를 수정할 수 있다
//어떻게 액션을 전달하냐? dispatch함수의 인자로 action을 적어서 실행시키면
//dispatch가 countModifier의 두번째 인자 action에 dispatch 실행시킨 인자를 전달하여
//countModifier를 실행 -> countModifier는 들어온 액션을 확인하여 해당 액션의 맞는 값을 리턴
//리턴되는 값은 상태가 됨.
const countModifier = (state = 0, action) => { 
  // action은 dispatch를 통해 전달된 객체가 들어온다. dispatch는 이벤트와 countmodifer가 소통하는 방법
  //처음 저장소와 연결시킬 때 action 타입이 없기때문에 defalut를 써주지 않으면
  //undefined가 저장소에 저장된다.
  //if 혹은 switch를 통해서 상태를 수정하는 방법을 적어두고
  //상태를 수정하고 싶은 이벤트서 dispatch를 통해 수정하는 액션을 modifier로 전달한다
  //dispatch를 통해 들어온 action에 들어온 객체를 확인하여 switch를 
  switch(action.type){
      case "PLUS":
        return state+1;
      case "MINUS":
        return state-1
      default :
        return state
      }
      
}

const countStore = createStore(countModifier)

const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const $count = document.querySelector('#count')

const handleminus = () =>{
  countStore.dispatch({type : "MINUS"}) //dispatch에 액션을 적어서 전달하면 reducer action에 액션
}

const handleplus = () =>{
  countStore.dispatch({type : "PLUS"})
} 

//dispatch로 modifier에 접근하면 아래 subscribe가 실행된다.
const onchange = () =>{
  $count.textContent = countStore.getState()
}

countStore.subscribe(onchange)

plus.addEventListener('click',handleplus)
minus.addEventListener('click',handleminus)