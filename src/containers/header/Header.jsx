import React from 'react';
import './header.css';
import hero from '../../assets/hero.gif';

const Header = () => {
  return (
    <div className="hs__header section__padding">
      <div className="hs__header-content">
        <h1 className="gradient__text">HiREN<br></br>SONi</h1>
        <p>Software Developer || Cloud Practitioner</p>

        <div className="hs__header-content__input">
         <button type="button">  <a href = '#contact'>Contact Me</a></button>
        </div>
      </div>

      <div className="hs__header-image">
        <img src={hero} alt='creative robot gif'/>
      </div>
    </div>
  )
}

export default Header