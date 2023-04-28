import React from 'react';
import './feature.css'

const Feature = ({ title, text }) => {
  return (
    <div className="hs__features-container__feature">
      <div className="hs__features-container__feature-title">
        <div />
          <h2>{title}</h2>
        </div>
        <div className="hs__features-container_feature-text">
          <p>{text}</p>
        </div>
    </div>
  )
};

export default Feature