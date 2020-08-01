import React, { Fragment } from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from '../screens/Home';
import About from '../screens/About';

function Routes() {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </Switch>
        </Fragment>
    )
}

export default Routes
