import { useState } from "react";
// import { Button } from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import "./Searcher.css"

const Searcher = (props) => {
    const [texto, setTexto] = useState('');
    const onTextoChange = (evento) => {
        //console.log(evento);
            setTexto(evento.target.value)
    }

    const onButtonSearchClick = () =>{
            //if(texto.length>2){ props.onSearch(texto);} 
            props.onSearch(texto);
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            onButtonSearchClick();
        }
      }


    return (
        <section className="searcher" role='search'>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Buscar Noticias" 
                onChange={onTextoChange}
                onKeyDown={onKeyDown}
                role="textbox"
            />
            <button 
                type="button" 
                className="btn btn-outline-primary" 
                disabled={ texto.length< 3 } // el boton esta activo o no segun la condicion
                onClick={onButtonSearchClick}
                role="button"
            >
                Buscar
            </button>
        </section>
    )
}

export default Searcher