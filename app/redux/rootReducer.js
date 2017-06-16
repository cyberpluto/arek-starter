import {combineReducers} from 'redux'

import reduxExample from 'Redux/ducks/example-duck'
import buttonInfo from 'Redux/ducks/buttonInfo-duck'

const rootReducer = combineReducers({
	reduxExample,
	buttonInfo,
})

export default rootReducer
