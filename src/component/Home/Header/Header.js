import React from 'react';
import logo from '../../../images/logobg.gif'

import './Header.css'
const Header = () => {
    return (
        <div >
            <div className="image-logo">
                <img  src={logo} alt="" />
            </div>

            
        </div>
    );
};

export default Header;