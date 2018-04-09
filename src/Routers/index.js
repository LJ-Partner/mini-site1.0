import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import AsyncComponent from '../AsyncComponent.js'

import Home from "../Containers/Home/Home.js"
import NotFound from "../Components/NotFound.js"

export default(
    <Router>
        <Switch>
            <Route exact path='/:id/website' component={Home}/>

            <Route path='*' component={NotFound}/>
        </Switch>
    </Router>
);
