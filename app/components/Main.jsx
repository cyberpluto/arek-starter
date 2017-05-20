import React, {Component} from 'react'
import {connect} from 'react-redux'
import {exampleAction} from 'Redux/ducks/example-duck.js'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Button = styled.button`
	background: rgb(145,202,73);
	border: none;
	border-radius: .5em;
	color: #fff;
	font-size: 1.5em;
	padding: .5em;
	&:focus {
		outline: 0;
	}
`

class Main extends Component {
	render() {
		const {test, exampleAction} = this.props
		return (
			<div>
				<div>
					<Link to="/about">
						Abouut
					</Link>
				</div>
				<Button
					onClick={exampleAction}
				>
					Click: {test}
				</Button>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {test: state.reduxExample.test}
}

export default connect(mapStateToProps, {exampleAction})(Main)
