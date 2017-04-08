import { createStore, compose } from 'redux'

// import the root reducer
import rootReducer from 'Redux/rootReducer'

// create an object for the default data
const defaultState = {}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers)

export default store