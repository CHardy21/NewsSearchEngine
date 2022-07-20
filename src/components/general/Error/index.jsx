import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import "./Error.css"
//import Button from 'react-bootstrap/Button';

//function AlertDismissibleExample({data}) {

const Error = ({data}) => {    
    const [show, setShow] = useState(true);

  if (show) {
    return (
      <div className='box-error'>
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Ooopsss... Algo ha salido mal!!!</Alert.Heading>
            <p>Error: {data.code}</p>
            <p>{data.message}</p>
        </Alert>
      </div>
    );
  }

  window.location.reload(true);
  //return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

//return(<AlertDismissibleExample />);

// const Error = ({data}) => {
//     return (
//         <>
//         <h2>Ooopsss!!! Algo ha salido mal.</h2>
//         <p>Error: {data.code}</p>
//         <p>{data.message}</p>
//         </>
//     )
// }

export default Error;