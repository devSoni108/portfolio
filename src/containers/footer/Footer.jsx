import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="hs__footer section__padding">
      <div className="hs__footer-links">
        <div className="hs__footer-links_div">
          <h4>Menu</h4>
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#projects">Projects</a></p>
        </div>
        <div className="hs__footer-links_div">
          <h4>Get In Touch</h4>
          <p>Hyde Park, 2196 South Africa</p>
          <p>soni.hiren108@gmail.com</p>
        </div>
      </div>
      <div className="hs__footer-copyright">
        <p>© 2023 Hiren Soni. All rights reserved.</p>
      </div>
    </div>
    
  )
}

export default Footer