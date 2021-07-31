import { Breadcrumb, Button, Card,  Divider,  Input, List,    Select,  Skeleton,  Spin, Tooltip} from 'antd'
import {DeleteOutlined, EditOutlined,  PlusCircleOutlined} from '@ant-design/icons'
import React from 'react'
import '../assets/header.css'
import 'antd/dist/antd.css';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { filterJobs, getCurUserJobs, paginate, searchJobs } from '../../../../redux/actions/cur_user_jobs_actions';
import {postJob} from '../../../../redux/actions/job_actions'

import {postJobSuccess} from '../../../../redux/actions/job_actions'
// import Checkout from '../../payment/pay-hook';
// import confirm from 'antd/lib/modal/confirm';
import '../assets/mult_step_form.css'
import { Link } from 'react-router-dom';




const JobsPart = ({jobsData,allJobsData,filter,search}) => {
 
    

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
                            <Link to = "/dashboard/jobs/post_job" >  
                            
                            <Button shape = "circle" style = {{border:"none"}}  >
                                <PlusCircleOutlined style = {{ color:"green" ,fontSize:"1.5rem"}} />
                            </Button> 
                                        </Link>
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
                        pagination = {{
                            pageSize:10,
                        }}
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

                                </Card>
                           
            
                </Spin>
                </>
                )
            
        
    }
 
   
    // const handleFailedModalCancel = ()=>{
    //     setState({
    //         ...state,
    //         payment_failed:false
    //     })
    // }

//     const showFailedModal = ()=>{
//    setState({
//             ...state,
//             payment_failed:true
//         })
//     }

    // const failed_modal = <Modal onCancel = {handleFailedModalCancel} visible = {state.payment_failed} 
    // footer = {[]}
    // >
    //     <Result 
    //     status = "error"
    //     title  = {state.error_message}
    //     />
    // </Modal>
    return (
        <div>
            {/* {handleFailure()} */}
            {/* {handleSuccess()} */}
            {/* {failed_modal} */}
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
