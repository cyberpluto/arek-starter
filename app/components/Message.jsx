import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled, {keyframes} from 'styled-components'

const showMessage = keyframes`
	0% {opacity: 0;}
	20% {opacity: 1;}
	80% {opacity: 1;}
	100% {opacity: 0;}
`
const Card = styled.div`
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
	opacity: 0;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, calc(-100% - 1rem));
	min-width: 5rem;
	max-width: 15rem;
	width: 500%;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 1rem;
	padding: 1rem;
	color: rgba(0, 0, 0, 0.7);
	font-size: 1rem;
	z-index: 2;
	animation-name: ${p => p.active && showMessage};
	animation-duration: ${p => p.active && `5s`};
	animation-fill-mode: forwards;
`

@connect(({buttonInfo: {buttonId}}) => ({
	buttonId,
}))
class Message extends Component {
	render() {
		const {id, buttonId, value} = this.props
		return <Card active={id === buttonId}>{value}</Card>
	}
}
Message.propTypes = {
	id: PropTypes.string,
	buttonId: PropTypes.string,
	value: PropTypes.string,
}

export default Message
