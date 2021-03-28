import React from 'react'

import { Carousel } from 'antd';
import CoureselItem from './couresel-item';



// import React from 'react'

// const CoureselContent = ({image}) => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default CoureselContent



const Couresel = () => {


    return (
        <div>
            <Carousel autoplay effect="fade">
                
            <div>
            <CoureselItem
            paragraph = "nsectetur adipisicing elit. Accusantium cum fugit saepe neque animi, voluptas nobis natus unde deserunt corporis voluptatem rem! Sed quam blanditiis aspernatur laboriosam minus voluptatum libero?"
            className = "item-1" title = "Experience the best photograpgy services" />
            </div>
            <div>
             <CoureselItem
             paragraph = "nsectetur adipisicing elit. Accusantium cum fugit saepe neque animi, voluptas nobis natus unde deserunt corporis voluptatem rem! Sed quam blanditiis aspernatur laboriosam minus voluptatum libero?"
             className = "item-2" title = "Best photography services with great picture" />
            </div>
            <div>
             <CoureselItem
             paragraph = "nsectetur adipisicing elit. Accusantium cum fugit saepe neque animi, voluptas nobis natus unde deserunt corporis voluptatem rem! Sed quam blanditiis aspernatur laboriosam minus voluptatum libero?"
             className = "item-3" title = "COvers all events that are provided" />
            </div>
            <div>
             <CoureselItem
             paragraph = "nsectetur adipisicing elit. Accusantium cum fugit saepe neque animi, voluptas nobis natus unde deserunt corporis voluptatem rem! Sed quam blanditiis aspernatur laboriosam minus voluptatum libero?"
             className = "item-4" title = "Excellence services from a team of highly qualified photographers" />
            </div>
        </Carousel>
            
        </div>
    )
}

export default Couresel

