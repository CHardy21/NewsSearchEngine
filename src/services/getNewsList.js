import { API_KEY, NEWS_API_HOST } from "./constant";

export const getNewsList = async (criterioBusqueda='', pagina = 1 ) => {
    try {
        // https://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY&page=1&pageSize=10
        const respuesta = await fetch (
            `${NEWS_API_HOST}?q=${criterioBusqueda}&apikey=${API_KEY}&page=${pagina}&pageSize=10&language=es`
        );
        return respuesta.json();

    } catch (error) {
        return (<p>error</p>);

    }
}

//ver esta funcion luego

// export const getNewDetail = async (idMovie=0 ) => {
//     try {
//         // https://www.omdbapi.com/?s=spiderman&apikey=f1bc660c
//         const respuesta = await fetch (
//             `${NEWS_API_HOST}?i=${idMovie}&apikey=${API_KEY}`
//         );
//         return respuesta.json();
//     } catch (error) {
//         return { isError: true};
//     }
//}