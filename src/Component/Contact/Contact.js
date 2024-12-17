import React from 'react';
import './Contact.css';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // You can add submission logic here (e.g., send form data to an API or display a success message)
    console.log('Form submitted!');
    // Optionally redirect to GitHub
    window.open('https://github.com/Mihret-F', '_blank');
  };

  return (
    <div className='contact'>
      <h1>Contact</h1>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name:</label>
          <input type='text' id='firstName' name='firstName' placeholder='Enter your first name' required />
        </div>
        <div className='form-group'>
          <label htmlFor='lastName'>Last Name:</label>
          <input type='text' id='lastName' name='lastName' placeholder='Enter your last name' required />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' placeholder='Enter your email' required />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone:</label>
          <input type='tel' id='phone' name='phone' placeholder='Enter your phone number' />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message:</label>
          <textarea id='message' name='message' rows='5' placeholder='Write your message here...' required></textarea>
        </div>
        <button type='submit' className='submit-button'>Submit</button>
      </form>
    </div>
  );
}
