import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../store";
const Home = () =>{
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    
    const [text,setText] = useState('');
    const onChange = (e) =>{
        setText(e.target.value)
    }

    const removeEvent = (item) =>{
        console.log(item)
        console.log(remove(item.id))
        dispatch(remove(item.id));
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        dispatch(add(text))
        setText("")
    }
    return (
        <>
            <h1>To DO</h1>
            <form onSubmit={onSubmit}>
                <input type = 'text' value ={text} onChange={onChange}/>
                <button>update</button>
                
            </form>
            <ul>
                {state.length!==0 ? state.map((item)=>{
                    return <li key = {item.id}>{item.text}<button onClick={()=>removeEvent(item)}>remove</button></li>
                }):null}
            </ul>
        </>
    )
}

export default Home