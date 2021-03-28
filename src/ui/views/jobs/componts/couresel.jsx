import { Carousel } from 'antd';
import '../styles/couresel.css';

import React from 'react'
import CoureselItem from './couresel-item';

const Couresel = () => {

// const contentStyle = {
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
//   };

    return (
        <Carousel autoplay  effect="fade">
        <div>
         <CoureselItem link = "/services/graphic-design" className = "item-1" title = "Get your job done From the confort of your home"  />
        </div>
        <div>
        <CoureselItem link = "/services/photography" className = "item-2" title = "App & Website development"  />
        </div>
        <div>
        <CoureselItem link = "/services/mobile-and-web-developement" className = "item-3" title = "Great skill set to get job done"   />
        </div>
        <div>
        <CoureselItem link = "/services/event-planning" className = "item-4"title = "Getbest creative people for yor job"  />
        </div>
      </Carousel>
    )
}

export default Couresel
