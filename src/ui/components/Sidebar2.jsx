import React,{useState} from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo-2.webp";
import Input from "./Input";
import {Link, Redirect} from 'react-router-dom'
import {useForm} from '../../utils/hooks/use_form'
import { connect } from "react-redux";
import { register } from "../../redux/actions/registration_action";
import {creativePersonRegistrationPath, userRegistrationPath } from "../../utils/network_utils/endpoints";
import {  message, Spin } from "antd";
const Sidebar2 = ({register,registerationData}) => {
  const [isClent,setIsClent] =  useState(false)
  const [values,handleChange] = useForm({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    password_confirm:""
  })
  const getPath = ()=>{
    if(isClent){
      return userRegistrationPath
    }
    else{
      return creativePersonRegistrationPath
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const data = {
      first_name:values.first_name,
      last_name:values.last_name,
      email:values.email,
      password:values.password,
      password_confirm:values.password_confirm
    }
    register(data,getPath())
 
  }
  const handleSuccess =()=>{
    if(registerationData.success){
      console.log('Success');
        message.success('You have registered succesfully')
       return <Redirect to= '/login'/>
    }
  }
  const handleErrorMessage = ()=>{
    if(registerationData.failed  && registerationData.errorMessage !== "" ){
      message.error(registerationData.errorMessage)
    }
  }
  const handleRadioChange = ()=>{
    setIsClent(!isClent)
  }
  const handleReset = ()=>{
    if(registerationData.success || registerationData.failed){
      values.first_name = ""
      values.last_name = ""
      values.email = ""
      values.password = ""
      values.password_confirm = ""
    }
  }
  console.log(registerationData)
  return (
    
    <Container id="register">
      <Spin spinning = {registerationData.loading} tip = "loading">
        {handleReset()}
      {handleSuccess()}
      {handleErrorMessage()}
      <div style = {{textAlign:"center"}} className="header-part">
        
        <LogoWrapper>
          
            <img src={logo} alt="" />
          </LogoWrapper>
     </div>
      
      <RadioBtn>
        <input checked = {!isClent}   onChange = {handleRadioChange}  type="radio" className="radio"/><span>Creative Person</span>
        <input checked = {isClent}  onChange = {handleRadioChange}  type="radio" className="radio"/><span>Client</span>
      </RadioBtn>

  
    


    <Form onSubmit = {handleSubmit} >
        <Input  onChange = {handleChange} value = {values.first_name}   name = "first_name" placeholder="First Name" />
        <div className="error">
          {registerationData.first_name_error.map(error=>error)}
        </div>
        <Input onChange = {handleChange}  value = {values.last_name}  name = "last_name" placeholder="Last Name" />
        <div className="error">
          {registerationData.last_name_error.map(error=>error)}
        </div>
        <Input onChange = {handleChange}  value ={values.email}  name = "email" type="email" placeholder="Email" />
        <div className="error">
          {registerationData.email_error.map(error=>error)}
        </div>
        <Input onChange = {handleChange}  value = {values.password}  name = "password" type="password" placeholder="Password" />
        <div className="error">
          {registerationData.password_error.map(error=>error)}
        </div>
        <Input onChange = {handleChange}  value = {values.password_confirm}  name = "password_confirm" type="password" placeholder="Confirm Password" />
        <div className="error">
          {registerationData.password_confirm_error.map(error=>error)}
        </div>
        <button className=""disabled = {registerationData.loading} >{registerationData.loading?"Loading ...":'Register'}</button>
      </Form>  


      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>

        <h4>Have an account already? <Link to="/login">Log in</Link></h4>
          <p className = "text-center" >Move back <Link to="/"> Home</Link></p>

      </div>

     
      </Spin>
    </Container>
  );
};




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


const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #000000;
  font-weight: 500;
`;


const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #00000;
    margin-bottom: 2rem;
  }


  button {
    width: 50%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    background: linear-gradient(to right,#062fd4,#183d6e);
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    margin: 20px auto;
    text-align: center;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  
  }

`;

const LogoWrapper = styled.div`
  img {
    height: 5rem;
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
function mapStateToProps(state) {
  return {
    registerationData: state.register
  };
}
function mapDispatchToProps(dispatch) {
  return {
    register:(data,path)=>dispatch(register(data,path))
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Sidebar2);
