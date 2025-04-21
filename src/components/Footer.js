import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
        <div className='links'>
      <p>© 2025 Maria Hernandez</p>
      <a href="https://www.linkedin.com/in/maria-hernandez-a84036331/">LinkedIn</a>
      <br></br>
      <a href="https://github.com/Marialehdes">GitHub</a>
      </div>
    </motion.footer>
  );
};

export default Footer;
