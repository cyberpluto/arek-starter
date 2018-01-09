import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import reactLogo from 'assets/icons/react-logo.svg'
import reduxLogo from 'assets/icons/redux-logo.svg'
import reactRouterLogo from 'assets/icons/react-router-logo.svg'
import graphQLLogo from 'assets/icons/graphql-logo.svg'

// Use svgomg before placing svg files in project
export const glyphs = {
	reactLogo,
	reduxLogo,
	reactRouterLogo,
	graphQLLogo,
}

const IconWrapper = styled.div`
	height: 1em;
	width: 1em;
	svg {
		width: 100%;
		height: 100%;
	}
`

const Icon = ({glyph, ...rest}) => (
	<IconWrapper {...rest}>
		<svg viewBox={glyphs[glyph].viewBox}>
			<use xlinkHref={`#${glyphs[glyph].id}`} />
		</svg>
	</IconWrapper>
)
Icon.propTypes = {
	glyph: PropTypes.string,
}

export default Icon
