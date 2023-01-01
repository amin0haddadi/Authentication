import { useAuth } from '../contexts/Auth'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'


const ProtectedRoute = (props) => {
  const { user } = useAuth()

   if(user.loggedIn) {
     return <Route path={props.path} component={props.component}/>
   }
   else{
    return <> <Redirect to='/login' />  </>
   }
}

export default ProtectedRoute
