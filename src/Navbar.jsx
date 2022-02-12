import React from "react";
import { NavLink } from "react-router-dom";


const Navbar=()=>{
    return(
<>

<nav className="navbar navbar-expand-lg navbar-light bg-light   Menu">
<div className="container-fluid">
  <NavLink className="navbar-brand text-dark font-weight-bold" to="/">MYtest</NavLink>
<button
className="navbar-toggler"
type="button"
data-toggle="collapse"
data-target="#navbarSupportedContent"
aria-controls="navbarSupportContent"
aria-expanded="false"
aria-label="Toggle navigation"
>
<span className="navbar-toggler-icon"></span>  
  </button>
  </div>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto text-center">
      <li className="nav-item active ">
        <NavLink className="nav-link text-dark font font-weight-bold"  to="/">Home </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link text-dark font-weight-bold" to="About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-dark font-weight-bold " to="Gallery">Gallery</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-dark font-weight-bold" to="Contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-dark font-weight-bold" to="Covid">Covidtracker</NavLink>
      </li>
      
    </ul>
  </div>
</nav>

</>

    )

}
export default Navbar;