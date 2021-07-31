import React from 'react'
import Layout from '../../layout/insex'
import Banner from './components/banner'
import PhotographyProjectsPart from './components/photography-part'
import TopDesigners from './components/top-designers'
import TopDevelopersPart from './components/top_developers'
import TopPlanners from './components/top_planners'

const TopFreeLancersPage = () => {
    return (
        <div>
            <Layout>
            <Banner/>
            <PhotographyProjectsPart/>
            <TopDevelopersPart/>
            <TopDesigners/>
            <TopPlanners/>
       </Layout>
        </div>
    )
}

export default TopFreeLancersPage
