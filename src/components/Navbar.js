import './Component.css';
import { useRef } from 'react'
import {FaBars, FaTimes, FaStar} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';


import logo from '../media/logo.png'

const Navbar = () => {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    const { isLoggedIn, logOutUser } = useContext(AuthContext);

    return (
        <header>

            <NavLink to='/' className='logo'><img src={logo}/></NavLink>
            
                <nav ref={navRef}>
                    <NavLink to='/vehicles' className='navComponents'>Vehicles</NavLink>
                    <NavLink to='favorites' className='navComponents'><FaStar className='nav-star'/></NavLink>

                    {isLoggedIn && (
                        <button onClick={logOutUser} className='logout'>Logout</button>
                    )}
                    {
                        !isLoggedIn && (
                         <NavLink to='/login' className='navComponents'>Login</NavLink>
                        )
                    }

                   
                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </nav> 
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaBars/>
                </button>
        </header>
    
    );
}

export default Navbar;
