import React, { Component } from 'react';
import { connect } from 'react-redux';

//actions
import { startSetExpenses } from '../actions/expenses';

import ExpensesSummary from './ExpensesSummary';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseList from './ExpenseList';

class ExpenseDashboardPage extends Component {
	componentWillMount() {
		this.props.startSetExpenses();
	}

	render() {
		return (
			<div className="row">
				<div className="col-12">
					<ExpensesSummary/>
					<ExpenseListFilters/>
					<ExpenseList/>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = {
	startSetExpenses
};

export default connect(null, mapDispatchToProps)(ExpenseDashboardPage);
