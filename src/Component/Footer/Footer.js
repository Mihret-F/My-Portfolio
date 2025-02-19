import React from 'react';
import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa'; // Import Telegram icon
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
          <a href="https://t.me/Mercyyy_07" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={24} className="icon" /> {/* Telegram Icon */}
          </a>
        </div>

        <p>
          Made with ❤️ by Mihret Fikre | Contact me: 
          <a href="mailto:mihretfikre67@gmail.com"> mihretfikre67@gmail.com</a>
        </p>

        <p>
          📞 <strong>Phone:</strong> <a href="tel:+251965449976">+251 96 544 9976</a>
        </p>
        <p>
          💬 <strong>Telegram:</strong> <a href="https://t.me/Mercyyy_07">@Mercyyy_07</a>
        </p>
      </footer>
    </div>
  );
}
