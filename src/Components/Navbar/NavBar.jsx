import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import './Navbar.scss'

export default function NavBar() {
  return(     
     <header>
        <nav className="navbar-items">
                <Link to='/' className="navbar-logo">
                 <img src='https://static.wixstatic.com/media/1e5ce4_cb85a96a08fc41338f16d085a21743d4~mv2.png' alt="logo"/> 
                </Link>
        <ul className="nav-menu">
        <div className='bDropdown'>
            <a className="nav-link">Generos</a>
            <div className='nav-dropdown'>
            <li><Link className="nav-link" to={"/category/Hardcore"} >Hardcore</Link></li>
            <li><Link className="nav-link" to={"/category/Britpop"} >Britpop</Link></li>
            <li><Link className="nav-link" to={"/category/Stonerrock"} >StoneR</Link></li>
            <li><Link className="nav-link" to={"/category/Rockn"} >Rock N</Link></li>
            </div>
            </div>
            <li><Link className="nav-link" to={"/category/merch"} >Merch</Link></li>  
            <li><Link className="nav-link" to={"/Aus"} >Nosotros</Link></li>
            <li><CartWidget /></li>
        </ul>
         </nav>        
     </header>
  )
}