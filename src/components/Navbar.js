import './Component.css';
import { useRef } from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    return (
        <header>
            <NavLink to='/' className='logo'>Home</NavLink>
            
                <nav ref={navRef}>
                    <NavLink to='/vehicles' className='navComponents'>Vehicles</NavLink>
                    <NavLink to='favorites' className='navComponents'>Favorites</NavLink>
                    <NavLink to='/login' className='navComponents'>Login</NavLink>
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
