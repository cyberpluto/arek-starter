import React, {Component} from 'react'
import {connect} from 'react-redux'
import {exampleAction} from 'Redux/ducks/main-duck.js'

// @connect(({main: {test}}) => ({
// 	test,
// }), {
// 	exampleAction,
// })
class Main extends Component {
	render() {
		const {main: {test}, exampleAction} = this.props
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
  return { test: state.test }
}

export default connect(state => state, {exampleAction})(Main)

// export default Main
	