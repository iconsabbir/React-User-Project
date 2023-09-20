import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <header className='container header-flax'>
               <a href="" className='logo'>Logo</a>
               <nav className='user-Detels'>
                    <Link to='../Login'><button className='btn btn-primary'>Login</button></Link>
                    <Link to='./Register'><button className='btn btn-primary'>Register</button></Link>
               </nav>

            </header>
        </div>
    );
};

export default Header;