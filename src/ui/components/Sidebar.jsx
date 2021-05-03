import axios from 'axios'
import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo-2.webp";
import Input from "./Input";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { login } from '../../redux/actions/login_actions'
import { useForm } from '../../utils/hooks/use_form'
import { message, Spin } from "antd";
import { useHistory } from "react-router-dom";
import { assetOwenrPath, freelancerinPath, loginPath } from '../../utils/network_utils/endpoints';

const Sidebar = ({ location, loginData }) => {
  const [values, handleChange] = useForm({
    email: '',
    password: ""
  })
  const [state, setState] = useState({
    normal_user: true,
    freelancer: false,
    asset_owner: false,
    loading: false,
    success: false
  })
  let history = useHistory()


  const handleRadioFreelancerChange = e => {
    setState({
      ...state,
      freelancer: true,
      asset_owner: false,
      normal_user: false
    })
  }


  const handleRadioAssetOwnerChange = e => {
    setState({
      ...state,
      freelancer: false,
      asset_owner: true,
      normal_user: false
    })
  }
  const handleRadioNormailUserChange = e => {
    setState({
      ...state,
      freelancer: false,
      asset_owner: false,
      normal_user: true
    })
  }

  const getUrl = (user_type = state.normal_user) => {
    let path = null
    if (state.normal_user) {
      path = loginPath
    }
    else if (state.freelancer) {
      path = freelancerinPath
    } else if (state.asset_owner) {
      path = assetOwenrPath
    }
    return path
  }

  const store_user_type = (user_type) => {
    switch (user_type) {
      case 'is_assset_owner':
        return 'asset_owner'
      case "is_freelancer":
        return 'freelancer'
      default:
        return 'normal_user'
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      email: values.email,
      password: values.password
    }

    const config = {
      headers: {
        "Content-Type": 'application/json'
      }
    }
    // login(data)
    setState({
      ...state,
      loading: true
    })
    axios.post(
      getUrl(), data, config
    ).then(res => {

      console.log(res.data)
      message.success("You have sussessfully logged in")

      localStorage.setItem('user_tpe', JSON.stringify(store_user_type(res.data.user_type)))
      localStorage.setItem('authToken', JSON.stringify(res.data.user.token))
      localStorage.setItem('loggedIn', JSON.stringify(true))
      localStorage.setItem('userData', JSON.stringify(res.data.user.user))
      setState({
        ...state,
        success: true,
        loading: false
      })
      history.push("/")
      let next = "/"
      if (location.states.next) {
        console.log("No");
        console.log(location.state.next.pathname);
        next = location.state.next.pathname

      }
      history.push(next)





    }).catch(error => {
      setState({
        ...state,
        loading: false
      })
      if (error.response) {
        if (error.response.status === 400)
          message.error("Login failed")
        else
          message.error(error.response.data.detail)


      } else if (error.request)
        message.error("Network error")

    })
  }



  return (

    <Container id="register">
      {/* {console.log(location.state.next.pathname)} */}
      {/* {handleSuccesRedirect()} */}
      <Spin spinning={state.loading} tip="loading" >
        <div style={{ textAlign: "center" }} className="header-part">

          <LogoWrapper>

            <img src={logo} alt="" />
          </LogoWrapper>
        </div>

        <div >
          <p style={{ color: "red" }} >{loginData.message !== "" ? loginData.message : ""}</p>
        </div>
        <RadioBtn>
          <h5 className="text-center py-2" >Login as</h5>
          <input checked={state.normal_user} onChange={handleRadioNormailUserChange} type="radio" className="radio" /><span>Normal User</span>
          <input checked={state.freelancer} onChange={handleRadioFreelancerChange} type="radio" className="radio" /><span>Freelancer</span> <br />
          <input className="pl-5 radio" checked={state.asset_owner} onChange={handleRadioAssetOwnerChange} type="radio" /><span>Asset Owner</span>
        </RadioBtn>
        <Form onSubmit={handleSubmit} >
          <Input onChange={handleChange} value={values.email} name="email" type="email" placeholder="Enter email" />
          <Input onChange={handleChange} value={values.password} name="password" type="password" placeholder="Password" />
          <button disabled={loginData.loading} >{state.loading ? "Loading ..." : 'Log in'}</button>

          <terms>By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service</terms>

          <h4>Don't have an account?<Link to="/signup"> Sign up </Link></h4>
          <p>Move back <Link to="/"> Home</Link></p>

        </Form>

      </Spin>
    </Container>
  );
};




const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;

  button{
    width: 110px;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    background: linear-gradient(to right,#062fd4,#183d6e);
    text-align: center;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  
    margin-right: 30px;
    align-items: center;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    transition: all 0.2s ease-in;
    &:hover {
    transform: translateY(-3px);
    };
  }

  terms{
    padding: 0 1rem;
    text-align: center;
    font-size: 15px;
    color: #000000;
    font-weight: 500;
    margin-top: 50px;
  }

`;



const RadioBtn = styled.div`
Padding: 10px;
cursor: pointer;
background: transparent;
position: relative;
color: #000000 ;
font-weight: 300;

span{
  margin-right: 45px;
}
`


const LogoWrapper = styled.div`
  img {
    height: 5rem;
    text-aligned:center;
  }

  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }

  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }


  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

  }

`;
const mapStateToProps = (state) => {
  return {
    loginData: state.login
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
