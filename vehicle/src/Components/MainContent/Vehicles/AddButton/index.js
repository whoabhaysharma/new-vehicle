import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
function AddButton({setFormVisibility}) {
    return (
        <Button onClick={()=>setFormVisibility(true)} className="btn" variant="primary" >Add Vehicle</Button>
      );
}

export default AddButton;