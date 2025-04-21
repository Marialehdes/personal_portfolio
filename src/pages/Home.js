import React from 'react';
import '../App.css';
import backgroundImage from '../img/background.jpeg';

//kept the background image short since I wanted my text to be understood.
function Home() {
  return (
    <div className="homePage">
      <h6 className="heading">Welcome!</h6>
      <img src={backgroundImage} alt="Soft pink and cream abstract background" className="backgroundImage" />
      <p>Hi there! I'm Maria Hernandez, a Digital Media student at the University of Central Florida, navigating this world through creativity, design, and storytelling. I'm excited to share my journey with you through this portfolio. Here, you will find a collection of my projects, the skills I've developed, and a glimpse into who I am as a creator and learner. Every design, every idea, every step holds a little piece of me. Whether you're a fellow student, a potential collaborator, or just curious, I'm truly glad you stopped by.</p>
      <p>Feel free to reach out anytime. I'd love to hear from you!</p>
    </div>
  );
}

export default Home;
