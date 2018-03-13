import React from 'react';
import { connect } from 'react-redux'

//actions
import { startLogin } from '../actions/auth';

function LoginPage({ startLogin }) {
	return (
		<div className="container-fluid login-page">
			<div className="row justify-content-center">
				<div className="col-12 col-sm-6 col-md-5 login-page__box">
					<h3 className="login-page__title">Expensify Manager</h3>
					<p className="login-page__subtitle">It's time to take your expenses under control</p>

					<button
						className="btn login-page__btn"
					  onClick={startLogin}
					>
						Login With Google Account
					</button>
				</div>
			</div>
		</div>
	)
}

const mapDispatchToProps = {
	startLogin
};

export default connect(null, mapDispatchToProps)(LoginPage);
