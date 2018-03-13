//types
import {
	ADD_EXPENSE,
	REMOVE_EXPENSE,
	EDIT_EXPENSE,
	SET_EXPENSES,
	LOGOUT
} from '../actions/types';

const defaultState = [];

const expensesReducer = (state = defaultState, {type, payload}) => {
	switch (type) {
		case ADD_EXPENSE:
			return [...state, payload.expense];
		case SET_EXPENSES:
			return payload.expenses;
		case REMOVE_EXPENSE:
			return state.filter(item => item.id !== payload.id);
		case EDIT_EXPENSE:
			return state.map(item => {
				if(item.id === payload.id) {
					return {
						...item,
						...payload.updates
					}
				}
				return item;
			});
		case LOGOUT:
			return [];
		default:
			return state;
	}
};

export default expensesReducer;