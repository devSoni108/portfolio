import React from 'react';

import about from '../../assets/about.gif';
import './about.css';

const About = () => {
  return (
    <div className="hs__about section__padding" id="features">
      <div className="hs__about-image">
        <img src={about} alt="about" />
      </div>
      <div className="hs__about-content">
        <h2 className="gradient__text" >The Future is Now.</h2>
        <p>Whether you're starting a new project or preparing for migration to the cloud, I am here to help. Skilled in every stage of the development lifecycle, I offer invaluable insights and guidance that will help you take your project to the next level. If you're ready to take your next big venture to the next level, let's connect and discuss how I can help. I'm excited to hear about your project!</p>
        <a href='#contact'><h4>Get in Touch</h4></a>
      </div>
    </div>
  );
}

export default About