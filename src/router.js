import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/index'
import BeerItem from './components/BeerItem'

const router = (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/beer/:id" component={BeerItem} />
    </BrowserRouter>
);

export default router;