import React,{Component} from "react";
import {Route,Link} from "react-router-dom";

function Navbar ({Getcount}) {

  return ( <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/home">BURGRINOO</Link>
  <span className="badge bg-primary pl-3 ml-3">{Getcount}<i class="fas fa-shopping-cart"></i></span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">about <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/minu">minu <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/contact">contact <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/cart">cart <span className="sr-only">(current)</span></Link>
      </li>
    </ul>
  </div>
  </nav> 
  
  
  
  );



}


// class Navbar extends Component {
//     render() { 
      
//     }
// }
 
export default Navbar;