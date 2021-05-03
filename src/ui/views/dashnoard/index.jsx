import React, { useEffect, useState } from 'react'
import { Layout, Menu, Divider, Button, Drawer, Avatar, notification, message, Popconfirm } from 'antd';
import {
  DesktopOutlined,
  UserOutlined,
  EditOutlined,
  HomeOutlined,
  MenuOutlined,

} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Link, Route, Switch, useHistory, withRouter } from 'react-router-dom'
import JobsPart from './components/jobs';
import ProfilePart from './components/profile';
import './assets/sideBar.css'
import './assets/header.css'
import StatisticsPart from './components/statistics';
import { getAllPendingJobs, getCurUserJobs } from '../../../redux/actions/cur_user_jobs_actions';
import { postJob } from '../../../redux/actions/job_actions';
import { connect } from 'react-redux';
import { fetchJobStatistics } from '../../../redux/actions/user_jobs_statistocs_sctions';
import logo from '../../../assets/images/logo-2.webp'
import { getProfile } from '../../../redux/actions/cur_user_profile_action';
import { Col, Row } from 'react-bootstrap';
import PostJobPage from './components/post_job_form';




const { Content, Footer } = Layout;

const DashBoard = ({ getJobs, fetchJobStatistics, getAllPendingJobs, getCurrentUserProfile, match }) => {
  const history = useHistory()
  useEffect(() => {

    getJobs()
    fetchJobStatistics()
    getAllPendingJobs()
    getCurrentUserProfile()
  }, [getJobs, fetchJobStatistics, getCurrentUserProfile, getAllPendingJobs])
  const [state, setState] = useState({
    visible: false,
    loguotModalVisible: false
  })

  const handleVisibleChange = visible => {
    setState({ visible });
  };

  const confirm = () => {
    localStorage.removeItem('loggedIn')
    localStorage.removeItem('authToken')
    message.success("You have succesfully logged out")
    setState({
      ...state,
      loguotModalVisible: false
    })
    notification.close("Asds")
    notification.success({
      message: "Logged out",
      description: "You have succesfully logged out"
    })
    history.push('/login', { next: match.url })

  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
post_job_form
      <Drawer
        placement="left"
        onClose={() => { setState({ visible: false }) }}
        visible={(state.visible)} >
        <Menu style={{ border: "none" }} theme="light" defaultSelectedKeys={['1']} mode="inline">
          <img src={logo} alt="" srcset="" />
          <Divider />
          <Link to="/" ><p className="pl-3" >  <span className="pr-2" ><HomeOutlined style={{ fontSize: "1.1rem" }} /></span>  <span>Home</span></p></Link>

          <Divider />

          <Menu.Item key="1" icon={<DesktopOutlined />}>

            <Link to="/dashboard" >Statistics</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<EditOutlined />}><Link to="/dashboard/jobs" >Job</Link></Menu.Item>

          <Menu.Item key="3" icon={<UserOutlined />}><Link to="/dashboard/profile" >Profile</Link></Menu.Item>

        </Menu>

      </Drawer>
      <Layout className="site-layout">
        <Layout.Header style={{ backgroundColor: "#ffffff" }} >
          <Row>
            <Col xs="2" sm="2" >
              <Button onClick={handleVisibleChange}  ><MenuOutlined /></Button>
            </Col>

            <Col className="ml-auto" xs="2" sm="1">

              <Button onClick={() => {
                notification.open({
                  message: "Thomas Sarpong",
                  description: <div>
                    <Row>
                      <Col sm="12">
                        <Divider />
                      
                          <Button 
                          onClick = {()=>{
                            history.push('/dashboard/profile')
                          }}
                          style={{ width: "100%", border: "none" }} > Profile </Button>

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
                })
              }} shape="circle" style={{ border: "0" }} >
                <Avatar icon={<UserOutlined />} size={40} shape="circle" />

              </Button>
            </Col>
          </Row>

        </Layout.Header>
        <Content style={{ margin: '0 16px' }}>


          <Switch>
            <Route path={`${match.url}/jobs/post_job`} component={PostJobPage} />
            <Route path={`${match.url}/jobs`} component={JobsPart} />
            <Route path={`${match.url}/profile`} component={ProfilePart} />
            <Route exact path="" component={StatisticsPart} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>JustClick ©2018 </Footer>
      </Layout>
    </Layout>
  )
}


function mapStateToProps(state) {
  return {
    jobsData: state.curUserJob,
    allJobsData: state.jobs
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getJobs: () => dispatch(getCurUserJobs()),
    postJob: (data) => dispatch(postJob(data)),
    fetchJobStatistics: () => dispatch(fetchJobStatistics()),
    getAllPendingJobs: () => dispatch(getAllPendingJobs()),
    getCurrentUserProfile: () => dispatch(getProfile())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DashBoard))

