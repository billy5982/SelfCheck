import { Link } from "react-router-dom"

export default function Movie({id,title,img,genres,summary}){
    return (
        <li>
          <h2>
            <Link to = {`/movie/${id}`}>{title}</Link>
          </h2>
          <img src = {img}></img>
          <p> {summary}</p>  
          <ul>
            {genres.map((g)=>{
              return (<li key = {g}>{g}</li>)
            })}
          </ul>
        </li>)
}