import DicussionCss from "./DicussionCss.css"
const Discussion = ({data})=>{
    console.log(data);
    return(
        <li className="discussion__container" id="id0">
            <div className="discussion__avatar--wrapper">
                <img className="discussion__avatar--image" src={data.avatarUrl} alt={data.author}/>
            </div>
            <div className="discussion__content">
                <div className="discussion__information">dubipy</div>
                    <h2 className="discussion__title">
                        <a href={data.url}>{data.title}</a>
                    </h2>
                </div>
            <div className="Date">
                    <div>{data.createdAt}</div>
            </div>
            <div className="discussion__answered">
                    {data.answer===null?<input type="button" id="btnid0" className="previewNotComplate"/>:<input type="button" id="btnid0" className="previewComplate"/>}
            </div>
        </li>
    )

}
export default Discussion