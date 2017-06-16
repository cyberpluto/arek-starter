import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'components/Icon'
import {connect} from 'react-redux'
import {exampleAction} from 'Redux/ducks/example-duck'
import Button from 'components/Button'

const message = `Redux state has changed.`

const ReactIcon = styled(Icon)`
	fill: ${p => p.active ? `#764ABC` : `rgba(0,0,0,.3)`};
	width: 3rem;
	height: 3rem;
	transition: .3s;
`

class ReduxButton extends Component {
	render() {
		const {test, exampleAction} = this.props
		return (
			<Button
				id="redux"
				message={message}
				onClick={() => exampleAction(!test)}
			>
				<ReactIcon glyph="reduxLogo" active={test}/>
			</Button>
		)
	}
}
ReduxButton.propTypes = {
	test: PropTypes.bool,
	exampleAction: PropTypes.func,
}

function mapStateToProps(state) {
	return {test: state.reduxExample.test}
}

export default connect(mapStateToProps, {exampleAction})(ReduxButton)
