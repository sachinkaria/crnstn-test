import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/index'

const router = (
    <BrowserRouter>
        <Route path="/" component={Home} />
    </BrowserRouter>
);

export default router;