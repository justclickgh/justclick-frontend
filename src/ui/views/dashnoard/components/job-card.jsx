import { Button, Card, message, Popover } from 'antd'
import React, { useState } from 'react'
import { EditOutlined, EllipsisOutlined,DeleteOutlined } from '@ant-design/icons';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { delteCuruserJob } from '../../../../redux/actions/cur_user_jobs_actions';
import EditJobFormModal from './edit-job-modal'
import { useForm } from 'antd/lib/form/Form';

const JobsCard = ({job,deleteJob,jobsData}) => {
   const [visible,setVisible] = useState(false)
   const [editVisble,setEditVisible] = useState(false)
   const [dueDate,setDueDate] = useState(null)
   const [dueDateString,setDueDateString] = useState("")
   const [jobsCategory,setJobCategory] = useState(job.job_category);

   const handleDateChange = (date,string)=>{
    console.log(string)
    console.log(date)
    setDueDate(date)
    setDueDateString(string)
}
const handleJobCategoryChange = (selected)=>{
    // console.log(e);
    setJobCategory(selected)
} 
    const handleClose = ()=>{
        message.error("deletion canceled")
        setVisible(false)
    }
    const [values,handleChange] = useForm({
        title:job.title,
        description:job.description,
        posted_by:"",
        job_category:job.description,
        
    })
   const handleSuccess = ()=>{
        deleteJob(job)
        setVisible(false)
    }
    const handlePopupChange = ()=>{
        setVisible(!visible)
    }
    const hadnleDeleteSuccess = ()=>{
        if(jobsData.deleteSuccess){
            message.success("You have succesfully deleted a job")
        }
    }


const handleEditSubmit = ()=>{
    message.success("Submitted")

}
const handleCancel = ()=>{
setEditVisible(false)
message.error('Canceled editing')
}
const handleOk = ()=>{

}



const handleOpenModal = ()=>{
    setEditVisible(true)
}

    hadnleDeleteSuccess()
    return (
        <>
        <EditJobFormModal
        visible = {editVisble}
        onOk = {handleOk}
        handleCancel = {handleCancel}
        handleSubmit = {handleEditSubmit}
        values = {values}
        dueDate = {dueDate}
        job_category = {jobsCategory}
        handleJobCategoryChange = {handleJobCategoryChange}
        />
  
        <Card title = {job.title} actions = {[
            
            <Popover content={
                <div style = {{textAlign:"center"}}>
                    <Row>
                        <Col xs = "12" sm = "12">
                        <p>Are you sure you want to delete this job</p>
                        </Col>
                        <Col xs = "6" sm = "6">
                            <Button onClick = {handleSuccess} style = {{color:"red"}}>Yes</Button>
                        </Col>
                        <Col className = "ml-auto" xs = "6" sm = "6">
                            <Button onClick = {handleClose} >No</Button>
                        </Col>

                    </Row>
                    
                </div>
            } title={ <p style ={{color:"red"}} className = "text-center">Delete job</p> } onVisibleChange = {handlePopupChange} visible = {visible}  trigger="click">
            <DeleteOutlined  key="delete" style = {{color:"red"}} />

          </Popover>,
            <EditOutlined onClick = {handleOpenModal} key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
        ]}>
            <Row>
                <Col className = "mb-3" lg = "12" xs= "12" sm = "12">
                    <p>{job.description}</p>
                </Col>
                <Col xs= "7" sm = "7">
                    <small>Posted at: 16th October, 2020</small>
                </Col>
                <Col className = "ml-auto pr-5" xs= "5" sm = "5">
                    <small>Status : <span style = {{color:"green"}} >Active</span></small>
                </Col>
            </Row>
            
        </Card>
        </>
    )
}
function mapStateToProps(state) {
    return {
        jobsData:state.curUserJob
    };
}
function mapDispatchToProps(dispatch) {
    return {
        deleteJob: (job)=>dispatch(delteCuruserJob(job))
    };
}
export default connect(mapStateToProps,mapDispatchToProps) (JobsCard)
