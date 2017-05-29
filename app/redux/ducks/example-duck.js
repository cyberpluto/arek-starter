// Actions
const EXAMPLE_ACTION = 'app/Main/EXAMPLE_ACTION'

// Reducer
const initialState = {
	test: 'init value',
}

export default (state = initialState, action) => {
	switch (action.type) {
		case EXAMPLE_ACTION:
			return {...state, test: 'test passed'}
		default:
			return state
	}
}

// Action Creators
export const exampleAction = () => ({
	type: EXAMPLE_ACTION,
})
