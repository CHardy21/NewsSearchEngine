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
            props.onSearch(texto);
    }

    const onKeyDown = (e) => {
        // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
        if (e.key === 'Enter') {
        //    e.preventDefault();
        //    e.stopPropagation();
        //   this.onSubmit();
        //    console.log("Presiono Enter");
            onButtonSearchClick();
        }
      }


    return (
        <section className="searcher">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Buscar Noticias" 
                aria-label="Username" 
                aria-describedby="basic-addon1" 
                onChange={onTextoChange}
                onKeyDown={onKeyDown}
            />
            <button 
                type="button" 
                className="btn btn-outline-primary" 
                disabled={ texto.length<3 } // el boton esta activo o no segun la condicion
                onClick={onButtonSearchClick}
            >
                Buscar
            </button>
        </section>
    )
}

export default Searcher