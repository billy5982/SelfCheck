// useparams를 사용해서 동적 주소의 값을 확인할 수 있다?
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router'
import {Link} from 'react-router-dom'
function Detail(){
    // path에서 :id라고 등록했기 떄문에 x = { id : url에 id} 표시됨.
    // 구조분해할당 사용가능
    const {id} = useParams();
    const [movie,setMovie] = useState({});
    // Datail 로딩 추가, state 추가
    const [loading,setLoading] = useState(true);
    const getMovie = async() => {
        let json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        setLoading(!loading);
    }

    useEffect(()=>{
       getMovie(); 
    },[])

    return (
            <div>
                { loading ? 
                "Loading" :
                (
                <>
                <div><Link to = {'/'}>홈으로 이동하기</Link></div>
                <h3>{movie.title}</h3>
                <img src= {movie.medium_cover_image} alt="" />
                <ul>
                    {movie.genres.map((g)=>{
                        return (<li key = {g}>{g}</li>)
                    })}
                </ul>
                </>
                )}
            </div>
        )
}
export default Detail