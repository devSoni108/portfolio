import React from 'react';
import { Article, Modal } from '../../components';
import { fitnessApp, zombie, ticketDesk, raag } from './imports';
import './projects.css';  

const Projects = () => {
  return (
    <div className="hs__projects section__padding" id="projects">
      <div className="hs__projects-heading">
        <h2 className="gradient__text">Explore My Latest and Greatest Projects Below!</h2>
      </div>
      <div className="hs__projects-container_groupA">
        <div className="hs__projects-container_groupB">
          <div className="hs__projects-container_groupA">
            <div className="hs__projects-container_project">
              <Article imgUrl={fitnessApp} 
              title="Only Fitness"
              tools="ReactJS | Materiel UI"
              description="Fast track your fitness journey with this easy to use fitness app. View exercises by target muscle or equipment." />
              <div className="hs__projects-container_article-content">
                <a href="https://github.com/devSoni108/only-fitness" target="_blank"><p>View Code</p></a>
                <a href="https://only-fitness.netlify.app/" target="_blank"><p>View Application</p></a>
              </div>
            </div>
          </div>
          <div className="hs__projects-container_groupA">
            <div className="hs__projects-container_project">
              <Article imgUrl={ticketDesk} 
              title="Ticket Desk"
              tools="PostgreSQL | Retool"
              description="Full-stack web app to seamlessly manage tickets and improve response time with SMS and email alerts, just like the pros at Pager Duty!" />
              <div className="hs__projects-container_article-content">
                <a href="https://github.com/devSoni108/page-up" target="_blank"><p>View Code</p></a>
                <Modal />
              </div>
            </div>
          </div>
          <div className="hs__projects-container_groupA">
            <div className="hs__projects-container_project">
              <Article imgUrl={zombie} 
              title="Run Doggo"
              tools="JavaScript | CSS"
              description="Join Russel, the intrepid canine from Canada, as he tries to escape the creatures of the night and make it back home in this 2D JavaScript game." />
              <div className="hs__projects-container_article-content">
                <a href="https://github.com/devSoni108/run-doggo" target="_blank"><p>View Code</p></a>
                <a href="https://run-doggo.netlify.app/" target="_blank"><p>Play Game Using Keyboard</p></a>
              </div>
            </div>
          </div>
          <div className="hs__projects-container_groupA">
            <div className="hs__projects-container_project">
              <Article imgUrl={raag} 
              title="Open AI Raag App"
              tools="Python | OpenAI"
              description="Discover the Magic of Hindustani Classical Music: Explore raags and taals with ease using our powerful web based application." />
              <div className="hs__projects-container_article-content">
                <a><p>Project Ongoing</p></a>
                <a><p>Coming Soon</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects