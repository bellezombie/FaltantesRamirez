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
            <li><Link className="nav-link" to={"/"} >General</Link></li>
            <li><Link className="nav-link" to={"/category/Hardcore"} >Hardcore</Link></li>
            <li><Link className="nav-link" to={"/category/Britpop"} >Britpop</Link></li>
            <li><Link className="nav-link" to={"/category/Stonerrock"} >StoneR</Link></li>  
        </ul>
                 </nav>
        <CartWidget /> 
     </header>
  )
}