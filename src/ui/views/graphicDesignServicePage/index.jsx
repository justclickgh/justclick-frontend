import React from 'react'
import {Switch,Route} from 'react-router-dom'
import PastJobsPart from './compnents/part-jobs-part'
import TopPart from './compnents/top-part'
import Layout from '../../layout/insex'
import DesignersPart from './compnents/designers_part'
import AllJobsPart from './compnents/all-jobs-part'
const GraphicDesignServicePage = ({match}) => {
    return (
        <div>
            <Layout>
            <TopPart/>
            <Switch>
                <Route path = {`${match.url}/all-jobs`} component = {AllJobsPart} />
                <Route exact path ={match.url} render = {()=>
                <>
                    <PastJobsPart/>
                    <DesignersPart/>
                </> 
                } />
            </Switch>

            </Layout>
            

            
        </div>
    )
}

export default GraphicDesignServicePage
