import { ACTION_TYPE } from '../actions';

const initialAppState = {
	wasLogout: false,
	modal: {
		isOpen: false,
		text: '',
		onConfirm: () => {},
		onCancel: () => {},
	},
	form: {
		isOpen: false,
		data: {},
	},
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				wasLogout: !state.wasLogout,
			};
			case ACTION_TYPE.OPEN_FORM:
			return {
				...state,
				form: {
					...state.form,
					...action.payload,
					isOpen: true,
				},
			};
			case ACTION_TYPE.CLOSE_FORM:
				return initialAppState;
		default:
			return state;
	}
};
