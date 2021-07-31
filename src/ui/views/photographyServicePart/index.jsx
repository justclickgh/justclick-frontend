import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Layout from '../../layout/insex'
import AllPhotographers from './components/all_photographers'
import AllPhotographs from './components/all_photographs'
import Couresel from './components/couresel'
import Photographers from './components/photographers'
import PhotographyJobs from './components/photography-jobs'

const PhotographyServicePart = ({match}) => {
    return (
        <Layout>
            <Couresel/>
            <Switch>
                <Route path = {`${match.url}/list-photographers`} component ={AllPhotographers} />
                <Route path = {`${match.url}/list-photographs`} component ={AllPhotographs} />
                <Route exact path ={`${match.url}`} render  = {()=>(
                    <>
            <PhotographyJobs/>
            <Photographers/>
                    </>
                )} />
            
            </Switch>

            

        </Layout>
    )
}

export default PhotographyServicePart
