import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Layout from '../../layout/insex'
import AllPlanners from './components/all-event-planners'
import AllJobsPlanned from './components/all-planne-jobs'
import Couresel from './components/couresel'
import EventPlanners from './components/event-planners'
import EventPlanningJobs from './components/event-planning-jobs'
const EventPlanningServicePage = ({match}) => {
    return (
        <Layout>
            <Couresel/>
            <Switch>
                <Route path = {`${match.url}/all-jobs`} component = {AllJobsPlanned}/>
                <Route path = {`${match.url}/all-planners`} component = {AllPlanners}/>
                <Route exact path = {match.url}
                render = {()=>
                <>
                <EventPlanningJobs/>
                <EventPlanners/>
                </>}
                />

            </Switch>
          
            

        </Layout>
    )
}

export default EventPlanningServicePage
