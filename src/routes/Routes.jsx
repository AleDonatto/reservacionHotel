import React from 'react'
import { BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom'
import { Home } from '../components/Home'
import { ViewReservacion } from '../components/ViewReservacion'

export const Routes = () => {
    return (
        
        <Router>
            <Switch>
                <Route exact path="/reservar">
                    <ViewReservacion />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Redirect to="/"></Redirect>
            </Switch>
        </Router>
    )
}
