import { Card } from 'antd'
import React from 'react'


const CustomCard = ({image,body,title,icon}) => {
    return (
        <div className = "px-5" >
          
          <Card style = {{height:"490px"}} className = "my-card  border: 0 " >
            <Card.Img width = "80%" style= {{padding:"1em"}} variant="top" src={image} />
            <Card.Body>
                    <Card.Title  > {icon}  {title}</Card.Title>
                <Card.Text>
               {body}
                </Card.Text>
                {/* <Button variant="">Go somewhere</Button> */}
            </Card.Body>
            </Card>
         
        </div>
    )
}
export const CustomNoImageCard = ({body,title,icon,img}) => {
    return (
        <div >
          
          <Card cover = {<img width = "98%" alt = "./" src= {img} />}   style = {{height:"460px"}} className = "my-card  border: 0 " >

            <Card.Meta title = {
                <>
                <span>{icon}</span>  <span>{`${title}`}</span>
                </>
            } description = {`${body}`} />
            </Card>
         
        </div>
    )
}
export default CustomCard
