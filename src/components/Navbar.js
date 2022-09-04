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

  return (
    <div className='nav'>
        <div className='antique'>
             <img src={logo} alt='logo' className='logo' />
        <NavLink to='/'> <a className='logoName' href='/'><h1>A<span>NTIQUE</span></h1></a></NavLink>
        </div>
        <div className='navlinks'>
        <NavLink style={linkStyles}  to='/' ><a href='/' className='alink' >HOME</a></NavLink>
         <NavLink style={linkStyles} to='./about'><a href='/' className='alink'>ABOUT</a></NavLink>
         <NavLink style={linkStyles} to='./workouts'><a href='/' className='alink'>WORKOUTS</a></NavLink>
         <NavLink style={linkStyles} to='./trainers'><a href='/' className='alink'>TRAINERS</a> </NavLink>
         <NavLink style={linkStyles} to='./contacts'><a href='/' className='alink'>CONTACTS</a></NavLink>
        </div>
         
         
    </div>
  )
}

export default Navbar