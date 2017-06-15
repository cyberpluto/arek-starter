import React, {Component} from 'react'
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
	constructor(props) {
		super(props)
		this.state = {active: false}
	}
	render() {
		const {active} = this.state
		return (
			<Button onClick={() => this.setState({active: !active})}>
				<ReactRouterIcon glyph="reactRouterLogo" active={active}/>
			</Button>
		)
	}
}

export default ReactRouterButton
