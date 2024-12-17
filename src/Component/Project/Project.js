import React from 'react';
import './Project.css';

export default function Project() {
  return (
    <div className='pro'>
      <div className='project-container'>
        <h1>Project Work Overview</h1>
        <p>
          Throughout my academic journey and internship at INSA (Information Network Security Administration), I have had the opportunity to work on various challenging and impactful projects. These experiences have strengthened my skills in mobile app testing, web development, and security auditing. Below is a brief overview of my key projects and the technologies I worked with.
        </p>
      </div>

      <div className='project-container'>
        <h1>INSA - Amole Mobile App Test</h1>
        <p>
          One of the significant projects I undertook during my internship at INSA was the security audit and penetration testing of the Amole mobile app. Amole is one of the widely used mobile payment applications in Ethiopia, and ensuring its security is crucial for protecting users' sensitive data. I conducted a comprehensive security assessment to identify vulnerabilities in the app using tools like Burp Suite and OWASP ZAP.
        </p>
      </div>

      <div className='project-container'>
        <h1>INSA - Hibir App Test</h1>
        <p>
          The Hibir app is another mobile application I tested during my internship at INSA. My main focus was to identify any security weaknesses in the app, particularly around data encryption and secure communication protocols. I performed static and dynamic analysis, as well as penetration tests, and provided recommendations for improving its security framework.
        </p>
      </div>

      <div className='project-container'>
        <h1>INSA - Addis Abeba Drug and Food Administration App Test</h1>
        <p>
          I also worked on testing the Addis Abeba Drug and Food Administration (ADFA) app during my internship. This app is crucial for managing drug safety, food inspections, and regulatory activities. I conducted a security audit to ensure regulatory compliance, focusing on vulnerabilities like SQL injection and cross-site scripting (XSS).
        </p>
      </div>

      <div className='project-container'>
        <h1>NUSIN Android Java - Calculator App</h1>
        <p>
          In addition to my work at INSA, I developed a simple Calculator app using Android Java for the NUSIN project. This app performs basic arithmetic operations and helped me improve my skills in Android development and Java programming.
        </p>
      </div>

      <div className='project-container'>
        <h1>MERN Stack - E-Commerce App</h1>
        <p>
          Another significant project I worked on was building an e-commerce platform using the MERN stack (MongoDB, Express.js, React, Node.js). The project involved both front-end and back-end development, with a focus on user authentication, product listings, and secure transactions. This gave me hands-on experience in full-stack development.
        </p>
      </div>
    </div>
  );
}
