import React from 'react'
import { Layout, Menu, Divider, Drawer, Button, notification, Popconfirm } from 'antd';
import {
  UserOutlined,
  DashboardOutlined,
  EditOutlined,
  MoneyCollectOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Link, Route,Switch, withRouter} from 'react-router-dom'
import JobsPart from './components/jobs';
import ProfilePart from './components/profile';
import './assets/sideBar.css'
import Avatar from 'antd/lib/avatar/avatar';
import './assets/header.css'
import handleRedirect from '../../../utils/handle_redirect';
import { getCurUserJobs } from '../../../redux/actions/cur_user_jobs_actions';
import {getCurrentCreativeUser} from '../../../redux/actions/curent_creative_user_actions'
import { postJob } from '../../../redux/actions/job_actions';
import { connect } from 'react-redux';
import Earnings from './components/earnings';
import JobFeed from './components/job_feed';
import AppliedJobsPart from './components/user_jobs/applied_jobs';
import ApproveJobsPart from './components/user_jobs/approved_jobs';
import CompletedJobsPart from './components/user_jobs/completed_jobs';
import { fetchAcceptedJobs, fetchCompletedJobs, fetchPendingJobs } from '../../../redux/actions/cur_free_lancer_status_actions';
import { Col, Row } from 'react-bootstrap';


const logo = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/logo.jpeg'
const profile = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/profile.png'

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

class CreativePersonDashboard extends React.Component {
  state = {
    collapsed: false,
    visible: false,
    drawer_open:false
  };

  componentWillMount(){
    this.props.getJobs()
    this.props.getProfile()
    this.props.fetchPendingJobs()
    this.props.fetchAcceptedJobs()
    this.props.fetchCompletedJobs()
  }

confirm (){

}


  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  render() {
    // const { collapsed } = this.state;
    return (
      <>
      {handleRedirect(this.props.match.url)}
      <Layout style={{ minHeight: '100vh' }}>
        <Drawer
        placement = "left"
        visible = {this.state.drawer_open}
        onClose = {()=>{
          this.setState({
            ...this.state,
            drawer_open:false
          })
        }}
        >
            <Menu style = {{border:"none"}} theme="" defaultSelectedKeys={['1']} mode="inline">
                {/* <Avatar  size = {128}/> */}
                          <Link to ="/">
                            <img width = "100%" src={logo} alt="" srcset=""/>
                          </Link>
                <Divider/>
              <Menu.Item  key="1" icon={<DashboardOutlined />}>
                
                <Link to = "/dashboard" >Jobs Feed</Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<EditOutlined />} title="Jobs">
                <Menu.Item  key="3">  <Link to = "/freelancer-dashboard/jobs/applied" >Applied Jobs</Link></Menu.Item>
                <Menu.Item key="4"> <Link to = "/freelancer-dashboard/jobs/approved" >Approved</Link> </Menu.Item>
                <Menu.Item key="5"><Link to = "/freelancer-dashboard/jobs/completed" >Completed</Link></Menu.Item>
              </SubMenu>
              
              <Menu.Item key="6" icon = {<UserOutlined/>}   ><Link to = "/freelancer-dashboard/profile" >Profile</Link></Menu.Item>
              <Menu.Item key="7" icon = {<MoneyCollectOutlined/>}   ><Link to = "/freelancer-dashboard/earnings" >Earnings</Link></Menu.Item>
              
            </Menu>
        </Drawer>
        <Layout  className="site-layout">
          <Header
          
          
          className="header" style={{ padding: 0,backgroundColor:"white" }} >
            <Button
            onClick = {()=>{
              this.setState({
                ...this.state,
                drawer_open:true
              })
            }}
            className = "ml-5" ><MenuOutlined/> </Button>
          <Menu theme="" mode="horizontal" defaultSelectedKeys={['1']}>
            {/* <Menu.Item icon = {<SearchOutlined />} key="1">Search</Menu.Item>
            <Menu.Item icon = {<NotificationOutlined />}  key="2">Notification</Menu.Item>
             */}
            
          <div className="left flex">
            <div className="name mr-2 mt-1">
            Welcome <span style = {{fontStyle :"italic"}}> Thomas Sarpong</span> 
            </div>
         <Link onClick = {()=>{
                    notification.open(
            {
                message:"Thomas Sarpong",
                description:<div>
                    <Row>
                    <Col sm = "12">
                        <hr/>
                    <Button href = "/freelancer-dashboard/profile" style = {{width : "100%",border:"none"}} > Profile </Button>
                    <hr/>
                    </Col>
                    
                    <Col sm = "12">
                    <p> saprongthomas05@gmail.com <span className = "ml-5" >
                        <Popconfirm placement="topLeft" title="Are you sure you want to logout?" onConfirm={()=>{this.confirm()}}
                            okText="Yes" cancelText="No">
                            <Button style = {{borderColor:"red",color:"red"}} > Logout </Button>                            
                        </Popconfirm>
                        
                        </span> </p>
                    
                    <hr/>
                    </Col>
                    </Row> 
                </div>
            }
        )
         }} >
            <Avatar    className = "" src = {profile} />
            </Link>

          </div>

          </Menu>
          
          </Header>
          <Content style={{ margin: '0 16px' }}>
          
         
            <Switch>
            <Route path = {`${this.props.match.url}/jobs/applied`} component = {AppliedJobsPart} />
            <Route path = {`${this.props.match.url}/jobs/completed`} component = {CompletedJobsPart} />
            <Route path = {`${this.props.match.url}/jobs/approved`} component = {ApproveJobsPart} />
                <Route path = {`${this.props.match.url}/jobs`} component = {JobsPart} />
                <Route path = {`${this.props.match.url}/earnings`} component = {Earnings} />
                <Route  path = {`${this.props.match.url}/profile`} component = {ProfilePart} />
                <Route exact path = "" component = {JobFeed} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>JustClick ©2018 </Footer>
        </Layout>
      </Layout>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
      jobsData: state.curUserJob,
      allJobsData:state.jobs
  };
}
function mapDispatchToProps(dispatch) {
  return{
      getJobs : ()=>dispatch(getCurUserJobs()),
      postJob : (data)=>dispatch(postJob(data)),
      getProfile:()=>dispatch(getCurrentCreativeUser()),
      fetchPendingJobs:()=>dispatch(fetchPendingJobs()),
      fetchAcceptedJobs:()=>dispatch(fetchAcceptedJobs()),
      fetchCompletedJobs:()=>dispatch(fetchCompletedJobs())

  } ;
}
export default connect(mapStateToProps, mapDispatchToProps)( withRouter((CreativePersonDashboard)))