import React, { useState } from "react";
import { FaBars, FaCartPlus,  FaHeart, FaSearch} from 'react-icons/fa'
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    const [showdropdown,setdropdown]=useState(false);
    const toggledropdown=()=>{
        setdropdown(!showdropdown);
    };
    return (
        <>
            <div className="leftview">Exclusive</div>
            <div className="rightview">
                    <Link className="nav" to='/'>Home</Link>
                    <Link className="nav" to='/Timer'>Contact</Link>
                    <Link className="nav" to='/About'>About</Link>
                    <Link className="nav" to='/Signup'>Sign Up</Link>
                

                {/* Search Input */}
                <div className="isearch">
                    <input className="input" placeholder="What are you looking for? " />
                    <FaSearch className="icon" />
                </div>
                
                {/* Heart (Wishlist) icon */}
                <div><FaHeart className="icon" /></div>

                {/* Cart icon */}
                <div><FaCartPlus className="icon" /></div>
                <div className="baricon">
                <FaBars  onClick={toggledropdown} />
                   {showdropdown && (
                     <ul >
                        <a href="/" className="menu">Home</a><br/>
                        <a href="/Timer" className="menu">Contact</a><br/>
                        <a href="/About"className="menu">About</a><br/>
                        <a href="/Signup" className="menu">Sign Up</a>
                     </ul>
                   )} 
                </div>
            </div>
            
            <br />
            <hr />
        </>
    )
}

export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom";
// import './Navbar.css'
// import { FaCartPlus, FaHeart, FaSearch} from 'react-icons/fa'
// const Navbar=()=>
// {
//     return(
//         <>
//         <div className="leftview">Exclusive</div>
//         <div className="rightview">
//         <Link className="nav" to='/'>Home</Link> 
//         <Link className="nav" to='/Timer'>Contact</Link>
//         <Link className="nav"to='/About'>About</Link>
//         <Link className="nav"to='/Home'>Sign Up</Link>
//         <div className="isearch"><input className="input"placeholder="What are you looking for? " ></input><FaSearch className="icon"/></div>
//         <div><FaHeart className="icon"/></div>
//         <div><FaCartPlus className="icon"/></div>

// </div>
// <br/>
// <hr/>
//         </>
//     )
// }

// export default Navbar