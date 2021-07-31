import React from 'react'
import {
    Modal,
    Form,
    Input,
    Button,
    
    Select,
    DatePicker,
    
  } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { connect } from 'react-redux';

const EditJobFormModal = (props) => {

  

    
    return (
        <div>
        
        <Modal
          visible={props.visible}
          title="Add a job"
          onOk={props.handleOk}
          onCancel={props.handleCancel}
          footer={[
            <Button key="back" onClick={props.handleCancel}>
              Cancel
            </Button>,
            <Button loading = {props.jobsData.postloading} htmlType = "submit" form = "postForm" key = "submit" type="primary" onSubmit = {props.handleSubmit} >
              Submit
            </Button>,
          ]}
        >
        <Form
        onSubmitCapture = {props.handleSubmit}
        id = "postForm"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: "middle" }}
        
        size={"middle"}
      >
       
        <Form.Item
         validateStatus = {props.jobsData.postMessage.title?"error":"success"}
          help = {props.jobsData.postMessage.title?props.jobsData.postMessage.title.map(error=>error):""} 
          label="Job title"
        >
        
          <Input name = "title" value = {props.values.title} onChange = {props.handleChange} required />
        </Form.Item>
        
        <Form.Item
         label="Job Type"
         validateStatus = {props.jobsData.postMessage.job_category?"error":"success"}
         help = {props.jobsData.postMessage.job_category?props.jobsData.postMessage.job_category.map(error=>error):""} 
         >
          <Select se onChange = {props.handleJobCategoryChange} value = {props.job_category}>
            <Select.Option value="GD">Graphic design</Select.Option>
            <Select.Option value="PG">Photography</Select.Option>
            <Select.Option value="MD">Mobile/Web Design</Select.Option>
            <Select.Option value="EP">Event Planning</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
         label="Description"
         label="Job Type"
         validateStatus = {props.jobsData.postMessage.description?"error":"success"}
         help = {props.jobsData.postMessage.description?props.jobsData.postMessage.description.map(error=>error):""} 
         >
         
          <TextArea value = {props.values.description} name = "description" onChange = {props.handleChange} rows = "5" required />
        </Form.Item>
        
        <Form.Item
         label="Due date"
         label="Description"
         label="Job Type"
         validateStatus = {props.jobsData.postMessage.due_date?"error":"success"}
         help = {props.jobsData.postMessage.due_date?props.jobsData.postMessage.due_date.map(error=>error):""} 
         
         >
          <DatePicker required name = "due_date" value ={props.dueDate} onChange = {props.handleDateChange} required />
        </Form.Item>
      
      </Form>
        </Modal>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        jobsData: state.jobs
    };
}
function mapDispatchToProps(dispatch) {
    return{
        // postJob : (data)=>dispatch(postJob(data))
    } ;
}
export default connect(mapStateToProps,mapDispatchToProps)(EditJobFormModal)


