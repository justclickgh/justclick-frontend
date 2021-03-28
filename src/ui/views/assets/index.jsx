import React from 'react'
import Layout from '../../layout/insex'
import {Route,Switch} from 'react-router-dom'
import GettingStarted from './components/getting-started'
import DesignTemplate from './components/design-templat'
import UiUxDesignPart from './components/ui-ux-design'
import SourceCodes from './components/source-codes'
import SourceDetailView from './components/souce_code_detail_view'
import Photo from './components/photo'
import PhotoDetail from './components/photo-detail'
const Accets = ({match}) => {
    return (
       <Layout>
           <Switch>

               <Route exact path = {`${match.url}/graphic-design-template`} component = {DesignTemplate} />
                <Route path = {`${match.url}/ui-ux-designs`} component = {UiUxDesignPart} />
                <Route path = {`${match.url}/source-codes/:code_id`} component = {SourceDetailView} />
                <Route path = {`${match.url}/source-codes`} component = {SourceCodes} />
                 <Route path = {`${match.url}/photos/:photo_id`} component = {PhotoDetail} />
                 <Route path = {`${match.url}/photos`} component = {Photo} />
               <Route path = {`${match.url}/`} component = {GettingStarted} />

           </Switch>

       </Layout>
    )
}

export default Accets
