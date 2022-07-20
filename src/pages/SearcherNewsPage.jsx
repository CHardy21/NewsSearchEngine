import Searcher from "../components/general/Searcher";
import NewsList from "../components/news/NewsList";
import { useState } from "react";

const SearcherNewsPage = () => {
    const [busqueda, setBusqueda] = useState('');
    const onSearch = (criterio) =>{
        setBusqueda(criterio);
        console.log("buscando -> "+criterio)
    }

    return (
        <>
            <Searcher onSearch={onSearch}/>
            <NewsList busqueda={busqueda}/>
        </>
    )
}

export default SearcherNewsPage;