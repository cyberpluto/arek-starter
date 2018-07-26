import {createStore, compose} from 'redux'

// import the root reducer
import rootReducer from 'appRedux/rootReducer'

// create an object for the default data
const defaultState = {}

const enhancers = compose(
	__isBrowser__ && window.devToolsExtension
		? window.devToolsExtension()
		: f => f
)

const store = createStore(rootReducer, defaultState, enhancers)

export default store
