import React from 'react';
import './article.css';

const Article = ({ imgUrl, title, description, tools }) => {
  return (
    <div className="hs__projects-container_article">
      <div className="hs__projects-container_article-image">
        <img src={imgUrl} alt="projects" />
      </div>
      <div className="hs__projects-container_article-content">
        <div>
          <h3>{title}</h3>
          <h4>{tools}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Article