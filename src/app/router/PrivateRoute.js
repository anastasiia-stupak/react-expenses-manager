import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import Header from '../components/Header';

function PrivateRoute({ isAuthenticated, component: Component, ...rest }) {
	return (
		<Route {...rest}
		       component={
			       (props) => (
			       	isAuthenticated
			        ?
			        <div className="container">
				        <Header/>
				        <Component {...props}/>
			        </div>
			        :
			        <Redirect to="/"/>
			       )
		       }
		/>
	)
}

const mapDispatchToProps = (state) => ({
	isAuthenticated: !!state.auth.uid
});

export default connect(mapDispatchToProps, null)(PrivateRoute);