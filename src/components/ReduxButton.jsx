import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'components/Icon'
import {connect} from 'react-redux'
import {reduxButtonAction} from 'Redux/ducks/reduxButton-duck'
import Button from 'components/Button'

const message = `Redux state has changed.`

const ReactIcon = styled(Icon)`
	fill: ${p => (p.active ? `#764ABC` : `rgba(0,0,0,.3)`)};
	width: 3rem;
	height: 3rem;
	transition: 0.3s;
`

@connect(
	({reduxButton: {active}}) => ({
		active,
	}),
	{reduxButtonAction}
)
class ReduxButton extends Component {
	handleClick = () => {
		const {active, reduxButtonAction} = this.props
		reduxButtonAction(!active)
	}
	render() {
		const {active} = this.props
		return (
			<Button id="redux" message={message} onClick={this.handleClick}>
				<ReactIcon glyph="reduxLogo" active={active} />
			</Button>
		)
	}
}
ReduxButton.propTypes = {
	active: PropTypes.bool,
	reduxButtonAction: PropTypes.func,
}

export default ReduxButton
