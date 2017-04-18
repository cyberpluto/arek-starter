import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

// Import Components
import Main from 'components/Main.jsx'

// Store
import store from 'Redux/store'

render (
	<Provider store={store}>
		<Main/>
	</Provider>,
	document.getElementById('root')
)
