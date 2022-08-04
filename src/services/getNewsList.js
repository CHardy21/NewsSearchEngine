import { API_KEY, NEWS_API_HOST } from "./constant";

export const getNewsList = async (criterioBusqueda='', pagina = 1 ) => {
    try {
        // https://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY&page=1&pageSize=10
        const respuesta = await fetch (
            `${NEWS_API_HOST}?q=${criterioBusqueda}&apikey=${API_KEY}&page=${pagina}&pageSize=10&language=es`
        );

        if(respuesta.status==="error"){
            console.log("ERROR: ",respuesta.message)
        }

        return respuesta.json();

    } catch (error) {
        console.log("ERR: ",error);
        return (<p>error</p>);

    }



}