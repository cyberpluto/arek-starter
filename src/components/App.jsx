import React from 'react'
import {Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {hot} from 'react-hot-loader'
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

export default hot(module)(Root)
