import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyCY4PxRiyd_aBHEtvNm9XG0X0PbdD1ugZ4",
	authDomain: "expensify-mana.firebaseapp.com",
	databaseURL: "https://expensify-mana.firebaseio.com",
	projectId: "expensify-mana",
	storageBucket: "expensify-mana.appspot.com",
	messagingSenderId: "904691592154"
};

firebase.initializeApp(config);

const database = firebase.database();

// auth provider from firebase
// allows to log in/out with google account
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };