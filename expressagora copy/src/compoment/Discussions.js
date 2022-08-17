import DicussionCsss from './DicussionCsss.css'
import Discussion from './Discussion'
const Discussions = ({data}) =>{
    
    return (
        <ul className ='discussions__container'>
            {data.map((item)=>{return <Discussion key = {item.id} data = {item}/>})}
        </ul>
    )
}//

export default Discussions