import {
	SET_TEXT_FILTER,
	SORT_BY_DATE,
	SORT_BY_AMOUNT,
	SET_START_DATE,
	SET_END_DATE
} from './types';

export const setTextFilter = (text = '') => {
	return {
		type: SET_TEXT_FILTER,
		payload: {
			text
		}
	}
};

export const sortByDate = () => {
	return {
		type: SORT_BY_DATE,
	}
};

export const sortByAmount = () => {
	return {
		type: SORT_BY_AMOUNT,
	}
};

export const setStartDate = (startDate) => {
	return {
		type: SET_START_DATE,
		payload: {
			startDate
		}
	}
};

export const setEndDate = (endDate) => {
	return {
		type: SET_END_DATE,
		payload: {
			endDate
		}
	}
};