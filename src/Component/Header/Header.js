import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import  './Header.css'
export default function Header() {
  return (
    <div className='header'>
      <header>
        <h1 className='ti' style={{textAlign:'center', fontSize:'40px', marginLeft:'170px'}}> Welcome to My Portfolio</h1>
        <nav className='nav'>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
            <li><Link to="/">Home</Link></li>  {/* Use Link component for navigation */}
            <li><Link to="/about">About</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/certificate">Certificate</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
