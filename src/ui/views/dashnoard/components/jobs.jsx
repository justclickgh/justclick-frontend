import { Breadcrumb, Button, Card,Result, DatePicker, Divider, Progress, Form, Input, List, message,  Modal,  Pagination,  Select,  Skeleton,  Spin, Tooltip, notification } from 'antd'
import {DeleteOutlined, EditOutlined, PlusCircleOutlined} from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import '../assets/header.css'
import 'antd/dist/antd.css';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { filterJobs, getCurUserJobs, paginate, searchJobs } from '../../../../redux/actions/cur_user_jobs_actions';
import {postJob} from '../../../../redux/actions/job_actions'
import {useForm} from '../../../../utils/hooks/use_form'
import axios from 'axios'
import { confirmJobsPath, createDesignJobInfoPath, createDevelopemtJobInfoPath, createPhotoJobInfoPath, createPlanningJobInfoPath, jobPath } from '../../../../utils/network_utils/endpoints';
import getAuthToken from '../../../../utils/get_auth_token';
import TextArea from 'antd/lib/input/TextArea';
import {postJobSuccess} from '../../../../redux/actions/job_actions'
// import Checkout from '../../payment/pay-hook';
import { usePaystackPayment } from 'react-paystack';
// import confirm from 'antd/lib/modal/confirm';

import {v4 as uuid4} from 'uuid'




const JobsPart = ({jobsData,postJob,allJobsData,filter,paginate,search}) => {
    const [values,handleChange] = useForm({
        title:"",
        description:"",
        posted_by:"",
        job_category:"",
        budget:"",
        prefered_tech:"",
        event_type:"",
        products_needed:"",
        city:"",
        longitude:"",
        latitude:"",
        programe_type:"",
        other_size_of_project:"",


        

    })
    
    const number_per_page = 10
    const [state,setState] = useState({
        filtered:jobsData.jobs,
        // page_data: jobsData.jobs.slice(0,number_per_page),
        post_job_completed:0,
        payment_failed:false,
        error_message:"",
        payment_loading:false,
        form_number : 1,
        temp : 1,
        job_id:"",
        sepc_design_size:"",
        amount: 0,
        reference:"",
        colors:["Blue"]
 
      
    })

    const [fieldErrors,setError] = useState({
        description:[],
        title:[],
        due_date:[],
        budget:[],
        job_type:[],
        city:[],
        latitude:[],
        longitude:[],
        products_needed:[],
        programe_type:[],
        dev_type:[],
        prefared_technologies:[],
        size_of_project:[],
        other_size_of_project:[],
        design_format:[],
        event_type:[]
        
        
    })

    const [selects,setSelects] = useState({
        dev_stack:"",
        dev_type:"",
        project_size:"",
        design_format:"",


    })

    


    const [dueDate,setDueDate] = useState(null)
    const [dueDateString,setDueDateString] = useState("")
    const [jobsCategory,setJobCategory] = useState("");
    const handleJobCategoryChange = (selected)=>{
        console.log(selected);
        let form_number = 1
        if(selected === "WEB/MOBILE DEVELOPMENT"){
            form_number = 2
        }
        else if(selected === "GRAPHIC DESIGN"){
            form_number = 3
        }
        else if(selected=== "EVENT PLANNING"){
            form_number =  4
        } else {
            form_number = 5
        }
        setState({
            ...state,
            temp : form_number
        })
        setJobCategory(selected)
    } 
    const handleDateChange = (date,string)=>{
        setDueDate(date)
        setDueDateString(string)
    }

    useEffect(() => {
        setState({
            ...state,
            filtered:jobsData.jobs.slice(0,5)
        })
       
    }, [jobsData,state])


    const [visible,setVisible] = useState(false)
    const showModal = () => {
        setVisible(true)
      };
    const  handleCancel = () => {
        setVisible(false)
      };
 
   const handleFailure = (e)=>{
        if(allJobsData.postFailed){
            message.error("Could not submit data")
        }
    }
    const fd = new FormData()
    const getColors = ()=>{
        let colors = []
        if(state.colors.length !== 0){
            state.colors.map(color=>{
                colors.push({
                    color:color
                })
                return colors
            })
        }
        return colors
    }

    const getInfoData= ()=>{
        switch (jobsCategory) {
            case 'PHOTOGRAPHY':
                fd.append('programe_type',values.event_type)
                fd.append('products_needed',values.products_needed)
                fd.append('city',values.city )
                fd.append('longitude', values.longitude)
                fd.append('latitude', values.latitude)
               return fd
            case 'WEB/MOBILE DEVELOPMENT':
                fd.append('job_type', selects.dev_stack)
                fd.append('dev_type', selects.dev_type)
                fd.append('prefared_technologies', values.prefered_tech)
                return fd
            case 'EVENT PLANNING':
                fd.append('programe_type', values.event_type)
                fd.append('products_needed', values.products_needed)
                fd.append('city', values.city)
                fd.append('longitude', values.longitude)
                fd.append('latitude', values.latitude)
                return fd
        
            default:
                fd.append('size_of_project', selects.project_size)
                fd.append('other_size_of_project', values.other_size_of_project)
                fd.append('design_format', selects.design_format)
                fd.append('colors',JSON.stringify(getColors()))
                const data = {
                    size_of_project:selects.project_size,
                    other_size_of_project:values.other_size_of_project,
                    design_format:selects.design_format,
                    colors:getColors()
                }

                return data;
        }
    }

    const getPath = ()=>{
            switch (jobsCategory) {
            case 'PHOTOGRAPHY':
               return createPhotoJobInfoPath(state.job_id)
            case 'WEB/MOBILE DEVELOPMENT':
                return createDevelopemtJobInfoPath(state.job_id)
            case 'EVENT PLANNING':
                return createPlanningJobInfoPath(state.job_id)
            default:
                return createDesignJobInfoPath(state.job_id)
        }
    }

    const postInfo = (e)=>{
      e.preventDefault()
    const token = getAuthToken()
    if(token !== null){
        const config = {
            headers : {
                "Content-Type":'application/json',
                'Authorization':`Bearer ${token}`
            }}
            // console.log(getPath());
             console.log(getInfoData());
             
            axios.post(getPath(),getInfoData(),config).then(res=>{
               
                    console.log(res.data)
                    setState({
                        ...state,
                        post_job_completed: state.post_job_completed + 33,
                        form_number: 3,
                        amount:values.budget
                       
                    })
            }).catch(error=>{
                    if(error.response){
                        console.log(error.response);
                        if(error.response.status ===400){
                            const error_data = error.response.data
                            setError({
                                ...fieldErrors,
                                    job_type:error_data.job_type?error_data.job_type:[],
                                    city:error_data.city?error_data.city:[],
                                    latitude:error_data.latitude?error_data.latitude:[],
                                    products_needed:error_data.products_needed?error_data.products_needed:[],
                                    programe_type:error_data.programe_type?error_data.programe_type:[],
                                    dev_type:error_data.dev_type?error_data.dev_type:[],
                                    prefared_technologies:error_data.prefared_technologies?error_data.prefared_technologies:[],
                                    size_of_project:error_data.size_of_project?error_data.size_of_project:[],
                                    other_size_of_project:error_data.other_size_of_project?error_data.other_size_of_project:[],
                                    design_format:error_data.design_format?error_data.design_format:[],
                                    event_type:error_data.programe_type?error_data.programe_type:[]
                            })
                        }else{
                            message.error(error.response.data.detail)
                        }

                    }else if(error.request){
                        message.error("Network error")
                    }
            })


        }else{
            message.error("Session expired")
        }
        
    }

    const createJob = (e)=>{
        e.preventDefault()
    const token = getAuthToken()
    if(token !== null){
        const config = {
            headers : {
                "Content-Type":'application/json',
                'Authorization':`Bearer ${token}`
            }}
        const data = {
            title: values.title,
            description: values.description,
            job_category: jobsCategory,
            due_date: dueDateString,
            budget: values.budget          
        }
        axios.post(jobPath,data,config).then(res=>{
        console.log(res.data)
        setState({
            ...state,
            post_job_completed: state.post_job_completed + 33,
            form_number: 2,
            job_id:res.data.job_id
        })
        message.success('Job posted successfully')
        }).catch(error=>{
            if(error.response){
                console.log(error.response);
                const error_data = error.response.data
                if (error.response.status === 400){
                    setError({
                        ...fieldErrors,
                        title:error_data.title ? error_data.title:[],
                        budget:error_data.budget ? error_data.budget:[],
                        description:error_data.description ? error_data.description:[],
                        job_type:error_data.job_category ? error_data.job_category:[],
                        due_date:error_data.due_date ? error_data.due_date:[]

                    })
                }

            } else if(error.request){
                message.error("Network error")
            }
        })
        
        }else{
            message.error("Session expired")
        }
    }

      const handleSubmit = (e)=>{
          console.log();
        e.preventDefault()
        const data = {
            title: values.title,
            description: values.description,
            job_category: jobsCategory,
            due_date: dueDateString,
            budget: values.budget          
        }
       postJob(data)
        
    }
    const handleLoadFailedMessage = ()=>{
        if(jobsData.failed){
            message.error(jobsData.message)
        }
    }
    const handleSuccess = ()=>{
        if(allJobsData.postSuccess){
            
            setVisible(false)
            message.success("You have successfully posted a job")
        }
    }


const conf = {
    reference: uuid4,
    amount: values.budget * 100,
    email: "email@asds.com",
    currency: "GHS",
    publicKey: 'pk_test_051ba69b3f125bfcdb6dc133e72b04c8436ffbb4',
}

const onClose = () => {
    message.error("Payment canceled")
    console.log('closed')
}




const onSuccess = () => {
    notification.success({
        description:"Payment made succesfully"
    })
        const token = getAuthToken()
 
        const config = {
            headers : {
                "Content-Type":'application/json',
                'Authorization':`Bearer ${token}`
            }}
             console.log(state.reference);
        axios.get(confirmJobsPath(state.job_id),config).then(res=>{
           
            console.log(res);}).catch(err=>{
            console.log(err.response);
        })
    
};


const initializePayment = usePaystackPayment(conf);

    // const initiatePayment = (e)=>{


    // const token = getAuthToken()
    // if(token !== null){
    //     const config = {
    //         headers : {
    //             "Content-Type":'application/json',
    //             'Authorization':`Bearer ${token}`
    //         }}
    //         setState({
    //             ...state,
    //             payment_loading:true
    //         })
    //         axios.get(jobsPaymentPath(state.job_id),config).then(res=>{
    //             console.log(res);
    //              setState({
    //             ...state,
    //             payment_loading:false,
    //             reference:res.data.reference
    //             // form_number:4
                
    //         })
    //         // console.log(conf);
    //         initializePayment(onSuccess, onClose)
    //         setVisible(false)
    //             // window.open(res.data.payment_url)
    //         }).catch(error=>{
    //             setState({
    //             ...state,
    //             payment_loading:false
    //         })
    //             if(error.response){

    //                 setVisible(false)
    //                 setState({
    //                     ...state,
    //                     error_message:error.response.data.detail,
    //                     payment_failed:true,
    //                 })
                    

    //             } else if(error.request){
    //                 message.error("Network error")
    //             }
    //         })
    //     }else{
    //         message.error('Session expired')
    //     }
        
    // }

const initiatePayment = ()=>{
        initializePayment(onSuccess, onClose)
        setVisible(false)
}



    const showItems = ()=>{

                return (
                <>
                
                <Spin tip = "deleting" spinning = {jobsData.deleteLoading}>
        
                <Card className = "mx-auto" style = {{width:"70vw"}}  title = {<> <Row> 
                        <Col xs = "12"  sm = "10"   >
                            <p > List of Jobs </p>
                        </Col>

                        <Col sm = "1" >
                        <Tooltip title = "Add Job" >
                            <Button onClick = {showModal} shape = "circle" style = {{border:"none"}}  >
                                <PlusCircleOutlined style = {{ color:"green" ,fontSize:"1.5rem"}} />
                            </Button>                                        
                        </Tooltip>

                        </Col>
                        </Row> 
                        <Divider/>
                        <Row>
                        <Col xs = "6" sm = "6" >
                            <p>Filter by status: </p>
                            <Select  onChange = {(value)=>{
                                filter(value)
                       
                            }
                            }  style = {{width :"100%"}}  >
                                <Select.Option value = "all" > All  </Select.Option>
                                <Select.Option value = "pending"  > All Pending </Select.Option>
                                <Select.Option value = "completed" > Completed Jobs </Select.Option>
                            </Select>
                        </Col>

                        <Col sm = "6"  >
                            <p>Search: </p>
                        <Input.Search placeholder = "Search title and description" onChange = {e=>{
                            search(e.target.value)
                        }}   />
                        </Col>                        
                        
                        
                        </Row>
                        
                        </> } >
                        <List   className="demo-loadmore-list"
                        loading = {jobsData.loading}
                        // itemLayout="horizontal"
                        dataSource = {jobsData.page_data}
                        renderItem = {(item,index)=>(
                            <List.Item actions = {[
                                <Button shape ="circle" style = {{border:'none'}} >
                                    <DeleteOutlined style = {{color:'red'}}  />
                                </Button>,
                                <Button shape ="circle" style = {{border:'none'}} >
                                    <EditOutlined style = {{color:'blue'}}  />
                                </Button>,
                                <Button shape ="circle" style = {{border:'none'}} >
                                    <PlusCircleOutlined style = {{color:'blue'}}  />
                                </Button>,

                            ]} >
                                <Skeleton active avatar = {false} loading = {jobsData.loading} >
                                    <List.Item.Meta 
                                        title = {` ${index + 1}. ${item.title}`}
                                        description = {
                                            <Row>
                                                <Col sm = "12">
                                                    {`${item.description}`}
                                                </Col >
                                                <Col className = "mt-2" sm = "12" >
                                                    <small>Posted at: 16th October, 2020</small>
                                                </Col >
                                                <Col className = "mt-2 " xs= "5" sm = "5">
                                                    <small>Status : <span style = {{color:"green"}} >Active</span></small>
                                                </Col>
                                            </Row>
                                        }
                                    />
                                        
                                </Skeleton>
                            </List.Item>
                        )}
                        >
                                            
                                </List>
                                <Divider/>
                                <Pagination
                                
                                onChange = {(page,pageSize)=>{
                                    console.log(page);
                                   paginate(page)
                            
                                }}
                                
                                pageSize = {number_per_page} total = {jobsData.filtered.length} />

                                </Card>
                           
            
                </Spin>
                </>
                )
            
        
    }
 
    handleLoadFailedMessage()
    const PostJobModal = (
        <Modal 
         visible = {visible}
         onOk = {handleSubmit}
         onCancel = {handleCancel}
           footer={[
           
          ]}
          title="Post a Job"
          >
              <Progress
              style = {{marginLeft:170}}
              type = "circle"
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                percent ={state.post_job_completed}

                format = {percent=><small>{`${percent<33?1:percent>=33 && percent<66?2:3}/3`} </small> }
              />
             
            <div hidden = {state.form_number !== 1} className="asset_info">
              
                     <Form
                     
                        id = "postForm"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        // layout="horizontal"
                        // initialValues={{ size: "middle" }}
                        name = "job_info"
                        // size={"middle"}
                    
                    >
                        <h6 className = "text-center mt-2" >Asset information</h6>
                        <Divider/>

                           
                            <Form.Item
                            validateStatus = {fieldErrors.title.length>=1?"error":"success"}
                            help = {fieldErrors.title.map(error=>error)} 
                            name = "title"
                            rules = {[
                                {
                                    required:true,
                                    message:"This field is required"
                                }
                            ]}
                            label="Job title"
                            >
                            {console.log(jobsData)}
                            <Input name = "title" value = {values.title} onChange = {handleChange}  />
                            </Form.Item>
                                    <Form.Item
                                        name = "job type"
                                        rules= {[
                                            {
                                                required:true,
                                                message:"Job type is required"
                                            }
                                        ]}
                                        label="Job Type"
                                            validateStatus = {fieldErrors.job_type.length>=1?"error":"success"}
                                            help = {fieldErrors.job_type.map(error=>error)}                                         >
                                        <Select se onChange = {handleJobCategoryChange} value = {jobsCategory}>
                                            <Select.Option value="GRAPHIC DESIGN">Graphic design</Select.Option>
                                            <Select.Option value="EVENT PLANNING">Event Planning</Select.Option>
                                            <Select.Option value="PHOTOGRAPHY">Photography</Select.Option>
                                            <Select.Option value="WEB/MOBILE DEVELOPMENT">Mobile/Web Design</Select.Option>
                                        </Select>
                                        </Form.Item>

                                <Form.Item
                                label="Description"
                                name = "descritption"
                                rules = {
                                    [
                                        {
                                            required:true,
                                            message:"Descrption is required"
                                        }
                                    ]
                                }
                                            validateStatus = {fieldErrors.description.length>=1?"error":"success"}
                                            help = {fieldErrors.description.map(error=>error)}                                   >
                                
                                
                                <TextArea
                                
                                 value = {values.description} name = "description" onChange = {handleChange} rows = "5" />
                                </Form.Item>


                                        <div className = "my-3" />

                                            <Row>
                                                <Col>
                                                    <Form.Item
                                                    name = "due_date"
                                                    rules = {[
                                                        {
                                                            required:"true",
                                                            message:"Due dat is required"
                                                        }
                                                    ]}
                                                        label="Due date"
                                                        //  label="Description"
                                                        //  label="Job Type"
                                                        validateStatus = {fieldErrors.due_date.length>=1?"error":"success"}
                                                        help = {fieldErrors.due_date.map(error=>error)}                                                           
                                                        >
                                                        <DatePicker name = "due_date" value ={dueDate} onChange = {handleDateChange} required />
                                                        </Form.Item>
                                                </Col>
                                                <Col>
                                                <Form.Item 
                                                name = "budget"
                                                rules ={[
                                                    {
                                                        required:true,
                                                        message:"Budget must be set"
                                                    }
                                                ]}
                                            validateStatus = {fieldErrors.budget.length>=1?"error":"success"}
                                            help = {fieldErrors.budget.map(error=>error)}   
                                                label = "Budget" >
                                                    <Input  onChange = {handleChange} name = "budget" value = {values.budget} required type = "number"/>
                                                </Form.Item>

                                                </Col>
                                            </Row>

                                    <Button onClick = {createJob}  style = {{width:"200px",color:"green",borderColor:"green",marginLeft:"20em"}} shape = "round" htmlType = "submit">Next</Button>
                    </Form> 
                  </div>







                <div hidden = {state.form_number !==2 || state.temp !==2  } className="website_info">
              
               <Form>
                   <h6 className = "text-center mt-2" >Website developemnt information</h6>
              <Divider/>
              <Form.Item
              rules= {[
                  {
                      required:true,
                      message:"Stack must be filled"
                  }
              ]}
                validateStatus = {fieldErrors.dev_type.length>=1?"error":"success"}
                help = {fieldErrors.dev_type.map(error=>error)}                                   


              label = "Stack" >
                  <Select value = {selects.dev_stack}  onChange = {selected=>{
                      setSelects({
                          ...selects,
                          dev_stack:selected
                      })
                  }} >
                      <Select.Option value = "FULL STACK" > Full stack </Select.Option>
                       <Select.Option value = "FRONTEND" > Frontend stack </Select.Option>
                        <Select.Option value = "BACKEND" > Backend stack </Select.Option>
                  </Select>
              </Form.Item>
              <Form.Item 
              
              rules= {[
                  {
                      required:true,
                      message:"Stack must be filled"
                  }
              ]}
                validateStatus = {fieldErrors.dev_type.length>=1?"error":"success"}
                help = {fieldErrors.dev_type.map(error=>error)}  
                
              label = "Development type">
                  <Select value = {selects.dev_type}  onChange = {selected=>{
                      setSelects({
                          ...selects,
                          dev_type:selected
                      })
                  }}
                  
                  >
                      <Select.Option value = "WEB DEVELOPMENT"  >Website developemnt</Select.Option>
                      <Select.Option value = "MOBILE APP DEVELOPMENT"  >Mobile App developemnt</Select.Option>
                  </Select>

              </Form.Item>
              <Form.Item 
                rules= {[
                    {
                        required:true,
                        message:"Most prefered technology must be filled"
                    }
                ]}
                    validateStatus = {fieldErrors.prefared_technologies.length>=1?"error":"success"}
                    help = {fieldErrors.prefared_technologies.map(error=>error)}  
              
              label = "Most prefered technology" >
                  <Input name = "prefered_tech" value = {values.prefered_tech} onChange = {handleChange} />
              </Form.Item>

                <Button onClick = {postInfo}  style = {{width:"200px",color:"green",borderColor:"green",marginLeft:"20em"}} shape = "round" htmlType = "submit">Next</Button>
               </Form> 
                 </div>





               <Form hidden = {state.form_number !==2 || state.temp !==3 } >
                   <h6 className = "text-center mt-2" >Graphic Design information</h6>
              <Divider/>
              <Form.Item
                rules= {[
                    {
                        required:true,
                        message:"Size of Project must be filled"
                    }
                ]}
                    validateStatus = {fieldErrors.size_of_project.length>=1?"error":"success"}
                    help = {fieldErrors.size_of_project.map(error=>error)}                
                    label = "Size of Project" >
                  <Select  value = {selects.project_size}  onChange = {selected=>{
                      setSelects({
                          ...selects,
                          project_size:selected
                      })
                  }}
                  
                  >
                      <Select.Option value = "A2" > A2 </Select.Option>
                       <Select.Option value = "A3" > A3 </Select.Option>
                        <Select.Option value = "A4" > A4 </Select.Option>
                        <Select.Option value = "A5" > A5 </Select.Option>
                  </Select>
              </Form.Item>
              <Form.Item
              label = "Specify Design Size" >
                  <Input name = "other_size_of_project" value = {values.other_size_of_project} onChange = {handleChange} />
              </Form.Item>
              <Form.Item
                rules= {[
                    {
                        required:true,
                        message:"Most design format must be filled"
                    }
                ]}
                    validateStatus = {fieldErrors.design_format.length>=1?"error":"success"}
                    help = {fieldErrors.design_format.map(error=>error)}  
              
              
              label = "Most design format">
                  <Select onChange = {(selected)=>{
                      setSelects({
                          ...selects,
                          design_format:selected
                      })
                  }} value = {selects.design_format} >
                      <Select.Option value = "PDF"  >PDF</Select.Option>
                      <Select.Option value = "JPEG"  >JPEG</Select.Option>
                      <Select.Option value = "VECTOR"  >VECTOR</Select.Option>
                  </Select>

              </Form.Item>


                <Button onClick = {postInfo} style = {{width:"200px",color:"green",borderColor:"green",marginLeft:"20em"}} shape = "round" htmlType = "submit">Next</Button>
               </Form> 





               <Form  hidden = {state.form_number !==2 ||  state.temp !==4} >
                   <h6 className = "text-center mt-2" >Event information</h6>
              <Divider/>
              <Form.Item
                rules= {[
                    {
                        required:true,
                        message:"Event type must be filled"
                    }
                ]}
                    validateStatus = {fieldErrors.event_type.length>=1?"error":"success"}
                    help = {fieldErrors.event_type.map(error=>error)}  
              
              label = "Event type" >
                  <Input name = "event_type" value = {values.event_type} onChange = {handleChange} />
              </Form.Item  >
                    <Form.Item 
                    rules= {[
                        {
                            required:true,
                            message:"Porducts needed must be filled"
                        }
                    ]}
                        validateStatus = {fieldErrors.products_needed.length>=1?"error":"success"}
                        help = {fieldErrors.products_needed.map(error=>error)}  
                    
                    label = "Products Needed" >
                  <Input name = "products_needed"  value = {values.products_needed} onChange = {handleChange} />
              </Form.Item>
                    <Form.Item 
                    
                    rules= {[
                        {
                            required:true,
                            message:"City must be filled"
                        }
                    ]}
                        validateStatus = {fieldErrors.city.length>=1?"error":"success"}
                        help = {fieldErrors.city.map(error=>error)}  
                    
                    label = "City of venue">
                <Input name = "city" value = {values.city} onChange = {handleChange} />

              </Form.Item>

               <Form.Item>
                <Row>
                    <Col>
                        <Form.Item 
                        
                            rules= {[
                                {
                                    required:true,
                                    message:"Longitude must be filled"
                                }
                            ]}
                                validateStatus = {fieldErrors.longitude.length>=1?"error":"success"}
                                help = {fieldErrors.longitude.map(error=>error)}  
                        
                        label = "Longitude">
                            <Input name = "longitude" value = {values.longitude} onChange = {handleChange}  type = "number"/>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item 
                        rules= {[
                            {
                                required:true,
                                message:"Latitude must be filled"
                            }
                        ]}
                            validateStatus = {fieldErrors.latitude.length>=1?"error":"success"}
                            help = {fieldErrors.latitude.map(error=>error)}  
                        label = "Latitude">
                            <Input name = "latitude" value = {values.latitude} onChange = {handleChange} type = "number"/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form.Item>

                <Button onClick = {postInfo}  style = {{width:"200px",color:"green",borderColor:"green",marginLeft:"20em"}} shape = "round" htmlType = "submit">Next</Button>
               </Form> 





                <Form  hidden = {state.form_number !==2 || state.temp !==5}>
                   <h6 className = "text-center mt-2" >Photography information</h6>
              <Divider/>
              <Form.Item 
              rules= {[
                  {
                      required:true,
                      message:"Event type must be filled"
                  }
              ]}
                validateStatus = {fieldErrors.event_type.length>=1?"error":"success"}
                help = {fieldErrors.event_type.map(error=>error)}   
              label = "Event type" >
                  <Input name = "event_type" value = {values.event_type} onChange = {handleChange}/>
              </Form.Item  >
                    <Form.Item 
                    rules= {[
                        {
                            required:true,
                            message:"Products needed must be filled"
                        }
                    ]}
                        validateStatus = {fieldErrors.products_needed.length>=1?"error":"success"}
                        help = {fieldErrors.products_needed.map(error=>error)}  
                    
                    label = "Products Needed" >
                  <Input name = "products_needed" value = {values.products_needed} onChange = {handleChange}/>
              </Form.Item>
                    <Form.Item 
                    rules= {[
                        {
                            required:true,
                            message:"City of venue must be filled"
                        }
                    ]}
                        validateStatus = {fieldErrors.city.length>=1?"error":"success"}
                        help = {fieldErrors.city.map(error=>error)}  
                    
                    
                    label = "City of venue">
                <Input name = "city" value = {values.city} onChange = {handleChange}/>

              </Form.Item>

               
                <Row>
                    <Col>
                            <Form.Item 
                        rules= {[
                            {
                                required:true,
                                message:"Longitude of venue must be filled"
                            }
                        ]}
                            validateStatus = {fieldErrors.longitude.length>=1?"error":"success"}
                            help = {fieldErrors.longitude.map(error=>error)}  
                        
                        label = "Longitude">
                            <Input name = "longitude" value = {values.longitude} onChange = {handleChange} type = "number"/>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item 
                    rules= {[
                        {
                            required:true,
                            message:"latitude of venue must be filled"
                        }
                    ]}
                        validateStatus = {fieldErrors.latitude.length>=1?"error":"success"}
                        help = {fieldErrors.latitude.map(error=>error)}  
                        
                        label = "Latitude">
                            <Input name = "latitude" value = {values.latitude} onChange = {handleChange} type = "number"/>
                        </Form.Item>
                    </Col>
                </Row>
           

                <Button onClick = {postInfo}  style = {{width:"200px",color:"green",borderColor:"green",marginLeft:"20em"}} shape = "round" htmlType = "submit">Next</Button>
               
               </Form> 


        <div hidden ={state.form_number !==3} className="payment">

        <h6 className = "text-center mt-2" >Payment information</h6>
        <p>A third party payment provider, paystatck is used for payment. Payment can be made with credit card and mobile money. Plaese go through the process to make payment and confirm payment after being redirected back to this site.</p>
        <p> NB: Fauilure to successfully make mapment will render  job posted inactive and hidden from freelancers. </p>
        <Button loading = {state.payment_loading} onClick = {initiatePayment}
         shape = "round"  style = {{width :"100%", color:"green",borderColor:"green"}} >Make Payment</Button>
        </div>
        </Modal>

        
    )
    const handleFailedModalCancel = ()=>{
        setState({
            ...state,
            payment_failed:false
        })
    }

//     const showFailedModal = ()=>{
//    setState({
//             ...state,
//             payment_failed:true
//         })
//     }

    const failed_modal = <Modal onCancel = {handleFailedModalCancel} visible = {state.payment_failed} 
    footer = {[]}
    >
        <Result 
        status = "error"
        title  = {state.error_message}
        />
    </Modal>
    return (
        <div>
            {handleFailure()}
            {handleSuccess()}
            {PostJobModal}
            {failed_modal}
            <Spin tip = "loading" spinning = {allJobsData.postloading}>            
               
              <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>Jobs</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <div>
                  

                  <div className="">
                        
                       
                        {/* <JobsCardSkeleton/> */}
                       
                       
                        {showItems()}

                        
                      
                  <div className="right-card">
                        {/* <JobsCardSkeleton/> */}
                  </div>
                          
                  </div>
                  
              </div>
            </div>
            </Spin>

        </div>
    )
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
        postedSuccess:(job)=>dispatch(postJobSuccess(job)),
        search: (query)=>dispatch(searchJobs(query)),
        paginate:(page_number)=>dispatch(paginate(page_number)),
        filter:(query)=>dispatch(filterJobs(query))
    } ;
}
export default connect(mapStateToProps,mapDispatchToProps)(JobsPart)
