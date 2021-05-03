import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import getIsAuth from '../utils/getIsAuth'
import AssetOwnerDashbard from './views/assetOwnerDashboard'
import CreativePersonDashboard from './views/creativePersonDashboard'
import DashBoard from './views/dashnoard/index'

const ProtectedDashboardRoutes = ({ appState, component, ...rest }) => {
  
    return (
        <Route
            
            {...rest}
            render={(props) => {
                if (getIsAuth()) {
                    return appState.userType === "is_freelancer" ? <CreativePersonDashboard {...props} />
                        : appState.userType === "is_assset_owner" ? <AssetOwnerDashbard {...props} />
                            : <DashBoard {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: "/login",
                            state: props.location
                        }
                    } />
                }

            }}

        />


    )
}
const mapStateToProps = state => {
    return {
        appState: state.appState
    }
}

export default connect(mapStateToProps)(ProtectedDashboardRoutes)
