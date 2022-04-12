import { Button } from "bootstrap";
import React from "react";
import Table from 'react-bootstrap/Table'
function VehicleList(props) {
  const {vehicleData} = props;

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Vehicle Number</th>
          <th>Insurance Expiry</th>
          <th>PUC Expiry</th>
          <th>Permit</th>
          <th>Road tax</th>
        </tr>
      </thead> 
      <tbody>
       {
         vehicleData.map((data, index)=>
          <tr key={index}>
            <td>{index+1}</td>
            <td>{data.vNumber}</td>
            <td>{data.insDate}</td>
            <td>{data.pucDate}</td>
            <td>{data.permit}</td>
            <td>{data.road}</td>
          </tr>
         )
       }
      </tbody>
    </Table>
  );
}

export default VehicleList;
