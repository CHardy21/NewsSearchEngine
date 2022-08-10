
import { API_KEY_NewsApi, NEWS_API_HOST } from "./constant-NewsApi";
//import {API_KEY_GNews, GNEWS_API_HOST } from "./constant-GNews";

// Servicios NewsApi.org
export const getNewsList = async (criterioBusqueda='', pagina = 1 ) => {
    try {
        // https://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY&page=1&pageSize=10
        const respuesta = await fetch (
            `${NEWS_API_HOST}?q=${criterioBusqueda}&apikey=${API_KEY_NewsApi}&page=${pagina}&pageSize=10&language=es`
        );

        if(respuesta.status==="error"){
            console.log("ERROR: ",respuesta.message)
        }

        return respuesta.json();

    } catch (error) {
        console.log("ERR: ",error);
        return (<p>error</p>);

    }

// servicios GNews.io
// export const getNewsList = async (criterioBusqueda='', pagina = 1 ) => {
//     try {
//         // https://gnews.io/api/v4/search?q=bitcoin&token=2e83c5fd2c17ce3cd10b2b1f633d65a1&lang=es&page=2
//         const respuesta = await fetch (
//             `${GNEWS_API_HOST}?q=${criterioBusqueda}&token=${API_KEY_GNews}&page=${pagina}&lang=es`
//         );
    
//         return respuesta.json();
    
//         } catch (error) {
//             console.log("ERR: ",error);
//             return (<p>error</p>);
//          }

}