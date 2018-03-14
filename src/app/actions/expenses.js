import database from '../database/firebase';

import {
	ADD_EXPENSE,
	REMOVE_EXPENSE,
	EDIT_EXPENSE,
	SET_EXPENSES
}
from './types';

// --------------- CREATE -------------------

export const addExpense = (expense) => (
	{
		type: ADD_EXPENSE,
		payload: {
			expense
		}
	}
);

const defaultExpenseData = {
	description:'',
	note: '',
	amount: 0,
	createdAt: 0
};

export const startAddExpense = (expenseData = defaultExpenseData) => {
	return (dispatch, getState) => {
			const uid = getState().auth.uid;

			database
				.ref(`users/${uid}/expenses`)
				.push(expenseData)
				.then(ref => {
					dispatch(addExpense({
						id: ref.key,
						...expenseData
					}))
				})
				.catch(err => console.log(err));
	}
};

// --------------- READ -------------------

export const setExpenses = (expenses) => (
	{
		type: SET_EXPENSES,
		payload: {
			expenses
		}
	}
);

export const startSetExpenses = () => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;

		database
			.ref(`users/${uid}/expenses`)
			.once('value')
			.then(snapshot => {
				const expenses = [];

				snapshot.forEach(item => {
					expenses.push({
						id: item.key,
						...item.val()
					})
				});

				dispatch(setExpenses(expenses));
			})
	}
};


// --------------- UPDATE -------------------

export const editExpense = (id, updates) => (
	{
		type: EDIT_EXPENSE,
		payload: {
			id,
			updates
		}
	}
);

export const startEditExpense = (id, updates) => {
	return (dispatch, getState) => {
			const uid = getState().auth.uid;

			database
				.ref(`users/${uid}/expenses/${id}`)
				.update(updates)
				.then(() => {
					dispatch(editExpense(id, updates));
				})
	}
};


// --------------- DELETE -------------------

export const removeExpense = (id) => (
	{
		type: REMOVE_EXPENSE,
		payload: {
			id
		}
	}
);


export const startRemoveExpense = (id) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;

		database
			.ref(`users/${uid}/expenses/${id}`)
			.remove()
			.then(() => {
				dispatch(removeExpense(id))
			})
	}
};