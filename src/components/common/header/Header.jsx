import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (

    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">

        <h1 className="logo mr-auto"><a href="index.html">React CRUD</a></h1>

        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active"><Link to="/">All User</Link></li>
            <li><Link to="/add-user">Add User</Link></li>
            {/* <li><Link to="/service">Services</Link></li>
            <li><Link to="/protfolio">Portfolio</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/register">Register</Link></li> */}

          </ul>
        </nav>

        {/* <div className="header-social-links">
          <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
          <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
          <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
          <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
        </div> */}
      </div>

    </header>


  )
}

export default Header