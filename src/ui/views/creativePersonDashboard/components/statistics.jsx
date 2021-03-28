import { Card, Col, Row, Skeleton } from 'antd'
import React from 'react'
import { connect } from 'react-redux';

const StatisticsPart = ({jobsData}) => {
    return (
        <div>
            <Row>
                <Col className = "m-2" xs = "12" sm = "6" lg = "4" >
                    <Card title = " Total number of jobs" >
                        <Skeleton  loading = {jobsData.loading}  paragraph={{ rows: 1 }}>
                            <h3 className = "text-center">{jobsData.jobs.length}</h3>
                        </Skeleton>
                            
                    </Card>
                </Col>
                <Col className = "m-2" xs = "12" sm = "6" lg = "4" >
                    <Card title = "Number of Completed Jobs" >
                    <Skeleton  loading = {jobsData.loading}  paragraph={{ rows: 1 }}>
                            <h3 className = "text-center">{jobsData.jobs.length}</h3>
                        </Skeleton>                    </Card>
                </Col>
                <Col className = "m-2" xs = "12" sm = "6" lg = "4" >
                    <Card title = " Total number of Pending jobs" >
                    <Skeleton  loading = {jobsData.loading}  paragraph={{ rows: 1 }} >
                            <h3 className = "text-center">{jobsData.jobs.length}</h3>
                        </Skeleton>                    </Card>
                </Col>
                <Col className = "m-2" xs = "12" sm = "6" lg = "4" >
                    <Card title = " Total number of  jobs" >
                    <Skeleton loading = {jobsData.loading}  paragraph={{ rows: 1 }} >
                            <h3 className = "text-center">{jobsData.jobs.length}</h3>
                        </Skeleton>                    </Card>
                </Col>
                <Col className = "m-2" xs = "12" sm = "6" lg = "4" >
                    <Card title = " Total number of Canceled" >
                    <Skeleton  loading = {jobsData.loading}  paragraph={{ rows: 1 }}>
                            <h3 className = "text-center">{jobsData.jobs.length}</h3>
                        </Skeleton>                                                                         </Card>
                </Col>
            </Row>
            
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
       
    } ;
  }
  export default connect(mapStateToProps,mapDispatchToProps)(StatisticsPart)

