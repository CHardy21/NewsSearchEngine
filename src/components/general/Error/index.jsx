import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import "./Error.css"

const Error = ({data}) => {    
    const [show, setShow] = useState(true);

  if (show) {
    return (
      <div className='box-error' role="error">
        <Alert variant="danger" onClose={() => setShow(false)} dismissible role="error-alert">
            <Alert.Heading>Ooopsss... Algo ha salido mal!!!</Alert.Heading>
            <p>Error: {data.code}</p>
            <p>{data.message}</p>
        </Alert>
      </div>
    );
  }

window.location.reload(true);
}

export default Error;