import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Login from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';

//routes
//private only
import PrivateRoute from './PrivateRoute'
//public only
import PublicRoute from './PublicRoute'

function AppRouter() {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<PublicRoute exact path="/" component={Login}/>
					<PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
					<PrivateRoute path="/create" component={AddExpensePage}/>
					<PrivateRoute path="/edit/:id" component={EditExpensePage}/>
					<Route component={NotFoundPage}/>
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default AppRouter;