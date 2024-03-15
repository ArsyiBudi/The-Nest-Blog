import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className="footer_categories">
        <li><Link to="/post/categories/:Agriculture">Agriculture</Link></li>
        <li><Link to="/post/categories/:Bussiness">Bussiness</Link></li>
        <li><Link to="/post/categories/:Education">Education</Link></li>
        <li><Link to="/post/categories/:Entertaiment">Entertaiment</Link></li>
        <li><Link to="/post/categories/:Art">Art</Link></li>
        <li><Link to="/post/categories/:Investment">Investment</Link></li>
        <li><Link to="/post/categories/:Uncategories">Uncategories</Link></li>
        <li><Link to="/post/categories/:Weather">Weather</Link></li>
      </ul>
      <div className="footer_copyright"><small>create by &copy; Arsyi</small></div>
    </footer>
  )
}

export default Footer