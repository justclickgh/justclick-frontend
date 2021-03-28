import Layout from '../../layout/insex'
import Couresel from './componts/couresel'
import GraphicDesignerProjectsPart from './componts/Designer'
import DevelopmentProjectsPart from './componts/development-part'
import PhotographyProjectsPart from './componts/photography-part'
import PlanningProjectsPart from './componts/planner-part'
import SearchPart from './componts/sear-part'

const MainJobsPage = ()=>{

    return (
        <Layout>
            <Couresel/>
            <SearchPart/>
            <PhotographyProjectsPart/>
            <GraphicDesignerProjectsPart/>
            <DevelopmentProjectsPart/>
            <PlanningProjectsPart/>


        </Layout>


    )
}

export default MainJobsPage