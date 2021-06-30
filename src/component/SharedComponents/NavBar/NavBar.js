// import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
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
                <Link to="/login">Login</Link>

            </nav>

        </div>
    );
};

export default NavBar;