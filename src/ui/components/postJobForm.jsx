import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo-2.webp";
import Input from "./Input";
import { Link, Redirect } from 'react-router-dom'
// import { useForm } from "../utils/hooks/use_from";
// import axios from 'axios'
// import { signupOwnerPath, signupRenterPath } from "../utils/endpoint";
// import { customSuccessToast } from "../utils/ui_utils/toast";

const PostJobForm = () => {
  // const [loading,setloading] = useState(false)
  // const [success,setSuccess]  = useState(false)
  // const [message,setMessage] = useState('')
  // const [isOwner,setIsOwner] =  useState(true)
  // const [values,handleChange] = useForm({
  //   first_name:"",
  //   last_name:"",
  //   email:"",
  //   phone:'',
  //   password:"",
  //   password_confirm:""
  // })
  // const handleSubmit = (e)=>{
  //   e.preventDefault()
  //   setloading(true)
  //   const data = {
  //     first_name:values.first_name,
  //     last_name:values.last_name,
  //     email:values.email,
  //     phone :values.phone,
  //     password:values.password,
  //     password_confirm:values.password_confirm
  //   }
  //   const config = {headers:{'Content-Type':'application/json'}}
  //   axios.post(isOwner?signupOwnerPath:signupRenterPath,data,config).then(res=>{
  //    setloading(false)
  //     setSuccess(true)
  //   }).catch(err=>{
  //    setloading(false)
  //     if(err.response){
  //       console.log(err.response);
  //       setMessage('Invalid credentials')
  //      // setFailed(true)

  //     }else if(err.request){

  //      // setFailed(true)
  //      setMessage('Network error, Check internet connection and try again')
  //     }
  //   })

  // }
  // const handleSuccess =()=>{
  //   if(success){
  //     console.log('Success');
  //      customSuccessToast('You have logged in succesfully')
  //      return <Redirect to= '/login'/>
  //   }
  // }
  // const handleRadioChange = ()=>{
  //   setIsOwner(!isOwner)
  // }
  return (
    <Container id="register">
      {/* {handleSuccess()} */}
      <LogoWrapper>
        <img src={logo} alt="" />
      </LogoWrapper>


      {/* <RadioBtn>
        <input checked ={isOwner}  onChange = {handleRadioChange} value ={isOwner}  type="radio" className="radio"/><span>Property Owner</span>
        <input checked ={!isOwner}  onChange = {handleRadioChange} value = {!isOwner} type="radio" className="radio"/><span>Renter</span>
      </RadioBtn> */}


      <RadioBtn>
        <input type="radio" className="radio" /><span>Creative Person</span>
        <input type="radio" className="radio" /><span>Client</span>
      </RadioBtn>



      {/* <Form onSubmit = {handleSubmit} >
        <Input  onChange = {handleChange} value = {values.first_name} name = "first_name" placeholder="First Name" />
        <Input  onChange = {handleChange} value = {values.last_name} name = "last_name" placeholder="Last Name" />
        <Input  onChange = {handleChange} value = {values.email} name = "email" type="email" placeholder="Email" />
        <Input  onChange = {handleChange} value = {values.phone} name = "phone" type="phonenumber" placeholder="Phone Number" />
        <Input  onChange = {handleChange} value  = {values.password} name = "password" type="password" placeholder="Password" />
        <Input  onChange = {handleChange} value = {values.password_confirm} name = "password_confirm" type="password" placeholder="Confirm Password" />
        <button className=""disabled = {loading} >{loading?"Loading ...":'Register'}</button>
      </Form>     */}

      <Form >
        <Input name="first_name" placeholder="First Name" />
        <Input name="last_name" placeholder="Last Name" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="phone" type="phonenumber" placeholder="Phone Number" />
        <Input name="password" type="password" placeholder="Password" />
        <Input name="password_confirm" type="password" placeholder="Confirm Password" />
        <button className="" >Register</button>
      </Form>


      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>

        <h4>Have an account already? <Link to="/login">Log in</Link></h4>
      </div>



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

export default PostJobForm;
