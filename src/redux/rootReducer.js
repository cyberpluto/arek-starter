import {combineReducers} from 'redux'

import reduxButton from 'appRedux/ducks/reduxButton-duck'
import buttonInfo from 'appRedux/ducks/buttonInfo-duck'

const rootReducer = combineReducers({
	reduxButton,
	buttonInfo,
})

export default rootReducer
