import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import ExpenseForm from './ExpenseForm';

//actions
import { startEditExpense, startRemoveExpense} from '../actions/expenses';
//selectors
import { findExpenseById } from '../selectors';

function EditExpensePage({expense, startEditExpense, startRemoveExpense, history}) {
	const onEditSubmit = (updates) => {
		startEditExpense(expense.id, updates);
		history.push('/dashboard')
	};
	const onRemoveExpense = () => {
		startRemoveExpense(expense.id);
		history.push('/dashboard')
	};
	return (
		<div className="row justify-content-center edit-expense-page">

			<div className="col-12 page-subtitle">
				<h1>Edit Your Expense</h1>
			</div>

			<div className="col-7">
				<ExpenseForm
					expense={expense}
					onSubmit={onEditSubmit}
				/>
				<button
					className="btn btn-danger"
					onClick={onRemoveExpense}
				>
					Remove Expense
				</button>
			</div>

		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		expense: findExpenseById(state, ownProps.match.params.id)
	}
};

const mapDispatchToProps = {
	startEditExpense,
	startRemoveExpense
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
