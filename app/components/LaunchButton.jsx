import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon, {glyphs} from 'components/Icon'

console.log(glyphs)

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
	display: flex;
	align-items: center;
	justify-content: center;
	&:focus {
		outline: 0;
	}
	&:active {
		box-shadow: inset 0px 1px 0px DarkRed, 0px 2px 0px 0px DarkRed, 0px 4px 5px #999;
		transform: translateY(4px);
		outline: 0;
	}
`
const ReactIcon = styled(Icon)`
	fill: turquoise;
	width: 3rem;
	height: 3rem;
`

const LaunchButton = ({onClick}) => {
	return (
		<div>
			<Button onClick={onClick}>
				<ReactIcon glyph="react"/>
			</Button>
		</div>
	)
}
LaunchButton.propTypes = {
	onClick: PropTypes.func,
}

export default LaunchButton
