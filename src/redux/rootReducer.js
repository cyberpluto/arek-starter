import {combineReducers} from 'redux'

import reduxButton from 'Redux/ducks/reduxButton-duck'
import buttonInfo from 'Redux/ducks/buttonInfo-duck'

const rootReducer = combineReducers({
	reduxButton,
	buttonInfo,
})

export default rootReducer
