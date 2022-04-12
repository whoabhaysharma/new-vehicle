import React from "react";
import "./style.css";
import { useState } from "react";
import config from "../../../Config/config.json";
import Input from "./Input";
import { Button } from "react-bootstrap";
import AddButton from "./AddButton";
import Search from "./Search";
import VehicleList from "./VehicleList";
function Vehicles() {
  const [formVisibility, setFormVisibility] = useState(false);
  const [vehicleData, setVehicleData] = useState([]);
  console.log(vehicleData)
  return (
    <div className="main">
      <div className="form">
        <Input 
          formVisibility={formVisibility} 
          setFormVisibility={setFormVisibility}
          vehicleData={vehicleData} 
          setVehicleData={setVehicleData} 
        />
      </div>
      <div className="top">
        <AddButton 
          setFormVisibility={setFormVisibility} 
        />
        <Search />
      </div>
      <div className="list">
        <VehicleList vehicleData={vehicleData} />
      </div>
    </div>
  );
}

export default Vehicles;
