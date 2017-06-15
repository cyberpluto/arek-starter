import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Confetti from 'react-dom-confetti'

const config = {
	angle: 90,
	spread: 180,
	startVelocity: 20,
	elementCount: 40,
	decay: 0.95,
}

const ActionButton = styled.button`
	background: rgba(0,0,0,.2);
	border: none;
	border-radius: 1.5rem;
	width: 5rem;
	height: 5rem;
	box-shadow: 0px 5px 0px 0px rgba(0,0,0,.25), 0px 10px 5px rgba(0,0,0,.2);
	color: #fff;
	font-size: 1.5rem;
	padding: .5rem;
	margin: .5rem
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	&:focus {
		outline: 0;
	}
	&:active {
		box-shadow: 0px 2px 0px 0px rgba(0,0,0,.25), 0px 4px 5px rgba(0,0,0,.2);
		transform: translateY(4px);
		outline: 0;
	}
`

class Button extends Component {
	render() {
		const {active, children, onClick} = this.props
		return (
			<ActionButton onClick={onClick}>
				<Confetti active={active} config={config}/>
				{children}
			</ActionButton>
		)
	}
}
Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
}

export default Button
