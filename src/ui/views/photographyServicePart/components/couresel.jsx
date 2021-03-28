import React from 'react'

import { Carousel } from 'antd';
import CoureselItem from './couresel-item';



const Couresel = () => {


    return (
        <div>
            <Carousel autoplay effect="fade">
                
            <div>
            <CoureselItem
            paragraph = {`Interior photography is almost entirely about solving problems: light, colour, reflections, space and time will all seem 
                            to conspire against you. Sometimes, but not often, natural light and a simple composition is all that's needed. Having the
                            right equipment is going to help you manage some of these problems.`}
            className = "item-10" title = "Interior photography" />
            </div>
            <div>
             <CoureselItem
             paragraph = {`Food photography is a still life photography genre used to create attractive still life photographs of food. It is a 
                            specialization of commercial photography, the products of which are used in advertisements, magazines, packaging, 
                            menus or cookbooks.`}
             className = "item-9" title = "Food photography" />
            </div>
            <div>
             <CoureselItem
             paragraph ={ `. Portrait photographers take pictures of individuals or groups of people and usually work in their own studios. 
Photographers who specialize in weddings, religious ceremonies, or school photographs may work on location.`}
             className = "item-11" title = "  Portrait photographers" />
            </div>
            <div>
             <CoureselItem
             paragraph =    {`Event photographers are simply professional photographers armed with the skills and equipment to capture emotions, 
reactions and memories in high-pressure environments. They work in environments where they need to think on their feet
 to respond to changes in lighting, event agendas and the needs of the client.`}
             className = "item-12" title = "  Event photographers" />
            </div>
            <div>
             <CoureselItem
             paragraph = {` Documentary Photography  In it’s most narrow definition, documentary photography is the practice of making a
 photograph which is an accurate representation of its subject.Documentary photographers, like photojournalists 
and photojournalistic images, are expected to capture the world or everyday life, as it exists, without stage managing
 or directing or editing the scene.`}
             className = "item-5" title = " Documentary Photography" />
            </div>
            <div>
             <CoureselItem
             paragraph = {`Aerial photographers travel in planes or helicopters to capture photographs of buildings and landscapes. 
They often use cameras with gyro stabilizers to counteract the movement of the aircraft and ensure high-quality images. `}
             className = "item-6" title = "Aerial photographers" />
            </div>
            <div>
             <CoureselItem
             paragraph = {` Commercial and industrial photographers take pictures of various subjects, such as buildings, models, merchandise,
                        artifacts, and landscapes. These photographs, which frequently are taken on location, are used for a variety of 
                        purposes, including magazine covers and images to supplement analyses of engineering projects.`}
             className = "item-7" title = "Commercial and industrial photographers" />
            </div>
            <div>
             <CoureselItem
             paragraph = {`Corporate photographers produce visual images for corporate-based clients and companies, including marketing 
campaigns, headshots, portraits or group pictures for both inside and outside the office space.`}
             className = "item-8" title = " Corporate photographers" />
            </div>
      
        </Carousel>
            
        </div>
    )
}

export default Couresel

