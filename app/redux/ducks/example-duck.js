// Actions
const EXAMPLE_ACTION = 'app/Main/EXAMPLE_ACTION'

// Reducer
const initialState = {
	test: false,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case EXAMPLE_ACTION:
			return {...state, test: action.value}
		default:
			return state
	}
}

// Action Creators
export const exampleAction = value => ({
	type: EXAMPLE_ACTION,
	value,
})
