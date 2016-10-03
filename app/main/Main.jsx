import React, {Component} from 'react'
import {connect} from 'react-redux'
import {exampleAction} from './main-duck.js'
import styles from './main.scss'

@connect(({main}) => ({
	test: main.test,
}), {
	exampleAction,
})
class Main extends Component {
	render() {
		const {test, exampleAction} = this.props
		return (
			<button
				className={styles.main}
				onClick={exampleAction}
			>
				Click me: {test}
			</button>
		)
	}
}

export default Main
	