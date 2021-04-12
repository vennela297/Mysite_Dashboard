import React from 'react'
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import DashboardTask2 from "./components/DashbordTask2";
import DashboardTask3 from "./components/DashboardTask3";

function App() {
  return (
    <div id="App">
    <Router>
     <Switch>
      
     <Route path="/Task2">
    <Sidebar />  
    <DashboardTask2 />
    </Route>

    <Route path="/Task3">
    <Sidebar />  
    <DashboardTask3 />
    </Route>


    <Route path="/">
    <Sidebar />  
    <Dashboard />
    </Route>

   
    </Switch>

    </Router>
     </div>
  )
}

export default App



