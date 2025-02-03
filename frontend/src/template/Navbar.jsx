import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>

            <div class="topnav">

                <Link class="active" to='/'>Home</Link>
                <Link to='/Addnew'>Add</Link>

            </div>

        </div>
    )
}

export default Navbar
