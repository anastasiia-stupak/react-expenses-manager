import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

//selectors
import { getVisibleExpenses, getTotalAmount } from '../selectors';

function ExpensesSummary({ visibleExpensesCount, hiddenExpensesCount, totalAmount }) {
	const visibleExpensesWord = visibleExpensesCount === 1 ? 'expense' : 'expenses';
	const hiddenExpensesWord = hiddenExpensesCount === 1 ? 'expense' : 'expenses';

	return (
		<div className="row expenses-summary">
			<h1 className="col-12 expenses-summary__title">You are viewing <span>{visibleExpensesCount}</span> {visibleExpensesWord} totalling <span> {totalAmount}$</span></h1>
			<h3 className="col-12 expenses-summary__subtitle"><span>{hiddenExpensesCount}</span> {hiddenExpensesWord} hidden</h3>
			<div className="col-12">
				<Link className="btn btn-success expenses-summary__add-button" to="/create"> + Add an expense</Link>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	const visibleExpenses = getVisibleExpenses(state);

	return {
		totalAmount: getTotalAmount(visibleExpenses),
		visibleExpensesCount: visibleExpenses.length,
		hiddenExpensesCount: state.expenses.length - visibleExpenses.length
	}
};



export default connect(mapStateToProps, null)(ExpensesSummary);
