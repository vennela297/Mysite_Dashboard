import React from 'react'

import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import Top from "./Top"

import "./DashboardTask2.css"
import Navbar from "./Navbar"


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

        <div className="navbar">
        <Navbar title1="Permissions" title2="Approval Matrix" />


     <div className="nav__Info">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg>
      <p>Last synced 15 mins ago</p>
     </div>
        </div>
        <div className="icons">
        
        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg> <spam className="Title"> Management Team</spam>  </p>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
</svg>



        </div>

        <div className="navbar">
        <Navbar title1="Access Control" title2="Assigned Members" />
               </div>


        <div className="table">

        <Table striped hover>
  <thead>
    <tr>
    <th></th>
    <th>Department/Role Name</th>
      <th>Acess Level</th>
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
    <td>{CircleSvg}</td>
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
