import { DeleteOutlined } from '@ant-design/icons'
import { Card, Divider, Empty, Skeleton, Tag ,Button} from 'antd'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

const CompletedJobsPart = ({jobsData}) => {    

    return (
        <div>
            {console.log(jobsData.completedjobs.length)}
            <Card className = "my-5" title = "Applied Jobs">
                <Skeleton loading = {jobsData.getPendingLoading} >
                   
                <Row>
                {
                        jobsData.completedjobs.length >= 0?
                        <>
                        <Empty>
                            <p>You have not completed any job </p>
                        </Empty>
                        </>:
                        jobsData.completedjobs.map(job=>(
                            <Col className = "my-2" xs = "12" sm = "6" md = "6" lg= "4" >
                                <Card title = {job.applied_instance.job.title}>
                                    <p>{job.job.description}</p>
                                    <p>Job Category - {job.applied_instance.job.job_category} </p>
                                    <p>Budget - {`${job.applied_instance.job.budget} GHS `}</p>
                                    <p>  Due date - <b> {job.applied_instance.job.due_date}</b></p>
                                   
                                    <Divider/>
                                    <Tag color = "green" >Not Approved</Tag>
                                    <Tag color = "green" >Payment Complted</Tag>
                                    <Button style ={{border:"none",marginLeft:"1.5em"}} shape = "circle">
                                        <DeleteOutlined style = {{color:"red",fontSize:"1.3rem"}} />
                                    </Button>
                                </Card>
                    
                        </Col>
                        ))
                    }
                    

                    
                </Row>
                </Skeleton>
            </Card>
            
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        jobsData:state.currentFreelancerJobStatus
    }
}
export default connect(mapStateToProps) (CompletedJobsPart)
