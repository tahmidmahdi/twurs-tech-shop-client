// import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { emailContext } from '../../../App';
import './NavBar.css';

const NavBar = () => {
    const [email, setEmail] = useContext(emailContext)
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
                <Link to="/login">Login</Link>
                <Link to="/admin">Admin Dashboard</Link>

            </nav>

        </div>
    );
};

export default NavBar;