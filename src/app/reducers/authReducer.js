import { firebase } from '../database/firebase';
//types
import {
	LOGIN,
	LOGOUT,
	GET_CURRENT_USER
} from '../actions/types';

let defaultState = {
	uid: null,
	user: null
};

const authReducer = (state = defaultState, {type, payload}) => {
	switch (type) {
		case LOGIN:
			return {
				...state,
				uid: payload.uid
			};
		case LOGOUT:
			return {
				...state,
				uid: null
			};
		case GET_CURRENT_USER:
			return {
				...state,
				user: payload.user
			};
		default:
			return state;
	}
};


export default authReducer;