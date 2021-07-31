import { RightOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import { Link } from 'react-router-dom'
import '../style/projects-part.css'

const PhotographyProjectsPart = () => {
    // const [state, setstate] = useState()
    return (
        <div className = "my-5">
            <div className="top-part my-2 container" >
                <h2 >
                    Top Photographers
                </h2>

                <Link>
                    <small style = {{color:"green",lineHeight:"0"}} >View All <RightOutlined  style = {{color:"green",lineHeight:"0",fontSize:"1rem"}}/> </small>
                </Link>
            </div>

            <div className="flex-scroll-x container">
               <Link>
                <Card
                className = "mx-2"
                        hoverable
                        style = {{width:"280px"}}
                        
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
               </Link>
               <Link>
                <Card
                className = "mx-2"
                        hoverable
                        style = {{width:"280px"}}
                        
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
               </Link>
               <Link>
                <Card
                className = "mx-2"
                        hoverable
                        style = {{width:"280px"}}
                        
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
               </Link>
               <Link>
                <Card
                // hidden
                className = "mx-2"
                        hoverable
                        style = {{width:"280px"}}
                        
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
               </Link>
         
               
            </div>
            
        </div>
    )
}

export default PhotographyProjectsPart
