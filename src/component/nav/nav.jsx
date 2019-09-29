import React from 'react';
import {Link} from 'react-router-dom';

const nav = (props) => {
    return (
        <div>
           <nav className='navbar'>
               <Link to='/'>Availity</Link>
               <Link to='/' >Home</Link>
               <Link to='#' >About</Link>
               <Link to='/registration' >Registration</Link>
           </nav>
        </div>
    );
}

export default nav;
