import React from 'react';
import { Link } from 'react-router-dom';

import './AdminNavBoard.css';
const DashBoard = () => {

    return (
        <div>
            <div className="sidebar ">
                <Link className="active" to='/admin'>Dashboard</Link>
                <Link  to='/addProduct'>Add Products</Link>
                <Link  to='/delete'>Delete Products</Link>
                <Link  to='/'>Back To Home</Link>
            </div>


            {/* <div class="content">
                

                
            </div> */}
        </div>

    );
};

export default DashBoard;