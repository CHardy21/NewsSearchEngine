import { DateTime } from "luxon";

const NewsItem = ({ title, description, publishedAt, urlToImage,source,url,image }) => {
    
    const myDateTime = DateTime.fromISO(publishedAt)
    const fechaPublicacion = myDateTime.toFormat("dd-MM-yyyy")
    const horaPublicacion = myDateTime.toFormat("HH:mm")
    //console.log("ok? ",myDateTime.toFormat("dd-MM-yyyy HH:mm"))
    
    const handleClickOpenSource = () => {
        window.open(url, '_blank')
    }

    return (
        <article className="nl-box" onClick={handleClickOpenSource} role="article"> 
            <div className="nl-box-image">
                <img src={urlToImage || image} alt="" className="img-fluid"/>
            </div>
            <div className="nl-box-content">
                <h1>{title}</h1>
                <p>{description}</p>
                <span>Publicado el: {fechaPublicacion} a las {horaPublicacion} hs.</span>
                <span>Fuente: <button className="source">{source.name}</button></span>
            </div>
        </article>
    )
}

export default NewsItem;
