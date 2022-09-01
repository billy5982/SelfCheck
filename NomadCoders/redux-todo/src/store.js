import { createStore } from 'redux';

export const add = (text) =>{
    return {type : "ADD", text}
}
export const remove = (id) =>{
    return {type : "DELETE" ,id}
}


const todoReducer = (state= [],action) =>{
    switch(action.type){
        case "ADD":
            return [{text : action.text, id : Date.now()}, ...state]
        case "DELETE" :
            return state.filter(toDo => toDo.id !== action.id)
      default :
      return state;
    }
  }

  const store = createStore(todoReducer)
  
  export default store