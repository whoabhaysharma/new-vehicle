import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
function Input(props) {
  const { formVisibility, setFormVisibility, setVehicleData, vehicleData } = props;
  const [show, setShow] = useState(false);
  let vNumber, insDate, pucDate ,permit ,road;

  useEffect(() => {
    formVisibility ? setShow(true) : setShow(false);
  }, [formVisibility]);
   
  function handleClose() {
    setFormVisibility(false);
  }

  function submitHandler(){
    setVehicleData([...vehicleData,{vNumber : vNumber, insDate : insDate, pucDate : pucDate ,permit:permit, road:road}])
    setFormVisibility(false)

  }
  function inputHandler(e){
    let id = e.target.id;
    if(id==="vNumber"){
      vNumber = e.target.value;
    }else if(id==="insDate"){
      insDate = e.target.value;
    }else if(id==="pucDate"){
      pucDate = e.target.value;
    }
    else if(id==="permit"){ 
      permit = e.target.value;
    }
    else if(id==="road"){
      road = e.target.value;
    }
   
  }
 


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="vNumber">
              <Form.Label>Vehicle Number</Form.Label>
              <Form.Control onChange={inputHandler} type="text" placeholder="Vehicle Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="insDate">
              <Form.Label>Insurance Expiry Date</Form.Label>
              <Form.Control type="date" onChange={inputHandler} placeholder="Insurance Exp." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="pucDate">
              <Form.Label>PUC Expiry Date</Form.Label>
              <Form.Control type="date" onChange={inputHandler} placeholder="PUC Exp." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="permit">
              <Form.Label>Road tax</Form.Label>
              <Form.Control type="date" onChange={inputHandler} placeholder="PUC Exp." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="road">
              <Form.Label>Permit</Form.Label>
              <Form.Control type="date" onChange={inputHandler} placeholder="PUC Exp." />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={submitHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Input;
