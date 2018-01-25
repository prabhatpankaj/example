import {
	EMAIL_CHANGED,
	PASS_CHANGED,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGGING_IN
} from './types';
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

export const emailChanged = text => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = text => {
	return {
		type: PASS_CHANGED,
		payload: text
	};
};

export const loginUser = ({ email, password, navigation }) => {
	return dispatch => {
		dispatch({ type: LOGGING_IN });

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => loginSuccess(dispatch, user, navigation))
			.catch(error => {
				console.log(error);
				firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
					.then(user => loginSuccess(dispatch, user, navigation))
					.catch(() => loginFailed(dispatch));
			});
	};
};

const loginSuccess = (dispatch, user, navigation) => {
	dispatch({
		type: LOGIN_SUCCESS,
		payload: user
	});
	navigation.navigate('welcome');
};

const loginFailed = dispatch => {
	dispatch({ type: LOGIN_FAILED });
};
