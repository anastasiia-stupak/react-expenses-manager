import { combineReducers } from 'redux';

import authReducer from './authReducer';
import expensesReducer from './expensesReducer';
import filtersReducer from './filtersReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	expenses: expensesReducer,
	filters: filtersReducer
});

export default rootReducer;