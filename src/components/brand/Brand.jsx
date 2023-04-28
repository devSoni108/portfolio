import React from 'react';
import { aws, node, javascript, postgresql, figma } from './imports';
import './brand.css';

const Brand = () => {
  return (
      <div className='hs__brand section__padding'>
        <div>
          <img src={aws} alt='amazon web services' />
        </div>
        <div>
          <img src={javascript} alt='javascript' />
        </div>
        <div>
          <img src={node} alt='node' />
        </div>
        <div>
          <img src={postgresql} alt='postgresql' />
        </div>
        <div>
          <img src={figma} alt='figma' />
        </div>
      </div>
  )
}

export default Brand