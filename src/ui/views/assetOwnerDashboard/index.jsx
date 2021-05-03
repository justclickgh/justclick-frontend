import React, { useEffect, useState } from 'react'
import './styles/index.css'
import { Switch, Route, useHistory, withRouter } from 'react-router-dom'
import StatisticsPage from './components/statistics'
import AssetsPage from './components/aseets-page'
import EarningsPart from './components/earnings-part'
import { connect } from 'react-redux'
import { fetchCurrentUserAsset } from '../../../redux/actions/current_asset_user_info_actions'
import { Avatar, Button, Divider, Drawer, Layout, Menu, message, notification, Popconfirm } from 'antd'
import logo from '../../../assets/images/logo-2.webp'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { MenuOutlined, UserOutlined } from '@ant-design/icons'

const AssetOwnerDashbard = ({ match, fethAssets }) => {
    useEffect(() => {
        fethAssets()
    }, [fethAssets])
    const history = useHistory()

    const confirm = () => {
        localStorage.removeItem('loggedIn')
        localStorage.removeItem('authToken')
        message.success("You have succesfully logged out")

        notification.close("Asds")
        notification.success({
            message: "Logged out",
            description: "You have succesfully logged out"
        })
        history.push('/login', { next: match.url })

    }

    const [state, setState] = useState({
        drawer_open: false
    })

    const toggleDrawer = () => {
        setState({
            ...state,
            drawer_open: !state.drawer_open
        })
    }

    return (

        <Layout>
            <Drawer onClose={toggleDrawer} placement="left" visible={state.drawer_open}  >
                <img width="75%" className="logo" src={logo} alt="" srcset="" />
                <Menu style={{ border: "none" }} id="side-bar" mode="vertical"  >


                    <Divider />
                    <Link to="/" ><p className="pl-3" >Home</p></Link>
                    <Divider />
                    <Menu.Item key="1" >

                        <Link to="/asset-owner-dashboard">
                            Statistics
                     </Link>
                    </Menu.Item>

                    <Menu.Item key="2" >
                        <Link to="/asset-owner-dashboard/assets">
                            Assets
                     </Link>
                    </Menu.Item>
                    <Menu.Item key="3" >
                        <Link to="/asset-owner-dashboard/earnings">
                            Earnings
                </Link>
                    </Menu.Item>
                </Menu>


            </Drawer>

            <Layout className="site-layout">
                <Layout.Header style={{ backgroundColor: "#fff" }} >
                    <Row>
                        <Col xs="2" sm="2" >
                            <Button
                                onClick={toggleDrawer}

                            ><MenuOutlined /></Button>
                        </Col>
                        <Col className="ml-auto" xs="2" sm="1">
                            <Button
                                onClick={() => {
                                    notification.open(
                                        {
                                            message: "Thomas Sarpong",
                                            description: <div>
                                                <Row>
                                                    <Col sm="12">
                                                        <hr />
                                                        <Link to = "/user-dashboard/profile">
                                                            <Button style={{ width: "100%", border: "none" }} > Profile </Button>

                                                        </Link>
                                                        <hr />
                                                    </Col>

                                                    <Col sm="12">
                                                        <p> saprongthomas05@gmail.com <span className="ml-5" >
                                                            <Popconfirm placement="topLeft" title="Are you sure you want to logout?" onConfirm={() => { confirm() }}
                                                                okText="Yes" cancelText="No">
                                                                <Button style={{ borderColor: "red", color: "red" }} > Logout </Button>
                                                            </Popconfirm>

                                                        </span> </p>

                                                        <hr />
                                                    </Col>
                                                </Row>
                                            </div>
                                        }
                                    )
                                }}
                                shape="circle"
                                style={{ border: "0" }}
                            >
                                <Avatar icon={<UserOutlined />} size={40} shape="circle" />


                            </Button>
                        </Col>
                    </Row>



                </Layout.Header>
                <Layout.Content>



                    <Switch  >
                        <Route path={`${match.url}/assets`} component={AssetsPage} />
                        <Route path={`${match.url}/earnings`} component={EarningsPart} />
                        <Route path={`${match.url}`} component={StatisticsPage} />

                    </Switch>





                </Layout.Content>

            </Layout>
        </Layout>
    )
}

const mapStateToPRops = state => {
    return {
        assets: state.currentUserAssets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fethAssets: () => dispatch(fetchCurrentUserAsset())
    }
}
export default connect(mapStateToPRops, mapDispatchToProps)(withRouter(AssetOwnerDashbard))
