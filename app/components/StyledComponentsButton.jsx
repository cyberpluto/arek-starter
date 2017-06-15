import React, {Component} from 'react'
import styled from 'styled-components'
import Button from 'components/Button'

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
			<Button onClick={() => this.setState({active: !active})}>
				<EmojiWrapper active={active}>
					💅
				</EmojiWrapper>
			</Button>
		)
	}
}

export default StyledComponentsButton
