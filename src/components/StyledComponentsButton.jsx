import React, {Component} from 'react'
import styled from 'styled-components'
import Button from 'components/Button'
import Confetti from 'react-dom-confetti'

const message = `I do all the styling.`

const config = {
	angle: 90,
	spread: 180,
	startVelocity: 20,
	elementCount: 40,
	decay: 0.95,
}

const EmojiWrapper = styled.div`
	font-size: 2.5rem;
	filter: ${p => p.active ? `grayscale(0%)` : `grayscale(100%)`};
	transition: .3s;
`

class StyledComponentsButton extends Component {
	constructor(props) {
		super(props)
		this.state = {active: false}
	}
	render() {
		const {active} = this.state
		return (
			<Button
				id="styled-components"
				message={message}
				onClick={() => this.setState({active: !active})}
			>
				<Confetti active={active} config={config}/>
				<EmojiWrapper active={active}>
					💅
				</EmojiWrapper>
			</Button>
		)
	}
}

export default StyledComponentsButton
