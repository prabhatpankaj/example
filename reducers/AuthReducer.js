import { EMAIL_CHANGED, PASS_CHANGED } from '../actions/types';
const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASS_CHANGED:
			return { ...state, password: action.payload };
		default:
			return state;
	}
};
