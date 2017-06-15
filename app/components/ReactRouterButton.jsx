import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  withRouter,
	Link,
} from 'react-router-dom'
import styled from 'styled-components'
import Icon from 'components/Icon'
import Button from 'components/Button'

const ReactRouterIcon = styled(Icon)`
	width: 3rem;
	height: 3rem;
	transition: .3s;
	filter: ${p => p.active ? `grayscale(0%)` : `grayscale(100%) contrast(0%)`};
	transition: .3s;
`

class ReactRouterButton extends Component {
	render() {
		const {match: {params: {param}}} = this.props
		return (
			<Link to={param ? "/" : "/active"}>
				<Button active={param}>
					<ReactRouterIcon glyph="reactRouterLogo" active={param}/>
				</Button>
			</Link>
		)
	}
}

export default withRouter(ReactRouterButton)
