import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//actions
import { startLogout, startGetCurrentUser } from '../actions/auth';

class Header extends Component {
	componentWillMount() {
		this.props.startGetCurrentUser();
	}

	render() {
		const { user } = this.props;
		return (
			<div className="row justify-content-between align-items-center header">

				<div className="col-4 header__logo-block">
					<Link to="/dashboard">
						<h1>Expensify</h1>
					</Link>
				</div>

				<div className="col-6 header__user-block">
					{ user && <span>Hello, {user.name}</span>	}
					{ user && <img src={user.photoURL} alt="user pic"/>	}
					<button
						className="btn"
						onClick={this.props.startLogout}
					>
						Logout
					</button>
				</div>

			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.auth.user
});

const mapDispatchToProps = {
	startLogout,
	startGetCurrentUser
};



export default connect(mapStateToProps, mapDispatchToProps)(Header);
