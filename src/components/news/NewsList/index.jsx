import { useEffect, useState } from "react"
//import { Link } from "react-router-dom"
import { getNewsList } from "../../../services/getNewsList"
import Error from "../../general/Error"
import Loading from "../../general/Loading/Loading"
import MyPagination from "../../general/MyPagination"
import NewsItem from "../NewsItem"
import "./NewsList.css"

const News = ({data}) => {
    const news = data.articles;
    return(
        <div className="news-list">
            <p >Estas viendo <b>{news.length}</b> noticias de <b>{data.totalResults}</b> resultados. </p>
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

    const getNewsFromService = async (busqueda,pagina) => {
        setLoading(true); // usado para mostrar el loading mientras espero al servicio
        const respuesta = await getNewsList(busqueda,pagina)
        
        console.log(respuesta)
        setData(respuesta);    

        // ver si incluyo estas lineas
        if( respuesta.status === "error") {
            console.log("ERROR: ",respuesta.message);
            setLoading(false);
            setErr(respuesta);
            // return (
            //     <>
            //     <p>Ooopsss!!! Algo ha salido mal.</p>
            //     <p>Error: {respuesta.message}</p>
            //     </>
            //)
        }
        // ----------------------------

        
        const totalPaginas = Math.ceil(parseInt(respuesta.totalResults)/10);
        setCantidadPaginas(totalPaginas);
     
        setLoading(false);
    }

    // llamada al servicio
    useEffect(()=> {
        // Verifica que haya alguna busqueda y que tenga al menos 3 caracteres
        if(busqueda && busqueda.length>2){
            console.log("Se llamo al servicio")
            getNewsFromService(busqueda,pagina);
        }
    },[busqueda,pagina])

    const onChangePaginacion = (_evento,pag) => {
        console.log(pag);
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
        //console.log("estoy aca")
        return null;
    }

    if(!data.totalResults){
        return(
            <center><h2>No existen resultados para la busqueda</h2></center>
        )
    }

    return (
        <section className="news-list-content" role="newslist">
            < News  data={data}/>
            < MyPagination page={pagina} count={cantidadPaginas} onChange={onChangePaginacion} />
        </section>
    )
}

export default NewsList