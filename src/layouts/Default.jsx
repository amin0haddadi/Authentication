import { Footer, Header, ProtectedRoute, Sidebar } from '../components'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AppRoutes from '../routes'

const DefaultLayout = (props) => {
  return (
    <div
      id="main-wrapper"
      data-layout="vertical"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
      data-boxed-layout="full"
    >
      <Header />
      <Sidebar {...props} routes={AppRoutes} />
      <div className="page-wrapper d-block">
        <div className="page-content container-fluid">
          <Switch>
            {  AppRoutes.map((item, index) =>

(

  item.private ? <ProtectedRoute key={index} props={item} /> :

    <Route key={index} path={item.path} component={item.component} />

)

)}
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default DefaultLayout
