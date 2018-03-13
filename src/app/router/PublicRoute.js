import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import Header from '../components/Header';

function PublicRoute({ isAuthenticated, component: Component, ...rest }) {
	return (
		<Route {...rest}
		       component={
			       (props) => (
				       isAuthenticated
				       ?
				       <Redirect to="/dashboard"/>
				       :
				       <Component {...props}/>
			       )
		       }
		/>
	)
}

const mapDispatchToProps = (state) => ({
	isAuthenticated: !!state.auth.uid
});

export default connect(mapDispatchToProps, null)(PublicRoute);