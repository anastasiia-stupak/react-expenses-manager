import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';

//selectors
import { getVisibleExpenses } from '../selectors';

function ExpenseList({expenses}) {
	return (
		<div className="row justify-content-center expense-list">
			<div className="col-12">
				<div className="row justify-content-between align-items-center expense-list__header">
					<div className="col-6">
						<p>Expense</p>
					</div>
					<div className="col-6">
						<p className="float-right">Amount</p>
					</div>
				</div>
			</div>
			{
				expenses.length === 0
				&&
				<div className="col-8 expense-list__message">
					<p>There's no expenses yet</p>
				</div>
			}

			{
				expenses.map((expense, i) => <ExpenseListItem key={i} {...expense}/>)
			}
		</div>
	)
}

const mapStateToProps = (state) => ({
	expenses: getVisibleExpenses(state)
});

export default connect(mapStateToProps, null)(ExpenseList);
