import React, { useEffect, useState } from 'react';
import './Home.css';
import profileImage from '../../Assert/profile.jpg';

export default function Home() {
  const roles = ['Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'Penetration Tester'];
  const [currentRole, setCurrentRole] = useState(roles[0]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % roles.length;
      setCurrentRole(roles[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* Profile Image */}
      <div className="image">
        <img src={profileImage} alt="Mihret Fikre" />
      </div>

      {/* Introduction Section */}
      <div className="intro">
        <h1>Hello! I’m <span className="highlight">Mihret Fikre</span></h1>
        <h2 className="dynamic-text">I’m a <span>{currentRole}</span></h2>
        <h3>A Software Engineering student passionate about <span className="highlight">web development</span> and <span className="highlight">cybersecurity</span>.</h3>
        <h3>Based in Addis Abeba, Ethiopia, I specialize in building responsive websites and performing security audits on applications.</h3>
        <h3>Let’s collaborate and create something amazing together!</h3>
      </div>
    </div>
  );
}
