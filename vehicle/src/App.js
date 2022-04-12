import { useState } from "react";
import Main from "./Components/MainContent";
import SideBar from "./Components/Sidebar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Vehicles from "./Components/MainContent/Vehicles";
import Dashboard from "./Components/MainContent/Dashboard";
import Services from "./Components/MainContent/Services/Services";
import Drivers from "./Components/MainContent/Drivers/Drivers";

function App() {
  return (
    <div className="app">
    <Router>
    <SideBar />
<Routes>
<Route path="/" element={<Dashboard/>} />
    <Route path="/Dashboard" element={<Dashboard/>} />
    <Route path="/Vehicles" element={<Vehicles/>} />
    <Route path="/Services" element={<Services/>} />
    <Route path="/Drivers" element={<Drivers/>} />
    </Routes>
    
      
</Router>
    </div>
  );
}

export default App;
