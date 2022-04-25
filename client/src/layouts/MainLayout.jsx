import React from 'react'
import MyNavbar from './MyNavbar'
import MyFooter from './MyFooter'

const MainLayout = props => {
  return (
    <>
    <MyNavbar/>
    <div className="h-100">
      { props.children }
    </div>
    <MyFooter/>
    </>
  )
}

export default MainLayout