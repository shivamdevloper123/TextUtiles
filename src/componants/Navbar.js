import React from 'react'
import PropTypes from 'prop-types' 
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (

    // <a></a> -->replace--> <Link></Link> and href -->replace-->to (using for react router)

    <div> <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      
      <Link className="navbar-brand"to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse"  id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-1">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page"to="/" > {props.homeText} </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"to="/about">{props.aboutText}</Link>
          </li>
         
        
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch mx-3  text-${props.mode ==='light'?'dark':'light'}`} >
  <input className="form-check-input"onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      </div>
    </div>
  </nav></div>
  )
}
Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    homeText:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired,

}


Navbar.defaultProps = {
    title: ' title ',
    aboutText:' About '
  };
