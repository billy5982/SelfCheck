import Buttoncss from './Buttoncss.css'

const PageBtn = ({pgnumber,onClick}) =>{
    //pages = [] // 배열의 갯수 /10
    
    return (
        <div>
           {pgnumber.map((x)=>{
            return <button key={x} onClick = {onClick} value = {x}>{x}</button>
           })}
        </div>
    )
}
export default PageBtn