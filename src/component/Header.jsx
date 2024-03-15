import React from 'react'
import { Link } from 'react-router-dom'
import { LayoutGrid } from 'lucide-react';
import { X } from 'lucide-react';


const Header = () => {
  return (
      <nav>
        <div className="container nav_container">
          <Link to="/" >
          <LayoutGrid size={40} className='nav_logo'/>
          </Link>
          <ul className="nav_menu">
            <li><Link to="/profile" >Ernest Achiever</Link></li>
            <li><Link to="/createpost" >Create Post</Link></li>
            {/* <li><Link to="/createuser" >Create User</Link></li> */}
            <li><Link to="/Authors" >Author</Link></li>
            <li><Link to="/logout" >Logout</Link>   </li> 
          </ul>
          <button className="nav_toogle-btn">
          <X />
          </button>
        </div>
      </nav>
    )
}

export default Header