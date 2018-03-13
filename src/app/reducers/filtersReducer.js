import moment from 'moment';

//types
import {
	SET_TEXT_FILTER,
	SORT_BY_DATE,
	SORT_BY_AMOUNT,
	SET_START_DATE,
	SET_END_DATE
} from '../actions/types';

const defaultState = {
	text: '',
	sortBy: 'date',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month')
};

const filtersReducer = (state = defaultState, {type, payload}) => {
	switch (type) {
		case SET_TEXT_FILTER:
			return {
				...state,
				text: payload.text
			};
		case SORT_BY_DATE:
			return {
				...state,
				sortBy: 'date'
			};
		case SORT_BY_AMOUNT:
			return {
				...state,
				sortBy: 'amount'
			};
		case SET_START_DATE:
			return {
				...state,
				startDate: payload.startDate
			};
		case SET_END_DATE:
			return {
				...state,
				endDate: payload.endDate
			};
		default:
			return state;
	}
};

export default filtersReducer;