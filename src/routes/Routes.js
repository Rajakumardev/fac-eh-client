import React, { Fragment } from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from '../screens/Home';
import About from '../screens/About';
import Room from '../screens/Room';

function Routes() {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/join/:roomid" component={Room}/>
            </Switch>
        </Fragment>
    )
}

export default Routes
