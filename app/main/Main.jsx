import React, {Component} from 'react'
import {connect} from 'react-redux'
import {exampleAction} from 'Redux/ducks/main-duck.js'

@connect(({main: {test}}) => ({
	test,
}), {
	exampleAction,
})
class Main extends Component {
	render() {
		const {test, exampleAction} = this.props
		return (
			<button
				onClick={exampleAction}
			>
				Click: {test}
			</button>
		)
	}
}

export default Main
	