import React from 'react'

const Nav = ({ isActive }) => {
  return (
    <nav className={`menu ${isActive ? 'isActive' : ''}`}>
        <ul>
            <li><a href="#">TOP</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">PRODUCTS</a></li>
            <li><a href="#">ACCESS</a></li>
            <li><a href="#">CONTACT</a></li>
        </ul>
    </nav>
  )
}

export default Nav