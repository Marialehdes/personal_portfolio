import React, { useState } from 'react';
import '../App.css';

//I need to make sure the information input validates
function Contact() {
    //useState -> https://www.w3schools.com/react/react_usestate.asp
    const [formInput, setformInput] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    const [error, errorMessage] = useState('');

    //https://www.freecodecamp.org/news/how-to-validate-forms-in-react/
    const handleChange = (e) => {
      setformInput({ ...formInput, [e.target.name]: e.target.value });
      errorMessage('');
    };

    //used as an example past code from class
    const handleSubmit = (e) => {
      e.preventDefault();

      if (!formInput.name || !formInput.email || !formInput.subject || !formInput.message) {
        errorMessage('You must fill out all the fields.');
        return;
      }

      if (!/\S+@\S+\.\S+/.test(formInput.email)) {
        errorMessage('Please enter a valid address.');
        return;
      }

      alert('Thank you! Message sent, I will respond soon.');
      setformInput({ name: '', email: '', subject: '', message: '' });
    };

    //https://react-hook-form.com/docs/useform/handlesubmit
    return (
        <div className="contactPage">
        <h3 className='heading'>Let's Connect</h3>
        <p>
          Whether you have a question or just want to say hi, I'd love to hear from you. Fill out the form below or reach out through one of my social platforms!
        </p>

        <h5 className='headingSmall'>Contact Form</h5>
        {error && <p className="error">{error}</p>}
        <form className="contactForm" onSubmit={handleSubmit}>

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formInput.name} onChange={handleChange} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formInput.email} onChange={handleChange} />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" value={formInput.subject} onChange={handleChange} />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formInput.message} onChange={handleChange} />

          <button type="submit">Send Message</button>
        </form>

        <div className="socialMedia">
          <h5 className='headingSmall'>Social Links</h5>
          <ul>
            <li><a href="https://www.linkedin.com/in/maria-hernandez-a84036331/">LinkedIn</a></li>
            <li><a href="https://github.com/Marialehdes">GitHub</a></li>
          </ul>
        </div>
      </div>
    );
  }

  export default Contact;