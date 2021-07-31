import React from 'react'
import { Redirect } from 'react-router-dom'

const DashboradRedirect = () => {
  const getCurUserType = () => {
    let user_type = null
    try {
      user_type = JSON.parse(localStorage.getItem('user_type'))
    } catch (error) {
      user_type = null
    }
    return user_type
  }

  console.log(getCurUserType());

  const getDashboardTemplate = () => {
    const user_type = getCurUserType()
    if (user_type !== null) {
      console.log(user_type);
      if (user_type === "freelancer") {
        return '/freelancer-dashboard'
      } else if (user_type === "asset_owner") {
        return '/asset-owner-dashboard'
      } else {
        return '/asset-owner-dashboard'
      }

    }
  }


  return <Redirect to={getDashboardTemplate()} />
}

export default DashboradRedirect
