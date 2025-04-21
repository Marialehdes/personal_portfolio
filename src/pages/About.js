import React from 'react';
import '../App.css';
import profileImage from '../img/profileImage.jpeg';
import artFooter from '../img/Art.png'
import { motion } from 'framer-motion';

//https://motion.dev/
//simple motion
function About() {
  return (
    <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
    <div className="aboutMePage">
        <div className="aboutMeHeader">
            <img src={profileImage} alt="Profile" className="profileImage" />
            <br></br>
            <div className="aboutMe">
                <h3 className="heading">About Me</h3>
                    <p>
                        After graduating high school, I earned my Associate of Arts degree and transferred to UCF, my dream school. It took me some time to find the degree that truly felt like me, and Digital Media was the one that reflected my creativity, love for design, and desire to make meaningful experiences through technology.
                    </p>
                    <p>
                        I strive to give my best in every class, not just for the sake of a grade, but to grow into the kind of creator and person I want to be. Beyond academics, I'm dedicated to giving back, whether it's volunteering, mentoring youth, or offering spiritual guidance through my local Catholic church community.
                    </p>
                    <p>
                        From leading second-grade faith classes to organizing retreats, service has become a core part of who I am. And in the quiet moments, you'll often find me with my family and friends laughing, supporting one another, and just enjoying the simple things.
                    </p>
            </div>
        </div>
        <br></br>

    <div className="skills">
      <h3 className="heading">Skills</h3>
      <ul>
        <li>JavaScript</li>
        <li>HTML / CSS / SCSS</li>
        <li>React & React Native</li>
        <li>Node.js, MySQL, PHP</li>
        <li>VR / AR / MR Foundations</li>
        <li>Adobe Photoshop</li>
        <li>GitHub, Visual Studio Code, PuTTY</li>
        <li>Digital Art & Design</li>
        <li>Figma</li>
        <li>Project organization & time management</li>
        <li>Creative problem-solving</li>
        <li>Team collaboration & communication</li>
      </ul>
    </div>

    <div className="interests">
      <h3 className="heading">Interest</h3>
      <p>
      I love making art, from digital pieces to hands-on creative projects. College classes in 2D art, drawing, and art history gave me the chance to experiment with materials like charcoal, newspaper print, and paint, and I loved every second. Faith and service are close to my heart. I teach second-grade faith formation and help lead a youth group at my local Catholic church. I also enjoy serving at spiritual retreats.
      </p>
      <p>
      I find joy in the little things: spending time with family and friends, watching movies, laughing over shared memories, and being there for one another through life's ups and downs. Traveling is something I cherish, experiencing new cultures, exploring unfamiliar places, and learning their stories. And one more thing, I love order. There's something satisfying about creating structure, whether it's in my code, my designs, or just the way I plan my day.
      </p>

      <img src={artFooter} alt="Art Examples" className="artFooter" />
      </div>
    </div>
    </motion.div>
  );
}

export default About;
