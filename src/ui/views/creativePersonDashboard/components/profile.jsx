import { Breadcrumb, Button, Card, Input, Skeleton, Form, Divider, Select, Image, DatePicker, Radio, message, Spin, Progress, notification } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React, { useState } from 'react'
import { UserOutlined, InfoCircleOutlined, UploadOutlined, DownloadOutlined } from '@ant-design/icons';
import { Col, Container, Row } from 'react-bootstrap';
import Modal from 'antd/lib/modal/Modal';
import { connect } from 'react-redux';
import TextArea from 'antd/lib/input/TextArea';
import { basePath, resetPasswordPath, uploadCvPath, uploadPastImage } from '../../../../utils/network_utils/endpoints';
import EmptyAdd from './empty_add';
import { PostPastEducation, setDescription, setExperience, setExpertise, uploadCvSuccess, uploadPastImageSuccess } from '../../../../redux/actions/curent_creative_user_actions';
import axios from 'axios'
import getAuthToken from '../../../../utils/get_auth_token';
import { formatDate } from '../../../../utils/date_time_fromat';
import { Link } from 'react-router-dom';
const ProfilePart = ({ profile, setExpertise, setExperience, setDescription, uploadCvSuccess, uploadPastImageSuccess, PostPastEducation }) => {
  const [values, handleChange] = useState({
    user_email: "",
    user_first_name: "",
    user_last_name: "",
    password: "",
    confirm_password: "",
    institution_name: "",
    name_of_programe: "",
    position_held: "",
    employee_name: "",
    employee_email: "",
    phonenumber: "",
    user_description: "",
    employers_role: "",
    employers_job_description: "",
  })
  const [selectedCvFile, setSelectedFile] = useState(null);
  const [experience, setExperienceValue] = useState(0)
  const [select_value, setSelectValue] = useState({
    expertise: "photography"
  })

  const [postLoading, setPostloading] = useState({
    cvLoading: false,
    imageLoading: false
  })

  const [uploadProgress, setUploading] = useState({
    cvProgress: 0,
    imageProgress: 0,
  })


  const handleExperienceChange = (e) => {
    setExperienceValue(e.target.value)
  }
  const [date, setDate] = useState({
    employee_Start_date: null,
    employee_end_date: null,
    education_start: null,
    education_end: null
  })
  const [radio, setRadio] = useState({
    education_completed: false,
    employment_ended: false
  })

  const [files, setFiles] = useState({
    image: null
  })

  const [visible, setVisible] = useState(false)
  const [emailVisible, setEmailVisible] = useState(false)
  const [user_description, setDescriptionValue] = useState("")

  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value)
  }

  const [modalVisible, setModalVisible] = useState({
    expertiseVisible: false,
    experienceVisible: false,
    descriptionVisible: false,
    cvVisible: false,
    past_employment_modal_visible: false,
    past_education_modal_visible: false,
    image_upload_modal_visible: false,
    editProfileModalVisible: false
  })
  const {
    experienceVisible,
    expertiseVisible,
    descriptionVisible,
    cvVisible,
    past_employment_modal_visible,
    past_education_modal_visible

  } = modalVisible
  const handleExpertiseModalOk = (e) => {
    e.preventDefault()
    const fd = new FormData()
    fd.append('expertise', select_value.expertise)
    setExpertise(fd)
    cancelExpertiseModal()



  }
  const handleExperienceModalOk = (e) => {
    e.preventDefault()
    const fd = new FormData()
    fd.append('years_of_experience', experience)
    setExperience(fd)
    cancelExperienceModal()
  }

  const handleDescriptionModalOk = (e) => {
    e.preventDefault()
    const fd = new FormData()
    fd.append('description_of_past_experience', user_description)
    setDescription(fd)
    cancelDescriptionModal()
  }



  const handlePastEducationModalOk = (e) => {
    e.preventDefault()

    const fd = new FormData()
    fd.append('school_name', values.institution_name)
    fd.append('program_of_study', values.name_of_programe)
    fd.append('start_date', formatDate(date.education_start))
    fd.append('has_completed', radio.education_completed)
    if (date.education_end !== null) {
      console.log("hiooo");
      fd.append('end_date', formatDate(date.education_end))
    }


    PostPastEducation(fd, profile.id)

  }
  const handlePastEmploymentModalOk = (e) => {
    e.preventDefault()
    const fd = new FormData()

    fd.append('school_name', values.institution_name)
    fd.append('program_of_study', values.name_of_programe)
    fd.append('start_date', date.employee_Start_date)
    fd.append('end_date', date.employee_end_date)
    fd.append('employment_ended', radio.employment_ended)
    fd.append('employers_phonenumber', values.phonenumber)
    fd.append('position', values.position_held)
    fd.append('role', values.employers_role)
    fd.append('description', values.employers_job_description)






  }


  const showPastEmploymentModal = () => {
    setModalVisible({
      ...modalVisible,
      past_employment_modal_visible: true
    })
  }

  const showPastEducationModal = () => {
    setModalVisible({
      ...modalVisible,
      past_education_modal_visible: true
    })
  }


  const showExpertiseModalOk = () => {
    setModalVisible({
      ...modalVisible,
      expertiseVisible: true
    })
  }
  const showExperienceModalOk = () => {
    setModalVisible({
      ...modalVisible,
      experienceVisible: true
    })
  }

  const showDescriptionModalOk = () => {
    setModalVisible({
      ...modalVisible,
      descriptionVisible: true
    })
  }
  const showCvModalOk = () => {
    setModalVisible({
      ...modalVisible,
      cvVisible: true
    })
  }

  const showImageModak = () => {
    setModalVisible({
      ...modalVisible,
      image_upload_modal_visible: true
    })
  }



  const cancelPastEmploymentModal = () => {
    setModalVisible({
      ...modalVisible,
      past_employment_modal_visible: false
    })
  }

  const cancelPastEducationModal = () => {
    setModalVisible({
      ...modalVisible,
      past_education_modal_visible: false
    })
  }


  const cancelExpertiseModal = () => {
    setModalVisible({
      ...modalVisible,
      expertiseVisible: false
    })
  }
  const cancelExperienceModal = () => {
    setModalVisible({
      ...modalVisible,
      experienceVisible: false
    })
  }

  const cancelDescriptionModal = () => {
    setModalVisible({
      ...modalVisible,
      descriptionVisible: false
    })
  }
  const cancelCvModal = () => {
    setModalVisible({
      ...modalVisible,
      cvVisible: false
    })
  }

  const cancelPastImageUpload = () => {
    setModalVisible({
      ...modalVisible,
      image_upload_modal_visible: false
    })
  }










  const handleOk = () => {

  }
  const handleEmailModalOk = () => {

  }
  const handleCancel = () => {
    setVisible(false)


  }
  const handleEmailModalCancel = () => {
    setEmailVisible(false)

  }
  const showEmailModal = () => {
    setEmailVisible(true)
  }
  const showModal = () => {
    setVisible(true)
  }

  const handleSucessMessage = () => {
    if (profile.set_expertise_success) {
      message.success('You have successfully updated your expertise')
    }
    else if (profile.set_experience_success) {
      message.success('You have successfully updated your experience')

    } else if (profile.set_decription_success) {
      message.success('You have successfully updated your profile description')

    }
    // else if(profile.post_edication_history_success){
    //   cancelPastEducationModal()
    // }
  }

  const handleErrorMessage = () => {
    if (profile.set_expertise_failed) {
      message.error(profile.set_expertise_error)
    } else if (profile.set_experience_failed) {
      message.error(profile.set_experience_error)
    }
    else if (profile.set_decription_failed) {
      message.error(profile.set_decription_error)
    }
  }



  const cvUploadHandler = () => {
    setPostloading({
      cvLoading: true
    })
    const token = getAuthToken()
    if (token !== null) {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        onUploadProgress: (pe) => {
          console.log(Math.round(pe.loaded / pe.total * 100));
          setUploading({
            cvProgress: Math.round(pe.loaded / pe.total * 100)
          })
        }

      }

      const fd = new FormData()
      fd.append('cv', selectedCvFile)

      axios.patch(uploadCvPath, fd, config).then(res => {
        setPostloading({
          cvLoading: false
        })
        console.log(res);
        setUploading({
          cvProgress: 0
        })
        uploadCvSuccess(res.data.cv)
        message.success('You have succesfully uploaded your cv')
        setTimeout(() => {
          cancelCvModal()
        }, 3000)

      }).catch(err => {
        setUploading({
          cvProgress: 0
        })
        setPostloading({
          cvLoading: false
        })
        console.log(err.response);
        if (err.response) {
          message.error("Error Occured, Invalid data format")
        } else if (err.request) {
          message.error("Network error, Check internt connection and try again")
        }
      })
    }
  }





  const cvImageHandler = () => {
    setPostloading({
      imageLoading: true
    })
    const token = getAuthToken()
    if (token !== null) {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        onUploadProgress: (pe) => {
          console.log(Math.round(pe.loaded / pe.total * 100));
          setUploading({
            imageProgress: Math.round(pe.loaded / pe.total * 100)
          })
        }

      }

      const fd = new FormData()
      fd.append('image', files.image)

      axios.post(uploadPastImage, fd, config).then(res => {
        setPostloading({
          imageLoading: false
        })
        console.log(res);
        setUploading({
          imageProgress: 0
        })
        uploadPastImageSuccess(res.data.cv)
        message.success('You have succesfully uploaded your cv')
        setTimeout(() => {
          cancelPastImageUpload()
        }, 3000)

      }).catch(err => {
        setUploading({
          imageProgress: 0
        })
        setPostloading({
          imageLoading: false
        })
        console.log(err.response);
        if (err.response) {
          if (err.response.status === 406) {
            message.error(err.response.data)
          }
          else {
            message.error("Error Occured, Invalid data format")
          }

        } else if (err.request) {
          message.error("Network error, Check internt connection and try again")
        }
      })
    }
  }


  const editProfileModal = <Modal visible={modalVisible.editProfileModalVisible}
    footer={[]}
  >
    <h5 className="text-center my-3" >Edit Profile</h5>
    <Form>
      <Form.Item label="First name" name="firstName">
        <Input />
      </Form.Item>
      <Form.Item label="Last name" name="lastName">
        <Input />
      </Form.Item>
      <Form.Item label="Email address" name="email">
        <Input type="email" />
      </Form.Item>
      <Button
        style={{ marginLeft: "6.5em", width: "80%", height: "50px", color: "green", borderColor: "green" }}
        htmlType="submit" shape="round" >Submit</Button>
    </Form>
  </Modal>


  const resetPassword = e => {
    e.preventDefault()
    const fd = new FormData()
    fd.append('password', values.password)
    fd.append('password_confirm', values.password_confirm)

    const token = getAuthToken()
    if (token !== null) {
      const config = {
        headers: {
          "Content-Type": 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
      axios.post(resetPasswordPath, fd, config).then(res => {
        message.success('Password reset successful')
        handleCancel()

      }).catch(
        err => {
          if (err.response) {
            console.log(err.response);
          } if (err.request) {
            message.error("Network error")
          }
        }
      )
    } else {
      notification.error({
        description: "Session expired"
      })
      // return <Redirect to = "/login"/>
    }
  }





  console.log(profile);
  return (
    <div>
      {handleErrorMessage()}
      {handleSucessMessage()}
      {editProfileModal}

      {/* Expertise Modal */}
      <Modal
        visible={expertiseVisible}
        title="Set Expertise"
        onOk={handleExpertiseModalOk}
        onCancel={cancelExpertiseModal}
        footer={[
          <Button style={{ color: "red" }} key="back" onClick={cancelExpertiseModal}>
            Cancel
            </Button>,
          <Button loading={profile.set_expertise_loading} style={{ backgroundColor: "green" }} form="expertise-form" key="submit" type="primary" onClick={handleExpertiseModalOk}>
            Submit
            </Button>,
        ]}
      >
        <Form
          id="expertise-form"
          layout="vertical"
        >
          <Form.Item
            label="Expertise"
            tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
          >
            <Select onChange={(value) => {
              setSelectValue({
                ...select_value,
                expertise: value
              })
            }} value={select_value.expertise}  >
              <Select.Option value="photography">
                Photography
          </Select.Option>
              <Select.Option value="designer">
                Graphic Designer
          </Select.Option >
              <Select.Option value="developer">
                Mobile & Web Developer
          </Select.Option>
              <Select.Option value="event_planner">
                Event Planner
          </Select.Option>
            </Select>
          </Form.Item>

        </Form>
      </Modal>



      <Modal
        visible={past_employment_modal_visible}
        title="Add Employment history"
        onOk={handlePastEmploymentModalOk}
        onCancel={cancelPastEmploymentModal}
        footer={[
          <Button style={{ color: "red" }} key="back" onClick={cancelPastEmploymentModal}>
            Cancel
            </Button>,
          <Button style={{ backgroundColor: "green" }} form="past-employment-form" key="submit" type="primary" onClick={handlePastEmploymentModalOk}>
            Submit
            </Button>,
        ]}
      >
        <Form
          id="past-employment-form"
          layout="vertical"
        >
          <Form.Item
            label="Name of Employer/Company"
            tooltip={{ title: 'Employee name', icon: <InfoCircleOutlined /> }}
          >
            <Input onChange={e => { handleChange({ ...values, employee_name: e.target.value }) }} value={values.employee_name} required placeholder="Enter employee name" />

          </Form.Item>
          <Form.Item
            label="Employee/Company email"
            tooltip={{ title: 'Company email', icon: <InfoCircleOutlined /> }}
          >
            <Input onChange={e => { handleChange({ ...values, employee_email: e.target.value }) }} value={values.employee_email} type="email" required placeholder="Enter company email" />

          </Form.Item>
          <Form.Item
            label="Employe/Company phone number"
            tooltip={{ title: 'Company phone', icon: <InfoCircleOutlined /> }}
          >
            <Input onChange={e => { handleChange({ ...values, phonenumber: e.target.value }) }} value={values.phonenumber} type="number" required placeholder="Enter phone number" />

          </Form.Item>
          <Row>
            <Col>
              <Form.Item
                label="Start date"
                tooltip={{ title: 'Emplyment start date', icon: <InfoCircleOutlined /> }}
              >
                <DatePicker onChange={(d, ds) => { setDate({ ...date, employee_Start_date: ds }) }} />

              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Employment completed?"
                tooltip={{ title: 'Employment completed?', icon: <InfoCircleOutlined /> }}
              >
                <Radio onClick={(e) => {
                  setRadio({
                    ...radio,
                    employment_ended: !radio.employment_ended
                  })
                }} checked={radio.employment_ended} value={radio.employment_ended} className="ml-5" />

              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            hidden={!radio.employment_ended}
            label="End date"
            tooltip={{ title: 'Employment end date', icon: <InfoCircleOutlined /> }}
          >
            <DatePicker onChange={(d, ds) => { setDate({ ...date, employee_end_date: ds }) }} />

          </Form.Item>

          <Form.Item
            label="Position Held"
            tooltip={{ title: 'Position held', icon: <InfoCircleOutlined /> }}
          >
            <Input value={values.position_held} onChange={e => { handleChange({ ...values, position_held: e.target.value }) }} required placeholder="Enter your position" />

          </Form.Item>

          <Form.Item
            label="Role"
            tooltip={{ title: 'Role in company', icon: <InfoCircleOutlined /> }}
          >
            <Input onChange={e => { handleChange({ ...values, employers_role: e.target.value }) }} value={values.employers_role} required placeholder="Enter role" />

          </Form.Item>

          <Form.Item
            label="Job description"
            tooltip={{ title: 'Description of job', icon: <InfoCircleOutlined /> }}
          >
            <Input.TextArea onChange={e => { handleChange({ ...values, employers_job_description: e.target.value }) }} value={values.employers_job_description} rows={4} required placeholder="Enter job description" />

          </Form.Item>


        </Form>
      </Modal>




      <Modal
        visible={past_education_modal_visible}
        title="Add education history"
        onOk={handlePastEducationModalOk}
        onCancel={cancelPastEducationModal}
        footer={[
          <Button style={{ color: "red" }} key="back" onClick={cancelPastEducationModal}>
            Cancel
            </Button>,
          <Button loading={profile.post_edication_history_loading} style={{ backgroundColor: "green" }} form="past-education-form" key="submit" type="primary" onClick={handlePastEducationModalOk}>
            Submit
            </Button>,
        ]}
      >
        <Form
          id="past-education-form"
          layout="vertical"
        >
          <Form.Item
            label="Name of institution"
            tooltip={{ title: 'School name', icon: <InfoCircleOutlined /> }}
          >
            <Input name="institution_name" onChange={(e) => { handleChange({ ...values, institution_name: e.target.value }) }} value={values.institution_name} required placeholder="Enter school's name" />

          </Form.Item>
          <Form.Item
            label="Name of programe"
            tooltip={{ title: 'Programe name', icon: <InfoCircleOutlined /> }}
          >
            <Input value={values.name_of_programe} onChange={e => { handleChange({ ...values, name_of_programe: e.target.value }) }} required placeholder="Enter name of programmes" />

          </Form.Item>
          <Row>
            <Col>
              <Form.Item
                label="Start date"
                tooltip={{ title: 'Programe start date', icon: <InfoCircleOutlined /> }}
              >
                <DatePicker onChange={(date, date_string) => { setDate({ ...radio, education_start: date_string }) }} />

              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Employment completed?"
                tooltip={{ title: 'Employment completed?', icon: <InfoCircleOutlined /> }}
              >
                <Radio checked={radio.education_completed} value={radio.education_completed} onClick={(e) => {
                  setRadio({
                    ...radio,
                    education_completed: !radio.education_completed
                  })
                }} className="ml-5" />

              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            hidden={!radio.education_completed}
            label="End date"
            tooltip={{ title: 'Employment end date', icon: <InfoCircleOutlined /> }}
          >
            <DatePicker onChange={(d, date_String) => { setDate({ ...date, education_end: date_String }) }} />

          </Form.Item>





        </Form>
      </Modal>



      {/* End of expertise modal */}


      {/* Experience Modal */}
      <Modal
        visible={experienceVisible}
        title="Set Experience"
        onOk={handleExperienceModalOk}
        onCancel={cancelExperienceModal}
        footer={[
          <Button style={{ color: "red" }} key="back" onClick={cancelExperienceModal}>
            Cancel
            </Button>,
          <Button loading={postLoading.cvLoading} style={{ backgroundColor: "green" }} form="experience-form" key="submit" type="primary" onClick={handleExperienceModalOk}>
            Submit
            </Button>,
        ]}
      >
        <Form
          id="experience-form"
          layout="vertical"
        >
          <Form.Item
            label="Eperience"
            tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
          >

            <Input onChange={handleExperienceChange} min={1} max={30} value={experience} type="number" name="user_experience" />
          </Form.Item>

        </Form>
      </Modal>


      {/* Description */}
      <Modal
        visible={descriptionVisible}
        title="Description Hello"
        onOk={handleDescriptionModalOk}
        onCancel={cancelDescriptionModal}
        footer={[
          <Button style={{ color: "red" }} key="back" onClick={cancelDescriptionModal}>
            Cancel
            </Button>,
          <Button style={{ backgroundColor: "green" }} form="description-form" key="submit" type="primary" onClick={handleDescriptionModalOk}>
            Submit
            </Button>,
        ]}
      >
        <Form
          id="description-form"
          layout="vertical"
        >
          <Form.Item
            label="Description"
            tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
          >
            <TextArea onChange={handleDescriptionChange} name="user_description" value={user_description} rows="4" required placeholder="Enter new Description" />
          </Form.Item>

        </Form>
      </Modal>






      {/* CV */}
      <Modal
        visible={cvVisible}
        title="Upload cv"
        onOk={cvUploadHandler}
        onCancel={cancelCvModal}
        footer={[
          <Button style={{ color: "red" }} key="back" onClick={cancelCvModal}>
            Cancel
            </Button>,
          <Button loading={postLoading.cvLoading} style={{ backgroundColor: "green" }} form="cv-form" key="submit" type="primary" onClick={cvUploadHandler}>
            <UploadOutlined />
              Upload
            </Button>,
        ]}
      >
        <Form
          id="cv-form"
          layout="vertical"
        >
          <Form.Item
            label="Upload cv"
            tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
          >
            <input multiple={false} accept=".pdf,.doc,.docx" onChange={(e) => {
              console.log(e.target.files[0])
              setSelectedFile(e.target.files[0])

            }

            } type="file" />
          </Form.Item>


        </Form>
        <Progress percent={uploadProgress.cvProgress} />




      </Modal>



      <Modal
        visible={modalVisible.image_upload_modal_visible}
        title="Upload past work Image"
        onOk={cvImageHandler}
        onCancel={cancelPastImageUpload}
        footer={[
          <Button style={{ color: "red" }} key="back" onClick={cancelPastImageUpload}>
            Cancel
            </Button>,
          <Button loading={postLoading.imageLoading} style={{ backgroundColor: "green" }} form="image-upload-form" key="submit" type="primary" onClick={cvImageHandler}>
            <UploadOutlined /> Upload
            </Button>,
        ]}
      >
        <Form
          id="image-upload-form"
          layout="vertical"
        >
          <Form.Item
            label="Upload image"
            tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
          >

            <input onChange={e => {
              setFiles({
                ...files,
                image: e.target.files[0]
              })
            }} type="file" accept=".png,.jpg" />
          </Form.Item>

        </Form>
        <Progress percent={uploadProgress.imageProgress} />
      </Modal>



      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Profile</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <Card title={<h3 style={{ color: "rgb(110, 108, 108)" }} className="text-center">User Profile</h3>} >

          <Skeleton loading={profile.loading} avatar={true}>
            <Row>
              <Col xs="12" sm="12" className="text-center mb-5">
                <Avatar size={128} icon={<UserOutlined />} />
              </Col>
            </Row>
            <Container>
              <div className="text-center"><h4>Personal Info</h4></div>
              <Divider />
              <Row>
                <Col xs="12" sm="12">

                  <Row>
                    <Col xs="12" sm="4" md="4" lg="4">
                      <p> Full name:</p>
                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4">
                      <p>{`${profile.first_name} ${profile.last_name}`}</p>
                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4">
                      <Button onClick={showExperienceModalOk}>Change name</Button>
                    </Col>
                    <Divider />
                  </Row>
                </Col>

                <Col xs="12" sm="12">
                  <Row>
                    <Col xs="12" sm="4" md="4" lg="4">
                      <p> Email:</p>
                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4">
                      <p>{`${profile.email}`}</p>
                    </Col>
                    <Col xs="12" sm="4" md="4" lg="4">
                      <Button onClick={showEmailModal}>Change Email</Button>
                    </Col>
                    <Divider />
                  </Row>
                  {/* <p> Email: <span style = {{fontSize:"1rem",fontWeight:"normal",marginLeft:"1em"}} >{`${profile.email}`}</span>  </p> */}
                </Col>
                <Col xs="12" sm="12" md="6" lg="4" >
                  <Button shape="round" style={{ width: "100%", color: "green", borderColor: "green" }} onClick={showModal}>
                    Change Password
                      </Button>
                  <Modal
                    visible={visible}
                    title="Change Password"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                      <Button style={{ color: "red" }} key="back" onClick={handleCancel}>
                        Cancel
            </Button>,
                      <Button style={{ backgroundColor: "green" }} form="password-form" key="submit" type="primary" onClick={resetPassword}>
                        Submit
            </Button>,
                    ]}
                  >
                    <Form
                      id="password-form"
                      layout="vertical"
                    >
                      <Form.Item label="New Password" required tooltip="This is a required field">
                        <Input type="password" required placeholder="Enter New Password" />
                      </Form.Item>
                      <Form.Item
                        label="Confirm Passsword"
                        tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                      >
                        <Input type="password" required placeholder="Confirm password" />


                        <Button style={{ backgroundColor: "green" }} form="password-form" key="submit" type="primary" onClick={resetPassword}>
                          Submit
            </Button>
                      </Form.Item>

                    </Form>
                  </Modal>
                </Col>
                <Col xs="12" sm="12" md="6" lg="4" >
                  <Button className="ml-auto" shape="round" style={{ width: "100%", color: "green", borderColor: "green" }} onClick={() => {
                    setModalVisible({
                      ...setModalVisible,
                      editProfileModalVisible: true
                    })
                  }}>
                    Edit Profile
                        </Button>
                </Col>
              </Row>

              <Row className="mt-2">

                <Col xs="12" sm="12" md="6" lg="4" >

                  <Modal
                    visible={emailVisible}
                    title="Change Email"
                    onOk={handleEmailModalOk}
                    onCancel={handleEmailModalCancel}
                    footer={[
                      <Button style={{ color: "red" }} key="back" onClick={handleEmailModalCancel}>
                        Cancel
            </Button>,
                      <Button style={{ backgroundColor: "green" }} form="email-form" key="submit" type="primary" onClick={handleEmailModalOk}>
                        Submit
            </Button>,
                    ]}
                  >
                    <Form
                      id="email-form"
                      layout="vertical"
                    >
                      <Form.Item
                        label="New email"
                        tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                      >
                        <Input required placeholder="Enter new email" />
                      </Form.Item>

                    </Form>
                  </Modal>
                </Col>
              </Row>

            </Container>


          </Skeleton>
        </Card>
        <Card className="mt-4" title={<h4 style={{ color: "rgb(110, 108, 108)" }} className="text-center" >Professional Profile</h4>}>
          <Skeleton loading={profile.loading} >
            <Spin spinning={profile.set_expertise_loading} tip="Loading" >

              <Row>
                <Col xs="12" sm="4" md="4" lg="4">
                  <p>Expertise: </p>
                </Col>
                <Col xs="12" sm="4" md="4" lg="4">
                  <p>{profile.expertise === null ? "Not set" : profile.expertise}</p>
                </Col>
                <Col xs="12" sm="4" md="4" lg="4">

                  <Button onClick={showExpertiseModalOk}>{profile.expertise === null ? "Set Expertise" : "Edit Expertise"}</Button>
                </Col>
                <Divider />
              </Row>
            </Spin>

            <Spin tip="Uplodating experience" spinning={profile.set_experience_loading} >

              <Row>
                <Col xs="12" sm="4" md="4" lg="4">
                  <p>Years of experience: </p>
                </Col>
                <Col xs="12" sm="4" md="4" lg="4">
                  <p>{profile.experience === null ? "Not set" : `${profile.experience} years`} </p>
                </Col>
                <Col xs="12" sm="4" md="4" lg="4">
                  <Button onClick={showExperienceModalOk}>{profile.experience === null ? "Set Experience" : "Edit Experience"}</Button>
                </Col>
                <Divider />

              </Row>
            </Spin>
            <Spin spinning={profile.set_decription_loading} >
              <Row>
                <Col xs="12" sm="4" md="4" lg="4">
                  <p>Decription: </p>
                </Col>
                <Col xs="12" sm="4" md="4" lg="4">
                  <p>{profile.description === null ? "Not set" : profile.description}</p>
                </Col>
                <Col xs="12" sm="4" md="4" lg="4">
                  <Button onClick={showDescriptionModalOk}>{profile.description === null ? "Set description" : "Edit description"}</Button>
                </Col>
                <Divider />
              </Row>
            </Spin>
            <Row>
              <Col xs="12" sm="4" md="4" lg="4">
                <p>CV</p>
              </Col>
              <Col xs="12" sm="4" md="4" lg="4">

                <Link href={`${basePath}${profile.cv}`}>
                  <Button target="blank"  > <DownloadOutlined />  View</Button>

                </Link>
              </Col>
              <Col xs="12" sm="4" md="4" lg="4">
                <Button shape="round" onClick={showCvModalOk}>Upload CV</Button>
              </Col>
              <Divider />
            </Row>
          </Skeleton>
        </Card>


        <Card className="mt-4 xs-text-center " title={<h4 style={{ color: "rgb(110, 108, 108)" }} className="text-center" >Past Work</h4>}>
          <Skeleton loading={profile.loading} >
            <Row>
              <Col xs="12" sm="4" md="4" lg="4">
                <p>Image 1</p>
              </Col>
              <Col xs="12" sm="4" md="4" lg="4">
                <Image
                  width="100%"
                // height={200}
                // src={ profile.success? `${basePath}/${profile.past_images[0].image}`:""}
                // fallback="data:image/png;base64,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"
                />
              </Col>
              <Col xs="12" sm="4" md="4" lg="4">
                <Button shape="round" onClick={showImageModak}>Upload Image</Button>
              </Col>
              <Divider />
            </Row>
            <Row>
              <Col xs="12" sm="4" md="4" lg="4">
                <p>Image 2</p>
              </Col>
              <Col xs="12" sm="4" md="4" lg="4">
                <Image
                  width="100%"
                // height={200}
                // src={ profile.success? `${basePath}/${profile.past_images[1].image}`:""}
                // fallback="data:image/png;base64,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"
                />
              </Col>
              <Col xs="12" sm="4" md="4" lg="4">
                <Button shape="round" onClick={showImageModak}>Upload Image</Button>
              </Col>
              <Divider />
            </Row>
            <Row>
              <Col xs="12" sm="4" md="4" lg="4">
                <p>Image 3</p>
              </Col>
              <Col xs="12" sm="4" md="4" lg="4">
                <Image
                  width="100%"
                // height={200}
                // src={ profile.success? `${basePath}/${profile.past_images[2].image}`:""}
                // fallback="data:image/png;base64,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"
                />
              </Col>
              <Col xs="12" sm="4" md="4" lg="4">
                <Button shape="round" onClick={showImageModak}>Upload Image</Button>
              </Col>
              <Divider />
            </Row>
          </Skeleton>
        </Card>
        <Card className="mt-4 xs-text-center " title={<h4 style={{ color: "rgb(110, 108, 108)" }} className="text-center" >Past Edications</h4>}>
          <Skeleton loading={profile.loading}  >
            {
              profile.education_histroy.length === 0 ? (
                <EmptyAdd onClick={showPastEducationModal} btn_label="Add Past Education" label="No Education history added yet" />
              ) :
                (
                  <>
                    {profile.education_histroy.map((edu, index) => (
                      <div className="wrap">
                        <p>{`${index + 1}    ${edu.school_name}`}</p>

                        <Divider />
                      </div>
                    ))}
                    <div className=" text-center button-part">
                      <Button onClick={showPastEducationModal}>Add Education History</Button>
                    </div>

                  </>
                )
            }

          </Skeleton>
        </Card>
        <Card className="mt-4 xs-text-center " title={<h4 style={{ color: "rgb(110, 108, 108)" }} className="text-center" >Employment History</h4>}>
          <Skeleton loading={profile.loading}  >

            {
              profile.past_jobs.length === 0 ? (
                <EmptyAdd onClick={showPastEmploymentModal} btn_label="Add Past Employment" label="No employment history added yet" />
              ) :
                (
                  <>
                    {profile.past_jobs.map((job, index) => (
                      <div className="wrap">
                        <p>{`${index + 1}    ${job.school_name}`}</p>

                        <Divider />
                      </div>
                    ))}
                    <div className=" text-center button-part">
                      <Button onClick={showPastEmploymentModal}>Add Employment History</Button>
                    </div>

                  </>
                )
            }


          </Skeleton>
        </Card>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    profile: state.curCreativeUser
  };
}


function mapDispatchToProps(dispatch) {
  return {
    setExpertise: (data) => dispatch(setExpertise(data)),
    setExperience: (data) => dispatch(setExperience(data)),
    setDescription: (data) => dispatch(setDescription(data)),
    uploadCvSuccess: (data) => dispatch(uploadCvSuccess(data)),
    uploadPastImageSuccess: (data) => dispatch(uploadPastImageSuccess(data)),
    PostPastEducation: (data, id) => dispatch(PostPastEducation(data, id))


  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePart)
