import { Button, Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'


const CustomCard = ({ image, body, title, icon, butom_text, link }) => {
    return (
        <div className="px-5" >

            <Card style={{ height: "490px" }} className="my-card  border: 0 " >
                <Card.Img width="80%" style={{ padding: "1em" }} variant="top" src={image} />
                <Card.Body>
                    <Card.Title  > {icon}  {title}</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                    <Button variant="">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    )
}
export const CustomNoImageCard = ({ body, title, icon, img, bottonText, link }) => {
    return (
        <div >

            <Card cover={<img width="98%" alt="./" src={img} />} style={{ height: "460px" }} className="my-card  border: 0 " >

                <Card.Meta title={
                    <>
                        <span>{icon}</span>  <span>{`${title}`}</span>
                    </>
                } description={(
                    <>
                        <p>{body}</p>
                        <div

                            style={{ display: "flex", justifyContent: "center", marginTop: "4em" }}
                            className="bottom">
                            <Link className="text-center" to={link} >
                                <Button shape="round" style={{ width: "100%", color: "green", borderColor: "green" }} variant="">{bottonText}</Button>
                            </Link>
                        </div>


                    </>
                )} />
            </Card>

        </div>
    )
}
export default CustomCard
