import { Card, Image, Button, Divider, Pagination, Input, Empty } from 'antd'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons'
import Banner from './banner'
import { connect } from 'react-redux'
import { fetchAllAssets } from '../../../../redux/actions/asset_actions'
import { Link } from 'react-router-dom'


const image2 = "https://justclick-backend-statics.s3.amazonaws.com/fe-statics/ui-2.webp"
const image3 = "https://justclick-backend-statics.s3.amazonaws.com/fe-statics/ui-3.webp"
export const codes = [
    {
        "id": "1",
        'title': "Sample tile of source code",
        'image': "https://justclick-backend-statics.s3.amazonaws.com/fe-statics/ui-1.webp",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, dolor dolore adipisci nemo delectus expedita perspiciatis sit. Facere unde fuga architecto voluptatum? Reprehenderit nemo, sunt iusto corrupti ab quasi excepturi!",
        type: "MOBILE APPLICATION"
    },
    {
        "id": "2",
        'title': "Sample tile of source code",
        'image': image2,
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, dolor dolore adipisci nemo delectus expedita perspiciatis sit. Facere unde fuga architecto voluptatum? Reprehenderit nemo, sunt iusto corrupti ab quasi excepturi!",
        type: "MOBILE APPLICATION"
    },
    {
        "id": "3",
        'title': "My own codes here",
        'image': image3,
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, dolor dolore adipisci nemo delectus expedita perspiciatis sit. Facere unde fuga architecto voluptatum? Reprehenderit nemo, sunt iusto corrupti ab quasi excepturi!",
        type: "WEB APPLICATION"
    },
    {
        "id": "4",
        'title': "Sample tile of source code",
        'image': "https://justclick-backend-statics.s3.amazonaws.com/fe-statics/ui-1.webp",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, dolor dolore adipisci nemo delectus expedita perspiciatis sit. Facere unde fuga architecto voluptatum? Reprehenderit nemo, sunt iusto corrupti ab quasi excepturi!",
        type: "MOBILE APPLICATION"
    },
    {
        "id": "5",
        'title': "Sample tile of source code",
        'image': image2,
        "description": "It is an honor adipisicing elit. Tempore, dolor dolore adipisci nemo delectus expedita perspiciatis sit. Facere unde fuga architecto voluptatum? Reprehenderit nemo, sunt iusto corrupti ab quasi excepturi!",
        type: "WEB APPLICATION"
    },
]

const SourceCodes = ({ match, assetsData, fetchAssets }) => {
    const page_size = 2
    const [state, setState] = useState({
        page_items: codes.slice(0, page_size),
        filtered_data: codes
    })
    useEffect(() => {
        fetchAssets()
    }, [fetchAssets])
    return (
        <div>
            <Banner />
            <div className="bg-light ">
                <Divider />
                <Container>

                    <div className="text-center mt-5">
                        <h1> <h1>Source Codes</h1> </h1>
                    </div>
                    <div className="my-3">
                        <Input.Search onChange={(e) => {
                            const filtered = codes.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())
                                || item.description.toLowerCase().includes(e.target.value.toLowerCase())
                                || item.type.toLowerCase().includes(e.target.value.toLowerCase()))
                            setState({
                                filtered_data: filtered,
                                page_items: filtered.slice(0, page_size)
                            })
                        }} />
                    </div>
                    <Divider />

                    <Row>
                        {assetsData.assets.filter(asset => asset.asset_type === "Source Code").length === 0 ? <Empty className="mx-auto" /> : state.page_items.map(code => <Col key={code.id} className="my-2" xs="12" sm="6" lg="4" >
                            <Card hoverable cover={<Image src={code.image} />} >
                                <p>{code.title}</p>
                                <div style={{ width: "100%", height: "60px", overflow: "hidden" }}  >
                                    <Row>
                                        <Col xs="8" sm="8">
                                            <small style={{ textOverflow: "ellipsis" }} >{code.description}</small>

                                        </Col>

                                    </Row>
                                </div>
                                <hr />
                                <Row>
                                    <Col xs="8" sm="8" >
                                        <small>{`posted at: 12-12-2021`}</small> <br />
                                        <small>{`posted by: Thomas Sarpong`}</small>

                                    </Col>
                                    <Col xs="4" xl="4" sm="4" >
                                        <Row>
                                            <Col xs="6" sm="6" >
                                                <Link to={`${match.url}/${code.id}`}>
                                                    <Button style={{ borderColor: "green", padding: ".4em", border: "none" }} >
                                                        <EyeOutlined style={{ color: "green", fontSize: "1.2rem" }} /> <Divider type="vertical" />
                                                    </Button>
                                                </Link>


                                            </Col>


                                            <Col xs="5" sm="5" >
                                                <Button style={{ borderColor: "green", padding: ".4em", border: "none" }} >
                                                    <DownloadOutlined style={{ color: "green", fontSize: "1.2rem" }} />
                                                </Button>
                                            </Col>

                                        </Row>

                                    </Col>
                                </Row>






                            </Card>
                        </Col>)}

                    </Row>


                </Container>

            </div>
            <div className="container my-3">
                <Pagination total={state.filtered_data.length} pageSize={page_size}
                    onChange={(page, pageSize) => {
                        let next_page = page - 1
                        let start = (next_page * page_size)
                        setState({
                            ...state,
                            page_items: state.filtered_data.slice(start, start + page_size)
                        })
                    }}

                />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        assetsData: state.assets

    }
}



const mapDispatchToProps = dispatch => {
    return {
        fetchAssets: () => dispatch(fetchAllAssets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SourceCodes)
