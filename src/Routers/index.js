import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import AsyncComponent from '../AsyncComponent.js'

const Home = AsyncComponent(() => import("../Containers/Home.js"));
const NotFound = AsyncComponent(() => import("../Components/NotFound.js"));

export default(
    <Router>
        <Switch>
            <Route exact path='/:id/website' component={Home}/>

            <Route path='*' component={NotFound}/>
        </Switch>
    </Router>
);
