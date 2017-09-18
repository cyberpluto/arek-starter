// Actions
const REDUX_BUTTON_ACTION = 'app/Main/REDUX_BUTTON_ACTION'

// Reducer
const initialState = {
	active: false,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case REDUX_BUTTON_ACTION:
			return {...state, active: action.value}
		default:
			return state
	}
}

// Action Creators
export const reduxButtonAction = value => ({
	type: REDUX_BUTTON_ACTION,
	value,
})
