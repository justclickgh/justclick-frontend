import React from 'react'
import HowItWorks from '../../components/how_it_works'
// import HowItWorks2 from '../../components/how_it_works_2'

import IntroPart from '../../components/intro_part'
import ServicesPart from '../../components/servicesPart'
import WhyChooseUsePart from '../../components/why_choose_us_part'
import OurPrevWorkPart from '../../components/rev_work_part/index'
import Layout from '../../layout/insex'
import TestimonialPart from '../../components/testimonial-part'

const HomePage = () => {
    return (
        <Layout>
        <IntroPart/>
      <ServicesPart/>
      <WhyChooseUsePart/>
      {/* <StepsPart/>
      <StepsPart2/> */}
      <HowItWorks/>
      {/* <HowItWorks2/> */}
      <TestimonialPart/>
      <OurPrevWorkPart/>
        </Layout>
    )
}

export default HomePage
