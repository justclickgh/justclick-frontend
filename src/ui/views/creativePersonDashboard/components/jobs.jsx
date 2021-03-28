import { Breadcrumb, Button,  List,  Skeleton,  Spin } from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import React, { useState } from 'react'
import '../assets/header.css'
import 'antd/dist/antd.css';
import JobsCardSkeleton from './job-card_skeleton';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCurUserJobs } from '../../../../redux/actions/cur_user_jobs_actions';
// import { useEffect } from 'react';
import JobsFormModal from './post-job-modal';
import {postJob} from '../../../../redux/actions/job_actions'
import {useForm} from '../../../../utils/hooks/use_form'
// import JobsCard from './job-card';
import EmptyComponent from '../../../components/emptyComponent';
const JobsPart = ({jobsData,postJob,allJobsData,match}) => {
    const [values,handleChange] = useForm({
        title:"",
        description:"",
        posted_by:"",
        job_category:"",
    })
    const [dueDate,setDueDate] = useState(null)
    const [dueDateString,setDueDateString] = useState("")
    const [jobsCategory,setJobCategory] = useState("");
    const handleJobCategoryChange = (selected)=>{
        setJobCategory(selected)
    } 
    const handleDateChange = (date,string)=>{
        console.log(string)
        console.log(date)
        setDueDate(date)
        setDueDateString(string)
    }
    // console.log(jobsData);
    // useEffect(() => {
    //     getJobs()
       
    // }, [])
    const [visible,setVisible] = useState(false)
    const showModal = () => {
        setVisible(true)
      };
    const  handleCancel = () => {
        setVisible(false)
      };
 


      const handleSubmit = (e)=>{
          console.log();
        e.preventDefault(values.job_category)
        const data = {
            title: values.title,
            description: values.description,
            // due_date: values.due_date,
            job_category: jobsCategory,
            due_date: dueDateString           
        }
       postJob(data)
        
    }
    // const handleLoadFailedMessage = ()=>{
    //     if(jobsData.failed){
    //         message.error(jobsData.message)
    //     }
    // }
    // const handleSuccess = ()=>{
    //     if(allJobsData.postSuccess){
            
    //         setVisible(false)
    //         message.success("You have successfully posted a job")
    //     }
    // }
    const showItems = ()=>{
        if(jobsData.loading){
            return <JobsCardSkeleton/>
        }
        else{
            if(jobsData.jobs.length === 0){
                return <div  style = {{ margin:"0 auto" }} >
                    <EmptyComponent match = {match}/>
                </div>
            }else{
                return (
                <>
                <Spin tip = "deleting" spinning = {jobsData.deleteLoading}>
                {/* <Row>
                    
                    {jobsData.jobs.map(job =><Col className = "py-2" xs = "12" sm = "6" lg = "4"  >
                        <JobsCard key = {job.job_id} job = {job} />
                    </Col>)}
                    <Col xs = "12" sm = "12">
                    <Pagination hideOnSinglePage = {true} onChange = {handlePaginationChange} defaultCurrent={1} total={jobsData.jobs.length} />
                    </Col>
                   
                </Row> */}
                <List   className="demo-loadmore-list"
                loading = {jobsData.loading}
                itemLayout="horizontal"
                dataSource = {jobsData.jobs}
                renderItem = {item=>(
                    <List.Item>
                        <Skeleton loading = {jobsData.loading} >

                        </Skeleton>
                    </List.Item>
                )}
                
                >
                    
                </List>
                </Spin>
                </>
                )
            }
        }
    }
    return (
        <div>
           
            <Spin tip = "loading" spinning = {allJobsData.postloading}>            
                <JobsFormModal
                 visible = {visible}
                  handleCancel = {handleCancel}
                  handleChange = {handleChange}
                  values = {values}
                  handleSubmit = {handleSubmit}
                  handleDateChange = {handleDateChange}
                  dueDate = {dueDate}
                  handleJobCategoryChange = {handleJobCategoryChange}
                  job_category = {jobsCategory}
                  

                  
                  />
              <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>Jobs</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Container>
                  
                  <div className="top flex">
                      
                      <div className="top-item-2">
                      <Button style = {{textAlign:"center",background:"green",color:"white"}} icon = {<PlusOutlined style = {{color:"white"}} /> } color = "blue" size = "large" shape = "round" onClick = {showModal} >Add Job</Button>
                      </div>
                      <div className="top-item-1">
                      <h3>List of Jobs</h3>
                      </div>

                      
                  </div>

                  <div className="flex content">
                        
                       
                        {/* <JobsCardSkeleton/> */}

                        {showItems()}

                        
                      
                  <div className="right-card">
                        {/* <JobsCardSkeleton/> */}
                  </div>
                          
                  </div>
                  
              </Container>
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
        postJob : (data)=>dispatch(postJob(data))
    } ;
}
export default connect(mapStateToProps,mapDispatchToProps)(JobsPart)
