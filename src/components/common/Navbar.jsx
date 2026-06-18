import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm mb-5">
  <div className="container-fluid">
    <Link className="navbar-brand px-3" to="/">CryptoCurrency</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item px-3">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
         <li className="nav-item px-3">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
         <li className="nav-item px-3">
          <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
     </ul>
     </div>
     <div className="d-flex px-2">
       <button className='btn btn-primary' onClick={() => navigate("/login")}>Login</button>
     </div>
 
    
  </div>
</nav>
  )
}

export default Navbar
