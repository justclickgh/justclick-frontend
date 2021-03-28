import './App.css'
import HomePage from "./ui/views/home";
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import Login from './ui/views/login';
import SignUp from './ui/views/registration';
import About from './ui/views/about';
import DashBoard from './ui/views/dashnoard';
import NoMatch from './ui/views/noMatch';
import PaystackHookExample from './ui/views/payment/pay-hook';
import creativePersonDashboard from './ui/views/creativePersonDashboard';
import { BackTop } from 'antd';
import MainJobsPage from '../src/ui/views/jobs/index'
import TopFreeLancersPage from './ui/views/top-freelancers';
import GraphicDesignServicePage from './ui/views/graphicDesignServicePage';
import PhotographyServicePart from './ui/views/photographyServicePart';
import Accets from './ui/views/assets';
import AssetOwnerDashbard from './ui/views/assetOwnerDashboard';
import EventPlanningServicePage from './ui/views/eventPlanningServicePage';
import AboutUs from './ui/views/aboutUs';
import ContactUs from './ui/views/contactUs';
import TermaAndConditions from './ui/views/termsAndConditions';
import DevelopmentServicePage from './ui/views/developmentServicePage';
import { UpOutlined } from '@ant-design/icons';


const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: 'green',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};
function App() {
  const getCurUserType = ()=>{
    let user_type = null
    try {
      user_type =  JSON.parse(localStorage.getItem('user_type'))
    } catch (error) {
      user_type  = null
    }
    console.log(user_type);
    return user_type
  }

  const user_dashborad = ()=>{
    const user_type = getCurUserType()
    console.log(user_type);

    if(user_type === "is_freelancer"){
      return "/freelancer-dashboard";
    }else if(user_type ==="normal_user"){
      return "/user-dashboard";
    }else{
     return"/user-dashboard"
    }
  }
  
  return (
    <Router>
    <div className="">
    <BackTop>
      <div style={style}><UpOutlined style = {{fontSize:"1.3rem"}} /></div>
    </BackTop>
     <Switch>
       <Route exact path = "/" component = {HomePage} />
       <Route path = "/jobs" component = {MainJobsPage} />
       <Route path  = "/assets" component = {Accets}/>
       <Route path  = "/about-us" component = {AboutUs}/>
       <Route path  = "/contact-us" component = {ContactUs}/>
       <Route path  = "/term-and-conditions" component = {TermaAndConditions}/>
       <Route path = "/services/graphic-design" component = {GraphicDesignServicePage} />
       <Route path = "/services/mobile-and-web-developement" component = {DevelopmentServicePage} />
       <Route path = "/services/photography" component = {PhotographyServicePart} />
       <Route path = "/services/event-planning" component = {EventPlanningServicePage} />
       <Route exact path = "/login" component = {Login} />
       <Route path = '/top-freelancers' component = {TopFreeLancersPage}/>
       <Route exact path = "/signup" component = {SignUp} />
       <Route exact path = "/about" component = {About} />
       <Route  path = "/user-dashboard" component = {DashBoard} />
       <Route  path   = "/freelancer-dashboard" component = {creativePersonDashboard}/>
       <Route  path   = "/asset-owner-dashboard" component = {AssetOwnerDashbard}/>
       <Route  path   = "/dashboard" render = {()=>{
         window.location = user_dashborad()
       }}/>
       <Route path = "/pay" component ={PaystackHookExample} />
        <Route component={NoMatch} /> 
     </Switch>
    </div>
    </Router>
  );
}

export default App;
