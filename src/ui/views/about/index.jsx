import React from 'react'
import CustomSteps from '../../../utils/ui_utils/steps'
import AboutPart from '../../components/aboutPart'
import Layout from '../../layout/insex'
const About = () => {
    return (
        <div>
            <Layout>
                <AboutPart/>
                <CustomSteps/>
            </Layout>
        </div>
    )
}

export default About
