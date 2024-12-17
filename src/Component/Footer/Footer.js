import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import LinkedIn and GitHub icons
import './footer.css'; // Import the CSS file for styling

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/mihret-fikre-7b87b129b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="icon" /> {/* LinkedIn Icon */}
          </a>
          <a href="https://github.com/Mihret-F" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="icon" /> {/* GitHub Icon */}
          </a>
        </div>
        <p>
          Made with ❤️ by Mihret Fikre | Contact me: <a href="mailto:your-email@example.com">mihretfikre67@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}
