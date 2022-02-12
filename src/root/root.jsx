import React from 'react'
import Navbar from '../components/navbar/navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Explore from '../components/generic/explore/explore'
import Home from '../components/home/home'
import Stats from '../components/generic/stats/stats'
import Resources from '../components/generic/resources/resources'
import Create from '../components/generic/create/create'
import NotFound from '../components/generic/notFound'

const Root = () => {
  return (
    <div>
        <Router>
            <Routes>
              <Route element={<Navbar />}>
                <Route path={'/'} element={<Home />}/>
                <Route path={'/explore'} element={<Explore />}/>
                <Route path={'/stats'} element={<Stats />} />
                <Route path={'/resources'} element={<Resources />} />
                <Route path={'/create'} element={<Create />} />
                <Route path={'*'} element={<NotFound />}/>
              </Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Root