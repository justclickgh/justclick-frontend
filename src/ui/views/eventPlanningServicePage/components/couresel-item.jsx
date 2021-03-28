import { Button } from 'antd'
import React from 'react'
import "../styles/couresel.css"

const CoureselItem = ({title,paragraph,className}) => {
    return (
        <div className = {`${className} wrapper`}>
            <div className="overley">   

                <div className="inner2 ml-4">
                <div className="top-part px-4">
                    <h2 >{title}</h2>
                </div>
                <div className="top-part2 px-4 my-2 " >
                    <p style = {{color:"white"}} >{paragraph}</p>
                </div>
                <div className="footer ml-4">
                     <Button href = "/services/event-planning/all-jobs"  id = "footer-btn" className = "mr-1"     style = {{backgroundColor:" rgb(70, 170, 70)",color:"#fff",width:"300px",height:"45px",paddingTop:".5em"}}  shape = "round" >See Our Best works</Button>
                </div>
                </div>

            </div>

            
        </div>
    )
}

export default CoureselItem
