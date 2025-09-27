import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
let Home = React.lazy(() => import("../pages/Home"))
let About = React.lazy(() => import("../pages/About"))
let Contact = React.lazy(() => import("../pages/Contact"))
let PageNotFound = React.lazy(() => import("../pages/PageNotFound"))
let Login = React.lazy(() => import("../pages/Login"))
let Register = React.lazy(() => import("../pages/Register"))
let Unauthorized = React.lazy(() => import("../pages/Unauthorized"))
let ForgotPassword = React.lazy(() => import("../pages/ForgotPassword"))
let DashBoard = React.lazy(() => import("../pages/DashBoard"))
// let PrivateRoutes = React.lazy(() => import("../routes/PrivateRoutes"))
import PrivateRoutes from "../routes/PrivateRoutes"
import PublicRoutes from "../routes/PublicRoutes"
import AuthListener from '../store/authenticationReducers/AuthListener'

const AppRoutes = () => {
  return (
    <>
    {/* Firebase Auth state listener */}
      <AuthListener />
    <Suspense fallback={<h6>Loading...</h6>}>
      <Routes>
      {/* public routes that everyone can access */}
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<PublicRoutes><Login/></PublicRoutes>} />
      <Route path='/register' element={<PublicRoutes><Register/></PublicRoutes>} />
      <Route path='/forgot-password' element={<PublicRoutes><ForgotPassword/></PublicRoutes>} />

      {/* Private routes: only logged in user can access */}
      <Route path='/dashboard' element={<PrivateRoutes><DashBoard/></PrivateRoutes>} />

      {/* Special Routes */}
          <Route path="/unauthorized" element={<Unauthorized />} />
      
      {/* universal route accessible to everyone by default */}
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    </Suspense>
    </>
  )
}

export default AppRoutes
