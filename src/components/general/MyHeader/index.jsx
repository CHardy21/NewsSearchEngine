import logo from '../../../logo.svg';
import "./MyHeader.css"

const MyHeader = () => {
    return (
        <header role="MyHeader">
            <a href="/">
            <img src={logo} className="App-logo" alt="logo" /></a>
            <p> Buscador de Noticias</p>
            
        </header>
    )
}

export default MyHeader;