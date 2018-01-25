import {
	EMAIL_CHANGED,
	PASS_CHANGED,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGGING_IN
} from '../actions/types';
import { REHYDRATE } from 'redux-persist/constants';

const INITIAL_STATE = {
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REHYDRATE:
			return action.payload.auth || [];
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASS_CHANGED:
			return { ...state, password: action.payload };
		case LOGIN_SUCCESS:
			return {
				...state,
				user: action.payload,
				error: '',
				loading: false
			};
		case LOGIN_FAILED:
			return {
				...state,
				error: 'Authentication Failed!',
				password: '',
				loading: false
			};
		case LOGGING_IN:
			return { ...state, loading: true, error: '' };
		default:
			return state;
	}
};
