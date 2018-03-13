import React from 'react';
import { connect } from 'react-redux';

//actions
import { startAddExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

function AddExpensePage({ startAddExpense, history }) {

	const onSubmit = (data) => {
		startAddExpense(data);
		history.push('/dashboard');
	};

	return (
		<div className="row justify-content-center">

			<div className="col-12 page-subtitle">
				<h1>Add A New Expense</h1>
			</div>

			<div className="col-7">
				<ExpenseForm onSubmit={onSubmit}/>
			</div>

		</div>
	)
}

const mapDispatchToProps = {
	startAddExpense
};

export default connect(null, mapDispatchToProps)(AddExpensePage);