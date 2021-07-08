import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { adminContext, emailContext } from '../../../App';
import './NavBar.css';
import logo from '../../../images/logobg.gif'
const NavBar = () => {


    
    const [loggedInUser, setLoggedInUser] = useContext(adminContext)
    const [email, setEmail] = useContext(emailContext)

    
    //  this section is to check if admin email is available in our loggedInUser state. If so then it will return true
    const isAdmin = !!loggedInUser.find ( user => user.email === email )
    
    
    return (
        <div>
           
            <nav className='flex justify-around items-center'>
                <div className=''>
                    <Link to='/' ><img style={{width:'190px'}} src={logo} alt="" /></Link>
                </div>
                <div >
                    <Link to='/phone'>Mobile</Link>
                    <Link to='/laptop'>Laptop</Link>
                    <Link to='/keyboard'>Keyboard</Link>
                    <Link to='/mouse'>Mouse</Link>
                    <Link to='/books'>Books</Link>
                    <Link to='/coffee'>Coffee</Link>
                </div>
                <div>
                    { email && !isAdmin ? <Link className='text-red-600 animate-pulse '>{email}</Link> : <Link to='/login'>Login</Link>}
                    { email && <Link className='text-red-600 animate-pulse ' onClick={()=> setEmail('')}>Sign Out</Link> }
                    { email && <Link to='/cart'>Cart</Link>}
                    { isAdmin && <Link to="/admin">Admin Dashboard</Link> }
                </div>
            </nav>
        </div>
    );
};

export default NavBar;