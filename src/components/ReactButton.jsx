import React, {Component} from 'react'
import styled from 'styled-components'
import Icon from 'components/Icon'
import Button from 'components/Button'

const message = `My state has changed.`

const ReactIcon = styled(Icon)`
	fill: ${p => (p.active ? `#00d8ff` : `rgba(0,0,0,.3)`)};
	width: 3rem;
	height: 3rem;
	transition: 0.3s;
`

class ReactButton extends Component {
	constructor(props) {
		super(props)
		this.state = {active: false}
	}
	render() {
		const {active} = this.state
		return (
			<Button
				id="react"
				message={message}
				onClick={() => {
					this.setState({active: !active})
				}}
			>
				<ReactIcon glyph="reactLogo" active={active} />
			</Button>
		)
	}
}

export default ReactButton
