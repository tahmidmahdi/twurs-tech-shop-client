import React from 'react';
import { Link } from 'react-router-dom';

import './AdminNavBoard.css';
const DashBoard = () => {

    return (
        //  this section is for the sidebar option for admin
        <div>
            <div className="sidebar ">
                <Link className="active" to='/admin'>Dashboard</Link>
                <Link  to='/addProduct'>Add Products</Link>
                <Link  to='/delete'>Delete Products</Link>
                <Link  to='/makeAdmin'>Make An Admin</Link>
                <Link  to='/'>Back To Home</Link>
            </div>
        </div>

    );
};

export default DashBoard;