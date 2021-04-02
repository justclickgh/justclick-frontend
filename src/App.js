import './App.css'
import HomePage from "./ui/views/home";
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import Login from './ui/views/login';
import SignUp from './ui/views/registration';
import About from './ui/views/about';
import NoMatch from './ui/views/noMatch';
import PaystackHookExample from './ui/views/payment/pay-hook';
import { BackTop } from 'antd';
import MainJobsPage from '../src/ui/views/jobs/index'
import TopFreeLancersPage from './ui/views/top-freelancers';
import GraphicDesignServicePage from './ui/views/graphicDesignServicePage';
import PhotographyServicePart from './ui/views/photographyServicePart';
import Accets from './ui/views/assets';
import EventPlanningServicePage from './ui/views/eventPlanningServicePage';
import AboutUs from './ui/views/aboutUs';
import ContactUs from './ui/views/contactUs';
import TermaAndConditions from './ui/views/termsAndConditions';
import DevelopmentServicePage from './ui/views/developmentServicePage';
import { UpOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { setUserType } from './redux/actions/app_state_types';
import { useCallback, useEffect } from 'react';
import { getLocalUserType } from './utils/local_objects/loacal_storage';
import ProtectedDashboardRoutes from './ui/protected_dashboard_routes'
import AssetOwnerRegistrationPage from './ui/views/asset_owner_registration_page';

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







function App({appState,setUserType}) {
  const getUserType =useCallback( ()=>{
    
    let userType = appState.userType
    if(userType === null){
      userType  = getLocalUserType()
      if(userType === null){
        return null
      }
      setUserType(userType)
    }
    return userType
  },[appState.userType,setUserType])


useEffect(() => {
  getUserType()
}, [getUserType])



  
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
        <Route exact path = "/asset-owner-register" component = {AssetOwnerRegistrationPage} />
       
       <Route path = "/dashboard"  >
         <ProtectedDashboardRoutes />
       </Route>

   
       <Route path = "/pay" component ={PaystackHookExample} />
        <Route component={NoMatch} /> 
     </Switch>
    </div>
    </Router>
  );
}

const mapStateToProps = state=>{
  return {
    appState:state.appState
  }
}

const mapDispatchToProps = dispatch=>{
  return {
      setUserType :(type)=> dispatch(setUserType(type))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
