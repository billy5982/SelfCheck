import { useState,useEffect } from "react";
import Movie from "../component/Movie";

const Home = ()=>{
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([]);
  
    const getMovies = async () =>{
      // fetch 데이터를 먼저 받고 나서 json을 아래처럼 줄여줄 수 있음
      let json = await(await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')).json();
      // let json = await res.json();
      setMovies(json.data.movies)
      setLoading(!loading)
    }

    useEffect(()=>{
      getMovies()
    },[]); // 첫 랜더링 시에만 해당 API 실행됨

    console.log(movies)
    return (
      <div>
        { loading ? 
        <div>"loading"</div>
        :
        <ul>
        {movies.map((movie)=>{
          return (
            <Movie 
              key = {movie.id} 
              id = {movie.id} 
              title = {movie.title} 
              img = {movie.medium_cover_image} 
              summary = {movie.summary} 
              genres ={movie.genres}
            />
          )
        })}
        </ul>
        }
      </div>
  );
}
export default Home