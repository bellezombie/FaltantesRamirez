import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import './Navbar.scss'

export default function NavBar() {
  return(     
     <header>
        <nav className="navbar-items">
                <Link to='/' className="navbar-logo">
                {/*  <img src={logo} alt={"logo"}/> no te olvides de agregar*/}
                </Link>
        <ul className="nav-menu">
            <li><Link className="nav-link" to={"/"} ></Link></li>
            <li><Link className="nav-link" to={"/category/Hardcore"} ></Link></li>
            <li><Link className="nav-link" to={"/category/Britpop"} ></Link></li>
            <li><Link className="nav-link" to={"/category/Stonerrock"} ></Link></li>  
        </ul>
        <Link to='/cart' > <CartWidget /> </Link>
        </nav>
     </header>
  )
}
