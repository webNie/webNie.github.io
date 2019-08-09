import React, { Component } from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Getinto from './getinto'
import Home from './zhuce'
import Denglu from './denglu';

export default class Html extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path='/' exact component={Getinto}/>
                <Route path='/home' component={Home}/>
                <Route path='/denglu' component={Denglu}/>
            </BrowserRouter>
        )
    }
}
