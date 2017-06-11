import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import react from 'assets/icons/react.svg'
import rocket from 'assets/icons/rocket.svg'

export const glyphs = {
	react,
	rocket,
}

const IconWrapper = styled.div`
	height: 1em;
	width: 1em;
	svg {
		width: 100%;
		height: 100%;
	}
`

const Icon = ({glyph, ...rest}) =>
	<IconWrapper {...rest}>
		<svg viewBox={glyphs[glyph].viewBox}>
			<use xlinkHref={`#${glyphs[glyph].id}`}/>
		</svg>
	</IconWrapper>
Icon.propTypes = {
	glyph: PropTypes.string,
}

export default Icon
