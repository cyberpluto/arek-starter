import React, {Component} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	border: 1px solid red;
`
class Message extends Component {
	render() {
		return (
			<Wrapper>
				My message!
			</Wrapper>
		)
	}
}

export default Message
