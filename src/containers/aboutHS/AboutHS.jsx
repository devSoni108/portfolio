import React from 'react';
import { Feature } from '../../components';
import './aboutHS.css';

const AboutHS = () => (
    <div className="hs__abouths section__margin">
      
      <div className='hs__abouths-container'>
        <Feature title="e-Commerce" text="E-commerce has revolutionized the way businesses operate and has made it possible for people to buy and sell goods and services from anywhere in the world at any time. 
        It has enabled small and large businesses to reach new markets, expand their customer base, and increase their revenue." />
        <Feature title="Chatbots" text="A chatbot is a computer program that can simulate conversation with human users using natural language processing and artificial intelligence techniques.
        Chatbots can be used for a variety of purposes, including customer service, information gathering, entertainment, and more." />
        <Feature title="Cloud" text="Cloud migration refers to the process of moving an organization's data, applications, and other IT resources from on-premises infrastructure to cloud-based infrastructure. The goal of cloud migration is to take advantage of the benefits of cloud computing, such as increased scalability, flexibility, and cost savings." />
      </div>
    </div>
  );

export default AboutHS