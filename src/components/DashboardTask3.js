import React from 'react'

import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';

import Top from "./Top"

import "./DashboardTask2.css"
import Navbar from "./Navbar"
import Edit from "./edit.png"



const EnabledToggleButton = <div class="form-check form-switch">
<input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />

</div>

const ToggleOff = <div class="form-check form-switch">
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />

</div>

const CircleSvg = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>


const CheckedRadio = <div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
<label class="form-check-label" for="flexRadioDefault2">
   Restricted Access
  
</label>
<p>Can access only assigned or created items</p>
</div>



const UncheckedRadio = <div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label class="form-check-label" for="flexRadioDefault1">
  All Access
</label>
<p>Can access all items</p>
</div>

const UncheckedBox = <div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
<label class="form-check-label" for="flexCheckDefault">
  View Items in Access
</label>
</div>
const CheckedBox = <div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
<label class="form-check-label" for="flexCheckChecked">
  Edit items in access 
</label>
</div>

function DashboardTask2() {
    return (

        <div className="Dashboard">

<div className="top">
<Top />
</div>

        
        <Navbar title1="Permissions" title2="Approval Matrix" />


     
        <div className="icons">
        
        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg> <spam className="Title"> Management Team</spam>  </p>

<img src={Edit} alt="logo"/>      

        </div>
         <div className="Sub_nav">
        <div className="Navbar">
        
         <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Access Control</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Assigned Members</Nav.Link>
  </Nav.Item>
  
</Nav>   
               </div>
               </div>


        <div className="table">

        <Table striped hover>
  <thead>
    <tr>
    <th></th>
    <th>Department/Role Name</th>
      <th>Access Level</th>
      <th>Summary</th>
      <th>Last Updated</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{CircleSvg}</td>
      <td>  Budget</td>
      <td><Button variant="outline-success"> All Access</Button>{' '}</td>
      <td>View | Create | Edit | Delete</td>
      <td>1 min ago</td>
      <td> {EnabledToggleButton}</td>
    </tr>

    <tr>
    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg></td>
      <td><td>Bidding</td>
      Access Control 
      {UncheckedRadio}
      {CheckedRadio}
      
      </td>
      <td>
        <td></td> 
         Permissions
         {UncheckedBox}
         {CheckedBox}
         {UncheckedBox}
         {UncheckedBox}
      </td>
      <td></td>
      <td>1 min ago</td>
      <td>{EnabledToggleButton}</td>
    </tr>

    <tr>
    <td>{CircleSvg}</td>
      <td>   Vender Portal</td>
      <td><Button variant="outline-danger">Restricted Access</Button>{' '}</td>
      <td>View | Create</td>
      <td>1 min ago</td>
      <td>{EnabledToggleButton}</td>
    </tr>

    <tr>
    <td>{CircleSvg}</td>
      <td> Purchase Order /Workorder</td>
      <td><Button variant="outline-danger">Restricted Access</Button>{' '}</td>
      <td>View | Create</td>
      <td>1 min ago</td>
      <td>{EnabledToggleButton}</td>
    </tr>
    
    <tr>
    <td>{CircleSvg}</td>
      <td>   Organisational Profile</td>
      <td><Button variant="outline-success"> All Access </Button>{' '}</td>
      <td>View | Create | Edit | Delete</td>
      <td>1 min ago</td>
      <td>{EnabledToggleButton}</td>
    </tr>

    <tr>
    <td>{CircleSvg}</td>
      <td>  Permission & Access Control</td>
      <td><button type="button" class="btn btn-outline-secondary">No Access</button></td>
      <td>-</td>
      <td>1 min ago</td>
      <td>{ToggleOff}</td>
    </tr>
  </tbody>
</Table>


        </div>
        
        </div>
    )
}

export default DashboardTask2
