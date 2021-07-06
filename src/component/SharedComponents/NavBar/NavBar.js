// import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { adminContext, emailContext } from '../../../App';
import './NavBar.css';

const NavBar = () => {
    // const [isAdmin, setIsAdmin] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(adminContext)
    const [email, setEmail] = useContext(emailContext)

    

    const isAdmin = !!loggedInUser.find(user => user.email === email)
    
    
    return (
        <div>
            <nav className="bg-gray-100">

                <Link className="active text-black" to="/">Twurs Tech Shop</Link>
                <Link to="/phone">Phone</Link>
                <Link to="/mouse">Mouse</Link>
                <Link to="/laptop">Laptop</Link>
                <Link to="/keyboard">Keyboard</Link>
                <Link to="/books">Books</Link>
                <Link to="/coffees">Coffees</Link>
                <Link to="/cart">Cart</Link>
                {
                    email ?
                        <p className="text-sm font-bold">{email}</p>
                        :
                        <Link to="/login">Login</Link>

                }
                {
                    email &&  
                    <Link onClick={()=> setEmail('')}>SignOut</Link>
                    
                }
                {isAdmin && <Link to="/admin">Admin Dashboard</Link>}

            </nav>

        </div>
    );
};

export default NavBar;