import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/couresel.css"

const CoureselItem = ({ title, className, link }) => {
    return (
        <div className={`${className} wrapper`}>
            <div className="overley">

                <div className="inner">
                    <div className="top-part">
                        <h2>{title}</h2>
                    </div>
                    <div className="top-part2">
                        <h5>{title} {title} {title}</h5>
                    </div>

                    <div className="footer mt-5">
                        <Link to={link}>
                            <Button  className="mr-1" style={{ backgroundColor: " rgb(70, 170, 70)", color: "#fff", width: "300px", height: "45px", fontSize: "1rem", paddingTop: ".4em" }} shape="round" >Get Started</Button>

                        </Link>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default CoureselItem
