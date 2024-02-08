import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { FaCartPlus, FaHeart, FaSearch} from 'react-icons/fa'
const Navbar=()=>
{
    return(
        <>
        <div className="leftview">Exclusive</div>
        <div className="rightview">
        <Link className="nav" to='/'>Home</Link> 
        <Link className="nav" to='/Timer'>Contact</Link>
        <Link className="nav"to='/About'>About</Link>
        <Link className="nav"to='/Home'>Sign Up</Link>
        <div className="isearch"><input className="input"placeholder="What are you looking for? " ></input><FaSearch className="icon"/></div>
        <div><FaHeart className="icon"/></div>
        <div><FaCartPlus className="icon"/></div>

</div>
<br/>
<hr/>
        </>
    )
}

export default Navbar