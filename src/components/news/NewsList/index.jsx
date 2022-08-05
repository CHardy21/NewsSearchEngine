import { useEffect, useState } from "react"
import { getNewsList } from "../../../services/getNewsList"
import Error from "../../general/Error"
import Loading from "../../general/Loading/Loading"
import MyPagination from "../../general/MyPagination"
import NewsItem from "../NewsItem"
import "./NewsList.css"

const News = ({data}) => {
    const news = data.articles;
    return(
        <div className="news-list" role="news-list">
            <p >Estas viendo <b>{news.length}</b> noticias de <b>{data.totalResults || data.totalArticles}</b> resultados. </p>
            { news && news.map((val,index) => 
                <NewsItem key={index} {...val}/>
            )}
        </div>
    )
}

const NewsList = ({busqueda}) => {
    const [data, setData] = useState();
    const [loading,setLoading] = useState(false);
    const [pagina,  setPagina] = useState(1);
    const [cantidadPaginas,setCantidadPaginas] = useState(0);
    const [err, setErr] = useState();
    
    // llamada al servicio
    const getNewsFromService = async (busqueda,pagina) => {
        setLoading(true); // usado para mostrar el loading mientras espero al servicio
        const respuesta = await getNewsList(busqueda,pagina)
        
        console.log(respuesta)
        setData(respuesta);    
        
        // Servicio devuelve error
        if( respuesta.status === "error" || respuesta.error ) {
            //console.log("ERROR: ",respuesta.message);
            setLoading(false);
            setErr(respuesta);
        }
        
        
        // if(respuesta.totalResult){
        //     cantResultados = respuesta.totalResults;
        // } else {
        //     cantResultados = respuesta.totalArticles;
        // }
        const totalPaginas = Math.ceil(parseInt(respuesta.totalResults || respuesta.totalArticles)/10);
        setCantidadPaginas(totalPaginas);
     
        setLoading(false);
    }

    // llamada al servicio
    useEffect(()=> {
        // Verifica que haya alguna busqueda y que tenga al menos 3 caracteres
        // para llamar al servicio
        if( busqueda && busqueda.length > 2 ){

            //let referrer = React.createRef();
            console.log("referrer url:",document.referrer);
            //console.log("Se llamo al servicio")
            getNewsFromService(busqueda, pagina);
        }
    },[busqueda,pagina])

    const onChangePaginacion = (_evento,pag) => {
        //console.log(pag);
        setPagina(pag);
    }

    if(err){
        return <Error data={data}/>
    }

    if(loading){
        return <Loading />
    }

    // Si no hay noticias ni busqueda activa no muestro nada
    // sirve para la primera ves que entro a la pagina
    if (!data || !data.articles) {
        return null;
    }
    // Se muestra cuando el servicio devuelve 0 resultados segun criterios buscados
    if(!data.totalResults && !data.totalArticles){
        return(
            <div role="0result">
                <center><h5>No existen resultados para esta la busqueda.</h5></center>
            </div>
        )
    }

    return (
        <section className="news-list-content" >
            < News  data={data}/>
            < MyPagination page={pagina} count={cantidadPaginas} onChange={onChangePaginacion} />
        </section>
    )
}

export default NewsList