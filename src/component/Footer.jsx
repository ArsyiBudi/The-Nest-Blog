import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id='footer'>
      <ul className="footer_categories">
        <li><Link to="/posts/categories/Agriculture">Agriculture</Link></li>
        <li><Link to="/posts/categories/Bussiness">Business</Link></li>
        <li><Link to="/posts/categories/Education">Education</Link></li>
        <li><Link to="/posts/categories/Entertaiment">Entertainment</Link></li>
        <li><Link to="/posts/categories/Art">Art</Link></li>
        <li><Link to="/posts/categories/Investment">Investment</Link></li>
        <li><Link to="/posts/categories/Uncategories">Uncategories</Link></li>
        <li><Link to="/posts/categories/Weather">Weather</Link></li>
      </ul>
      <div className="footer_copyright"><small>create by &copy; Arsyi</small></div>
    </footer>
  )
}

export default Footer