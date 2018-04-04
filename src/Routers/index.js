import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from '../Containers/Main.js';
import NotFound from '../Components/NotFound.js';
import LazyBundle from '../LazyBundle.js'
const lazyLoadComponent = (comp) => (props) => (
    <LazyBundle load={comp}>
      {(Container) => <Container {...props}/>}
    </LazyBundle>
  )
export default(
    <Router>
        <Switch>
            <Route exact path='/' component={Layout}/>

            <Route path='*' component={lazyLoadComponent(NotFound)}/>
        </Switch>
    </Router>
);
