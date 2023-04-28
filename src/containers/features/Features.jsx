import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Software Development',
    text: 'Leveraging a range of full-stack technologies, I am dedicated to delivering engaging user experiences, ensuring every interaction is seamless and efficient.'
  },
  {
    title: 'Cloud Solutions',
    text: 'Harnessing the power of AWS cloud infrastructure, transform software and data presentation and storage for unparalleled scalability and reliability.'
  },
  {
    title: 'UI/UX Design',
    text: 'From wireframes to prototypes, I am passionate about crafting captivating and user-centered interfaces that not only look great but also elevate the user experience.'
  },
]

const Features = () => {
  return (
    <div className="hs__features section__padding" id="about">
      <div className="hs__features-heading">
        <div></div>
        <h2>Who am I?</h2>
        <p>Welcome to my portfolio!<br/><br/>I'm a passionate software developer and tech enthusiast based in Johannesburg, South Africa. I have experience collaborating with teams around SA, creating a wide range of products, like intuitive points of sale, robust ERP solutions, and dynamic multi-channel e-commerce stores. I've worked with a variety of technologies, including cloud-based, on-prem, and hybrid systems.</p>
        <a href='#projects'>View my Projects</a>
      </div>
      <div className="hs__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features