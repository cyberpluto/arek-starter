import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {exampleAction} from 'Redux/ducks/example-duck'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import LaunchButton from 'components/LaunchButton'

const Wrapper = styled.div`
	text-align: center;
	width: 100%;
`

class Main extends Component {
	render() {
		const {test, exampleAction} = this.props
		return (
			<Wrapper>
				<div>
					<Link to="/about">
						Abouut
					</Link>
				</div>
				<LaunchButton onClick={exampleAction}/>
			</Wrapper>
		)
	}
}
Main.propTypes = {
	test: PropTypes.string.isRequired,
	exampleAction: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
	return {test: state.reduxExample.test}
}

export default connect(mapStateToProps, {exampleAction})(Main)
