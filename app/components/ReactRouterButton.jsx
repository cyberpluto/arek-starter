import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter, Link} from 'react-router-dom'
import styled from 'styled-components'
import Icon from 'components/Icon'
import Button from 'components/Button'

const Anchor = styled(Link)`display: block;`
const message = 'Location has changed.'

const ReactRouterIcon = styled(Icon)`
	width: 3rem;
	height: 3rem;
	transition: 0.3s;
	filter: ${p => (p.active ? `grayscale(0%)` : `grayscale(100%) contrast(0%)`)};
	transition: 0.3s;
`

@withRouter
class ReactRouterButton extends Component {
	render() {
		const {match: {params: {param}}} = this.props
		return (
			<Anchor to={param ? '/' : '/active'}>
				<Button id="react-router" message={message}>
					<ReactRouterIcon glyph="reactRouterLogo" active={param} />
				</Button>
			</Anchor>
		)
	}
}
ReactRouterButton.propTypes = {
	match: PropTypes.object,
}

export default ReactRouterButton
