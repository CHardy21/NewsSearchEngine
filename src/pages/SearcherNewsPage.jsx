import Searcher from "../components/general/Searcher";
import NewsList from "../components/news/NewsList";
import { useState } from "react";

const SearcherNewsPage = () => {
    const [busqueda, setBusqueda] = useState('');
    const onSearch = (criterio) =>{
        setBusqueda(criterio);
        //console.log("buscando -> "+criterio)
    }

    return (
        <div role="searcher-news-page">
            <Searcher onSearch={onSearch}/>
            <NewsList busqueda={busqueda}/>
        </div>
    )
}

export default SearcherNewsPage;