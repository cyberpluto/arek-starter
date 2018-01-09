import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled from 'styled-components'
import Message from 'components/Message'
import {showInfo} from 'Redux/ducks/buttonInfo-duck'

const Wrapper = styled.div`
	position: relative;
	padding: 0.5rem;
`

const ActionButton = styled.button`
	background: rgba(0, 0, 0, 0.2);
	border: none;
	border-radius: 1.5rem;
	width: 5rem;
	height: 5rem;
	box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.25),
		0px 10px 5px rgba(0, 0, 0, 0.2);
	color: #fff;
	font-size: 1.5rem;
	padding: 0.5rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	&:focus {
		outline: 0;
	}
	&:active {
		box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.25),
			0px 4px 5px rgba(0, 0, 0, 0.2);
		transform: translateY(4px);
		outline: 0;
	}
`

@connect(
	({buttonInfo: {buttonId}}) => ({
		buttonId,
	}),
	{showInfo}
)
class Button extends Component {
	handleClick = () => {
		const {id, onClick, showInfo} = this.props
		if (onClick) {
			onClick()
		}
		showInfo(id)
	}
	render() {
		const {children, id, message, ...rest} = this.props
		return (
			<Wrapper>
				<Message id={id} value={message} />
				<ActionButton {...rest} onClick={this.handleClick}>
					{children}
				</ActionButton>
			</Wrapper>
		)
	}
}
Button.propTypes = {
	id: PropTypes.string,
	message: PropTypes.string,
	children: PropTypes.node,
	onClick: PropTypes.func,
	showInfo: PropTypes.func,
}

export default Button
