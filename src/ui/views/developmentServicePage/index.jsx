import React from 'react'
import PastJobsPart from './compnents/part-jobs-part'
import TopPart from './compnents/top-part'
import Layout from '../../layout/insex'
import DesignersPart from './compnents/developers_part'
const DevelopmentServicePage = () => {
    return (
        <div>
            <Layout>
            <TopPart/>
            <PastJobsPart/>
            <DesignersPart/>
            </Layout>
            

            
        </div>
    )
}

export default DevelopmentServicePage
