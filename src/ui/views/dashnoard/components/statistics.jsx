import { Card,Skeleton, Statistic } from 'antd'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import './style.css'
const StatisticsPart = ({statisticsData,jobsData}) => {
    return (
        <div>
            <Card  className = "my-5" title = "Posted Jobs Statistics" >
                <Skeleton loading = {statisticsData.fetch_loading} >
                    <Container>
                    <Row>
                        <Col sm = "4"  xs = "12" className = " text-center mt-2 "  >
                            <Card className = "statistics-card"  >
                                <Statistic title = "All Jobs Posted " value = {statisticsData.total_number_of_jobs} />
                            </Card>
                        </Col>
                        <Col sm = "4"  xs = "12" className = " text-center mt-2 "  >
                            <Card className = "statistics-card"  >
                                <Statistic title = "All Active Jobs" value = {jobsData.jobs.filter(job=>job.is_active).length} />
                            </Card>
                        </Col>
                        <Col sm = "4"  xs = "12" className = " text-center mt-2 "  >
                           <Card className = "statistics-card"  >
                                <Statistic title = "All Pending job request" value = {statisticsData.all_pending_jobs} />
                            </Card>
                        </Col>
                        <Col sm = "4"  xs = "12" className = " text-center mt-2 "  >
                           <Card className = "statistics-card"  >
                                <Statistic title = "All Acpted job request" value = {statisticsData.number_of_accepted} />
                            </Card>
                        </Col>
                        <Col sm = "4"  xs = "12" className = " text-center mt-2 "  >
                           <Card className = "statistics-card"  >
                                <Statistic title = "All Complted request" value = {statisticsData.all_freelancer_completed} />
                            </Card>
                        </Col>
                        <Col sm = "4"  xs = "12" className = " text-center mt-2 "  >
                           <Card className = "statistics-card"  >
                                <Statistic title = "All Confirm Completed" value = {statisticsData.all_confirmed_completed} />
                            </Card>
                        </Col>
                    </Row>

            </Container>
                </Skeleton>
            </Card>
            
        </div>
    )
}


function mapStateToProps(state) {
    return {
        statisticsData:state.user_job_statistics,
        jobsData: state.curUserJob
    };
  }

  export default connect(mapStateToProps,{})(StatisticsPart)

