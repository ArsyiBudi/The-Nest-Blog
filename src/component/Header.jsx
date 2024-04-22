import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LayoutGrid } from 'lucide-react';
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import { UserContext } from '../context/userContext';

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false)
  const {currentUser} = useContext(UserContext)

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false)
    } else {
      setIsNavShowing(true)
    }
  }

  return (
      <nav>
        <div className="container nav_container">
          <Link to="/" onClick={closeNavHandler}>
          <LayoutGrid size={40} className='nav_logo'/>
          </Link>
          {currentUser?.id && isNavShowing && <ul className="nav_menu">
            <li><Link to="/profile/sdfsds" onClick={closeNavHandler}>{currentUser?.name}</Link></li>
            {/* <li><a href="#footer" onClick={closeNavHandler}>category</a></li> */}
            <li><Link to="/createpost" onClick={closeNavHandler}>Create Post</Link></li>
            {/* <li><Link to="/createuser" >Create User</Link></li> */}
            <li><Link to="/Authors" onClick={closeNavHandler}>Author</Link></li>
            <li><Link to="/logout" onClick={closeNavHandler}>Logout</Link>   </li> 
          </ul>}
          {!currentUser?.id && isNavShowing && <ul className="nav_menu">
            <li><Link to="/Authors" onClick={closeNavHandler}>Author</Link></li>
            <li><Link to="/login" onClick={closeNavHandler}>Login</Link>   </li> 
          </ul>}
          <button className="nav_toogle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
            {isNavShowing ? <X/> : <Menu/>}
          </button>
        </div>
      </nav>
    )
}

export default Header