import { firebase, googleAuthProvider} from '../database/firebase';

//types
import { LOGIN, LOGOUT, GET_CURRENT_USER } from './types';

// LOG IN

export function login(uid) {
	return {
		type: LOGIN,
		payload: {
			uid
		}
	}
}

export function startLogin() {
	return (dispatch) => {
		 firebase
			 .auth()
			 .signInWithPopup(googleAuthProvider)
			 .then(data => {
			  	dispatch(login(data.user.uid));
			 });
	}
}

// LOG OUT

export function logout() {
	return {
		type: LOGOUT,
	}
}

export function startLogout() {
	return (dispatch) => {
		return firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch(logout())
			});
	}
}

// GETTING CURRENT USER

export function getCurrentUser(user) {
	return {
		type: GET_CURRENT_USER,
		payload: {
			user
		}
	}
}

export function startGetCurrentUser() {
	return (dispatch) => {
		const user = firebase.auth().currentUser;
		let name, photoURL;

		if(user !== null) {
			name = user.displayName;
			photoURL = user.photoURL;

			dispatch(getCurrentUser({ name, photoURL }))
		}
	}
}