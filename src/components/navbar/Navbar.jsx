import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import github from '../../assets/github.png';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#projects">Projects</a></p>
  <p><a href="#contact">Contact</a></p>
  </>
)

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="hs__navbar" id="home">
      <div className="hs__navbar-links">
        <div className="hs__navbar-links_logo">
          <a href="home"><img src={logo} alt="logo"/></a>
        </div>
        <div className="hs__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="hs__navbar-social">
        <a href="https://www.linkedin.com/in/hiren-soni-creator/" target="_blank">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://twitter.com/devsoni108/" target="_blank">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://github.com/devSoni108/" target="_blank">
          <img src={github} alt="github" />
        </a>
      </div>

      <div className="hs__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="hs__navbar-menu_container scale-up-center">
            <div className="hs__navbar-menu_container-links">
              <Menu />
              <div className="hs__navbar-menu_container-links-social">
                <img src={linkedin} alt="linkedin" href="https://www.linkedin.com/in/hiren-soni-creator/" />
                <img src={twitter} alt="twitter" href="https://twitter.com/devsoni108" />
                <img src={github} alt="github" href="https://github.com/devSoni108" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar