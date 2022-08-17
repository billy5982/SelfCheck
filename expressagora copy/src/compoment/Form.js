import Formstyle from './Formstyle.css'
const Form = ()=>{
    return (
        <form className="form">
            <div>
                <label htmlFor="id">id</label>
                <input type= 'text'  id='id'></input>
            </div>
            <div>
                <label htmlFor="password">pw</label>
                <input type= 'text' id='password'></input>
            </div>
            <div className='buttonForm'>
                <label htmlFor="content">내용</label>
                <textarea type='textArea' id = 'content'/>
                <button>제출</button>
            </div>
        
        </form>
    )
}
export default Form