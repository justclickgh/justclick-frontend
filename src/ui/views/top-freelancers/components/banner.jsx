import { Button } from 'antd'
import React from 'react'
import '../style/banner.css'
const Banner = () => {
    return (
        <div>
            <div className="banner-wrapper">
                <div className="banner-overlay">
                    <div className="inner">

                        <div className="banner-header">
                            <h1>Hire Top Freelancer for Your Project</h1>
                            <h3>Choose from the expertise available and get you job done</h3>
                        </div>
                        <div className="banner-body">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam error ratione architecto, enim quis perferendis minus iste harum illo, vel vitae illum temporibus deleniti voluptates asperiores velit ducimus numquam magnam!</p>
                        </div>

                        <div className="banner-footer">
                        <div className="footer">
                            <Button className = "mr-2"   size = "large"  style = {{backgroundColor:" rgb(70, 170, 70)",color:"#fff"}}  shape = "round" >Get Started</Button>
                            <Button size = "large"  style = {{backgroundColor:"#fff",color:" rgb(70, 170, 70)"}}  shape = "round" >Get Started</Button>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Banner
