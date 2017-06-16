// Actions
const SHOW_INFO = 'app/Button/SHOW_INFO'
const HIDE_INFO = 'app/Button/HIDE_INFO'

// Reducer
const initialState = {
	buttonId: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SHOW_INFO:
			return {...state, buttonId: action.value}
		case HIDE_INFO:
			return {...state, buttonId: null}
		default:
			return state
	}
}

// Action Creators
export const showInfo = value => ({
	type: SHOW_INFO,
	value,
})
export const hideInfo = () => ({
	type: SHOW_INFO,
})
