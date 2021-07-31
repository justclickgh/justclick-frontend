import React from 'react'
import HowItWorks2 from '../../components/how_it_works_2'
import ServicesPart from '../../components/servicesPart'
import Layout from '../../layout/insex'
import IntroPart from './components/top-part'

const FreelancerPage = () => {
    return (
        <Layout>
            <IntroPart/>
            <ServicesPart/>
            <HowItWorks2/>
        </Layout>
    )
}

export default FreelancerPage
