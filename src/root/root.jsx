import React from 'react'
import Navbar from '../components/navbar/navbar'
import { BrowserRouter as Router } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Router>
            <Navbar /> 
        </Router>
    </div>
  )
}

export default Root