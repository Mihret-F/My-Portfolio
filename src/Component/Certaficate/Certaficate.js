import React from 'react';
import './Certaficate.css';
import po from '../../Assert/cer.png';
import po1 from '../../Assert/cer1.png';
import po2 from '../../Assert/me.png';

export default function Certificate() {
  return (
    <div className="certificate-container">
      <section className="certificates">
        <h2>Certificates</h2>
        <div className="certificate">
          <h3>Certificate of Achievement in Securing Android User Data</h3>
          <img src={po} alt="Certificate 1" />
        </div>
        <div className="certificate">
          <h3>Certificate of Achievement in Fundamental Cybersecurity</h3>
          <img src={po1} alt="Certificate 2" />
        </div>
        <div className="certificate">
          <h3>Certificate of Achievement in Leadership and Entrepreneurship</h3>
          <img src={po2} alt="Certificate 3" />
        </div>
      </section>
    </div>
  );
}
