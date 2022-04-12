import React from "react";
import Form from "react-bootstrap/Form";
function Search() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Search" />
      </Form.Group>
    </Form>
  );
}

export default Search;
