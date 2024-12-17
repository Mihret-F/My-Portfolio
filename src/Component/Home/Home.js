import React, { useEffect } from 'react';
import './Home.css';

export default function Home() {
  useEffect(() => {
    const roles = ['Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'Penetration Tester'];
    let currentIndex = 0;

    const roleElement = document.getElementById('role');
    const interval = setInterval(() => {
      roleElement.textContent = roles[currentIndex];
      currentIndex = (currentIndex + 1) % roles.length; // Rotate through the roles
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className='home'>
      <div className='intro'>
        
        <h1>Hello! I’m <span className='highlight'>Mihret Fikre</span></h1>
        <h2 className='dynamic-text'>
          I’m a <span id='role'></span>
        </h2>
        <h3>
          A Software Engineering student passionate about <span className='highlight'>web development</span> and <span className='highlight'>cybersecurity</span>. Based in Addis Abeba, Ethiopia, I specialize in building responsive websites and performing security audits on applications.  
       </h3>
        <h3>
          Currently pursuing my degree at Debre Markos University and interning at INSA, I focus on delivering innovative and secure digital solutions.
       </h3>
        <h3>Let’s collaborate and create something amazing together!</h3>
      </div>
    </div>
  );
}
