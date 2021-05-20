import React from 'react'
import { BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom'
import { Home } from '../components/Home'
import { ViewHabitacion } from '../components/ViewHabitacion'

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/habitaciones">
                    <ViewHabitacion />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Redirect to="/home"></Redirect>
            </Switch>
        </Router>
    )
}
