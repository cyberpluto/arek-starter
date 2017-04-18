import React, {Component} from 'react'
import {connect} from 'react-redux'
import {exampleAction} from 'Redux/ducks/example-duck.js'

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

function mapStateToProps(state) {
  return { test: state.reduxExample.test }
}

export default connect(mapStateToProps, {exampleAction})(Main)
