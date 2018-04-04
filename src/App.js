import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import LazyBundle from './LazyBundle.js'
import routes from './Routers/index.js'
//import axios from 'axios';

export default class App extends React.Component {
    render() {
        return (routes);
    }
}