import React from 'react';
import './cta.css';

import linkedin from '../../assets/linkedin-blx.png';
import twitter from '../../assets/twitter-blx.png';
import github from '../../assets/github-blx.png';

const CTA = () => {
  return (
    <>
      <div className="hs__cta" id="contact">
        <div className="hs__cta-content">
          <h3>Get in touch today & start<br />exploring the endless possibilities</h3>
          <div className="hs__cta-social">
            <a href="https://www.linkedin.com/in/hiren-soni-creator/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://twitter.com/devsoni108/" target="_blank" rel="noreferrer">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://github.com/devSoni108/" target="_blank" rel="noreferrer">
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div className="hs__cta-content">
          <p>Email: soni.hiren108@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default CTA;
