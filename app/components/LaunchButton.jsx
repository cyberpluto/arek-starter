import React from 'react'
import styled from 'styled-components'
const reactIcon = require('assets/icons/react.svg')
console.log(reactIcon)

const Button = styled.button`
	background: Crimson;
	border: none;
	border-radius: 1.5rem;
	width: 5rem;
	height: 5rem;
	box-shadow: inset 0px 1px 0px DarkRed, 0px 5px 0px 0px DarkRed, 0px 10px 5px #999;
	color: #fff;
	font-size: 1.5em;
	padding: .5em;
	cursor: pointer;
	&:focus {
		outline: 0;
	}
	&:active {
		box-shadow: inset 0px 1px 0px DarkRed, 0px 2px 0px 0px DarkRed, 0px 4px 5px #999;
		transform: translateY(4px);
		outline: 0;
	}
`
const Icon = styled.img`
	fill: #fff;
`

const LaunchButton = ({onClick}) => {
	return (
		<Button onClick={onClick}>
			<Icon src={reactIcon}/>
		</Button>
	)
}

export default LaunchButton
