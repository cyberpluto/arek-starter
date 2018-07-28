import React from 'react'
import {Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import '../styles/reset'
// Import Components
import Main from 'components/Main'
// Store
import store from 'appRedux/store'

const Root = () => {
	return (
		<Provider store={store}>
			<Route path="/:param?" component={Main} />
		</Provider>
	)
}

export default Root
