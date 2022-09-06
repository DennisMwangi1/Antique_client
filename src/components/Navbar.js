import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';




function Navbar() {

    const linkStyles ={
        display: "inline-block",
        width: "67px",
        padding: "12px",
        margin: "60px 20px 0px 20px",
        // background: "rgba(84, 129, 169, 0.737)",
        textDecoration: "none",
        color: "grey",
        fontWeight: "bold",
        border:"none",
        textAlign:"center",
        bordeRadius:"10px",
        
        
    }
  
  function logOut() {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div className='nav'>
        <div className='antique'>
             <img src={logo} alt='logo' className='logo' />
         <span className='logoName' href=''><h1>A<span>NTIQUE</span></h1></span>
        </div>
        <div className='navlinks'>
        <NavLink style={linkStyles}  to='/' className="anav">HOME</NavLink>
         <NavLink style={linkStyles} to='/about'>ABOUT</NavLink>
         <NavLink style={linkStyles} to='/workouts'>WORKOUTS</NavLink>
         <NavLink style={linkStyles} to='/trainers'>TRAINERS</NavLink>
        <NavLink style={linkStyles} to='/profile'>PROFILE</NavLink>
        <button onClick={logOut} style={linkStyles}>Logout</button>
        </div>
         
         
    </div>
  )
}

export default Navbar