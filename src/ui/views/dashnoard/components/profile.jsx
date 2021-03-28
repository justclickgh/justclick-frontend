import { Breadcrumb, Button, Card,  Input,  Skeleton,Form, List, Divider, message, Spin } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React, {  useState } from 'react'
import { UserOutlined , MailOutlined} from '@ant-design/icons';
import { Col, Container, Row } from 'react-bootstrap';
import Modal from 'antd/lib/modal/Modal';
import { useForm } from '../../../../utils/hooks/use_form';
import {updateUserProfilePath,resetPasswordPath} from '../../../../utils/network_utils/endpoints'
import { connect } from 'react-redux';
import axios from 'axios'
import getAuthToken from '../../../../utils/get_auth_token';
import { Redirect } from 'react-router-dom';
import { getProfileSuccess } from '../../../../redux/actions/cur_user_profile_action';
const ProfilePart = ({userProfile,updateProfile}) => {
  const [values,handleChange] = useForm({
    email: userProfile.email,
    first_name:userProfile.first_name,
    last_name:userProfile.last_name,
    password:"",
    password_confirm:"",
    input_error:"",
    
  })


  const [state,setState] = useState({
    update_loading:false,
    passsword_reset_loading:false,
    field_error:false,
    error_messages:[]
  })
  const [visible,setVisible]  = useState(false)
  const [emailVisible,setEmailVisible]  = useState(false)
  const handleOk = ()=>{

  }
 const  handleEmailModalOk = ()=>{
    
  }
  const editProfile = e=>{
    
    e.preventDefault()
    const fd = new FormData()
    fd.append('first_name',values.first_name)
    fd.append('last_name',values.last_name)
    fd.append('email',values.email)
    
    const token = getAuthToken()
    if(token !== null){
        const config = {
            headers : {
                "Content-Type":'application/json',
                'Authorization':`Bearer ${token}`
            }}
            setState({
              ...state,
              update_loading:true
            })

            axios.patch( updateUserProfilePath,fd,config).then(res=>{
              updateProfile(res.data.data)
              message.success('Update profile successfull')
              handleEmailModalCancel()
               setState({
              ...state,
              update_loading:false
            })

            }).catch(error=>{
              if(error.response){
                message.error(error.response.data.detail)
              } else if(error.request){
                message.error("Network error")
              }
            })
                setState({
              ...state,
              update_loading:false
            })
          }else{
            message.error("Session expired")
            return <Redirect to = "/login"/>
          }
   

    

  }


  const resetPassword = e=>{
    e.preventDefault()
    const fd = new FormData()
    fd.append('password',values.password)
    fd.append('password_confirm',values.password_confirm)
    
    const token = getAuthToken()
    if(token !== null){
        const config = {
            headers : {
                "Content-Type":'application/json',
                'Authorization':`Bearer ${token}`
            }}
            axios.post(resetPasswordPath,fd,config).then(res=>{
              message.success('Password reset successful')
              handleCancel()
              
            }).catch(
                err=>{
                  if(err.response){
                    console.log(err.response);
                  } if(err.request){
                    message.error("Network error")
                  }
                }
            )
          }else{
            message.error("Session expired")
            return <Redirect to = "/login"/>
          }
  }
  const handleCancel = ()=>{
    setVisible(false)


  }
  const handleEmailModalCancel = ()=>{
    setEmailVisible(false)

  }
  const showEmailModal = ()=>{
    setEmailVisible(true)
  }
  const showModal =()=>{
      setVisible(true)
  }

//   const passwordValidateMessage = {
//   required:'${label} is required',
//   types:{
//     email:'${label} is not a valid email'
//   },
//   password_confirm:{
//     equal:'${label} must be the same as ${password}'
//   }
// }


  const changePasswordModal =  <Modal
          visible={visible}
          title="Reset password"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            
         
          ]}
        >
        <Form
        
        id = "password-form"
       layout="vertical"
    >
        <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password
        
        name = "password" value = {values.password} onChange = {handleChange}
         placeholder="Enter New Password" />
      </Form.Item>
       <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({getFieldValue }) => ({
            validator(_, value) {
              console.log(getFieldValue('password'));
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password name = "password_confirm" value = {values.password_confirm} onChange = {handleChange}  placeholder="Confirm password" />
      </Form.Item>
      <Button onClick = {resetPassword} shape = "round" style = {{color:"green",borderColor:"green",marginLeft:"7em",width:"200px"}} htmlType = "submit">Reset Password</Button>

    </Form>
        </Modal>




const changeEmailModal = <Modal
          visible={emailVisible}
          title="Title"
          onOk={handleEmailModalOk}
          onCancel={handleEmailModalCancel}
          footer={[
            <Button  style = {{color:"red", borderColor:"red" ,width:"100px"}} key="back" onClick={handleEmailModalCancel}>
              Close
            </Button>
          ]}
        >
          <Spin spinning = {state.update_loading} >
        <Form
       
    >
      <Form.Item 
      tooltip = {{ title:"Edit first name",icon: <UserOutlined/> }}
      label = "First name" >
        <Input  name = "first_name" value = {values.first_name} onChange = {handleChange} />
      </Form.Item>
      <Form.Item
      tooltip = {{ title:"Edit first name",icon: <UserOutlined/> }}
      label = "Last name" >
        <Input  name = "last_name" value = {values.last_name}  onChange = {handleChange}/>
      </Form.Item>
      <Form.Item
      name = {['profile','email']}
      rules = {[{type:'email'}]}
        label="Email Address"
        tooltip={{ title: 'Edit email address', icon: <MailOutlined /> }}
      >
        <Input   type = "email" name = "email" value ={values.email} onChange = {handleChange} />
      </Form.Item>
        
      
          <div style = {{width:"150px"}} className="mx-auto">
            {/* <button style = {{width:"100%",height:"50px",color:"green",border:".5px solid green",borderRadius:"10px",background:"white"}} type = "submit">Submit</button> */}
          <  Button onClick = {editProfile} shape = "round"  style = {{width:"100%",height:"50px",color:"green",borderColor:"green"}}  className="mx-auto text-center " htmlType = "submit">Submit</Button>

          </div>
        
      

    </Form>
    </Spin>
        </Modal>

    return (
        <div>
          {changeEmailModal}
          {changePasswordModal}
          {console.log(userProfile)}
              <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>Profile</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Container>
              <Card title = "User Profile" >
                <Spin spinning = {userProfile.loading} >
                    <Row>
                        <Col  xs = "12" sm = "12" className =  "text-center mb-5">
                            <Avatar size={128} icon={<UserOutlined />} />
                        </Col>
                    </Row>
                    <Divider/>
                      <List   >
                          <List.Item actions = {[
                                <UserOutlined style = {{fontSize:"1.5rem"}} />
                            ]}>
                              <Skeleton loading = {false} >
                                  <List.Item.Meta title = {`First name:`}  description = {userProfile.first_name}/>
                              </Skeleton>
                          </List.Item>
                          <List.Item actions = {[
                                <UserOutlined style = {{fontSize:"1.5rem"}} />
                            ]}>
                              <Skeleton loading = {false} >
                                  <List.Item.Meta title = {`Last name:`}  description = {userProfile.last_name}/>
                              </Skeleton>
                          </List.Item>
                          <List.Item actions = {[
                              <MailOutlined style = {{fontSize:"1.5rem"}} />
                            ]}>
                              <Skeleton loading = {false} >
                                  <List.Item.Meta title = {`Email:`}  description = {userProfile.email}/>
                              </Skeleton>

                          </List.Item>
                          
                          

                      </List>
                      <Divider/>
                      <Row>
                        <Col md = "7" lg = "9" className = "mb-2">
                            <Button  onClick = {showModal} style = {{color:"green",borderColor:"green",width:"250px"}} shape = "round" >Reset Password</Button>
                        </Col>
                        <Col md = "5" lg = "3" >
                          <Button onClick = {showEmailModal} style = {{color:"green",borderColor:"green",width:"200px"}} shape = "round" className = "ml-auto" >Edit Profile</Button>
                        </Col>
                      </Row>
                    </Spin>
              </Card>
              </Container>
              {/* <Card  title ={ <h3 className = "text-center">User Profile</h3> } >
                  <Skeleton loading = {false} avatar = {true}>
                    <Row>
                        <Col  xs = "12" sm = "12" className =  "text-center mb-5">
                            <Avatar size={128} icon={<UserOutlined />} />
                        </Col>
                    </Row>
                    <Container>
                    <Row>

                    <Col xs = "12" sm = "12">
                            <h5> Full name: <span style = {{fontSize:"1rem",fontWeight:"normal",marginLeft:"1em"}} >Thomas Sarpong</span>  </h5>
                        </Col>
                       
                        <Col xs = "12" sm = "12">
                            <h5> Email: <span style = {{fontSize:"1rem",fontWeight:"normal",marginLeft:"1em"}} >sarpongthomas05@gmail.com</span>  </h5>
                        </Col>
                        <Col xs = "12" sm = "12" md = "6" lg = "4" >
                        <Button style = {{backgroundColor:"green",width:"100%"}} type="primary" onClick={showModal}>
                        Change Password
                      </Button>

                  </Col>
                     
                    </Row>

                    <Row className ="mt-2">
                      
                  <Col xs = "12" sm = "12" md = "6" lg = "4" >
                        <Button style = {{backgroundColor:"green",width:"100%"}} type="primary" onClick={showEmailModal}>
                        Change Email
                      </Button>

                  </Col>
                    </Row>
                    
                    </Container>


                  </Skeleton>
              </Card> */}
            </div>
        </div>
    )
}

const mapStateToProps = state=>{
  return {
    userProfile : state.currentUserProfile
  }
}

const mapDispatchToProps = dispatch=>{
  return {
      updateProfile:(profile)=>dispatch(getProfileSuccess(profile))
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (ProfilePart)
