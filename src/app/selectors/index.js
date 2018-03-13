import moment from 'moment'

export const getVisibleExpenses = (state) =>{
	const { expenses } = state;
	const { text, sortBy, startDate, endDate } = state.filters;

	return expenses
		.filter((expense) => {
		const createdAtMoment = moment(expense.createdAt);
		const startDateMatch = startDate ?  startDate.isSameOrBefore(createdAtMoment, 'day') : true;
		const endDateMatch = endDate ?  endDate.isSameOrAfter(createdAtMoment, 'day') : true;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a,b) => {
			if(sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1;
			}
			else if(sortBy === 'amount') {
				return parseInt(a.amount) < parseInt(b.amount) ? 1 : -1;
			}
		});
};

export const findExpenseById = (state, id) => {
	return state.expenses.find(item => item.id === id);
};

export const getTotalAmount = (expenses) => {
	return expenses.map(e => e.amount).reduce((a,b) => parseInt(a) + parseInt(b), 0);
};