import notfound404 from '../ups-error-404.png';
import { Link } from 'react-router-dom';

const Error404 = ()=> {
    return(
        <BrowserRouter basename='/NewsSearchEngine'>
        <div role="error-404">
            <center>
                <div className="card mb-1 box-error" >
                    <div class="card-body">
                    <img src={notfound404} alt="" className="img-fluid" />
                    <hr />
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                            La Página que busca no existe o ha sido borrada.
                             Ir al <Link to="/home" ><b>Inicio</b></Link>.</p>
                             
                    </div>
                </div>
            </center>
        </div>
        </BrowserRouter>


    )




}

export default Error404;