import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//styles
import '../assets/sass/index.scss';
import 'react-dates/lib/css/_datepicker.css';

//store
import store from './store';

//router
import AppRouter from './router/AppRouter';

//actions
import { login } from './actions/auth';
//database
import { firebase } from './database/firebase';


// IF THERE'S A USER CHECK
firebase.auth().onAuthStateChanged(user => {
	if(user) {
		store.dispatch(login(user.uid))
	} else {
		console.log('no authorized user presented');
	}
});

ReactDOM.render(
	<Provider store={store}>
		<AppRouter/>
	</Provider>,
	document.getElementById('root')
);