import React from 'react'

import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import "./Dashboard.css";
import Top from "./Top"
import {Link} from "react-router-dom"
import Navbar from "./Navbar";
import Sync from "./sync.png"

const svg =  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
<path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
<path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg>



const Circlesvg = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>

const Eyesvg = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>
 



function Dashboard() {
    return (

        <div className="Dashboard">

<div className="top">
<Top />
</div>

        <div className="navbar">
        <Navbar title1="Permissions" title2="Approval Matrix" />

     <div className="nav__Info">
     
{svg}
      <p>Last synced 15 mins ago</p>
     </div>
        </div>
        <div className="icons">
        <Button variant="primary"> + Add role</Button>{' '}

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>

        </div>
        <div className="table">

        <Table striped hover>
  <thead>
    <tr>
    <th></th>
      <th>Department/Role Name</th>
      <th>Acess Level</th>
      <th>No of members</th>
      <th>Last Updated</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>{Circlesvg}</td>
      <td>   Management Team</td>
      <td><Button  variant="outline-success"> All Access</Button>{' '}</td>
      <td>4</td>
      <td>1 min ago</td>
      <td>{Eyesvg}</td>
    </tr>
    <tr>
    <td>{Circlesvg}</td>
      <td>  Procurement Team</td>
      <td><Button  variant="outline-danger">Restricted Access</Button>{' '}</td>
      <td>8</td>
      <td>1 min ago</td>
      <td>{Eyesvg}</td>
    </tr>
    <tr>
    <td>{Circlesvg}</td>
      <td>  Project Team</td>
      <td><Button  variant="outline-danger">Restricted Access</Button>{' '}</td>
      <td>16</td>
      <td>1 min ago</td>
      <td>{Eyesvg}</td>
    </tr>
    <tr>
    <td>{Circlesvg}</td>
      <td>  IT Team</td>
      <td><Button  variant="outline-danger">Restricted Access</Button>{' '}</td>
      <td>4</td>
      <td>1 min ago</td>
      <td>{Eyesvg}</td>
    </tr>
    <tr>
      <td></td>
      <td>Super admin</td>
      <td><Button  variant="outline-success"> All Access </Button>{' '}</td>
      <td>1</td>
      <td>1 min ago</td>
      <td>{Eyesvg}</td>
    </tr>
  </tbody>
</Table>

<div className="Taskpage">
        <Link to="/Task2">
        <p>Task page 2</p>
        </Link>
        <Link to="/Task3">
        <p>Task page 3</p>
        </Link>
        </div>

        </div>
        
        </div>
    )
}

export default Dashboard
