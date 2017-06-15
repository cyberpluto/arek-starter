import React, {Component} from 'react'
import styled from 'styled-components'
import ReactButton from 'components/ReactButton'
import ReduxButton from 'components/ReduxButton'
import StyledComponentsButton from 'components/StyledComponentsButton'
import ReactRouterButton from 'components/ReactRouterButton'
import Message from 'components/Message'

const Wrapper = styled.div`
	text-align: center;
	width: 100%;
`
const MessageWrapper = styled.div`

`
const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`

export default class Main extends Component {
	render() {
		return (
			<Wrapper>
				<MessageWrapper>
					<Message/>
				</MessageWrapper>
				<ButtonWrapper>
					<ReactButton/>
					<ReduxButton/>
					<ReactRouterButton/>
					<StyledComponentsButton/>
				</ButtonWrapper>
			</Wrapper>
		)
	}
}
