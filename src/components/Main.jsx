import React, {Component} from 'react'
import styled from 'styled-components'
import ReactButton from 'components/ReactButton'
import ReduxButton from 'components/ReduxButton'
import StyledComponentsButton from 'components/StyledComponentsButton'
import ReactRouterButton from 'components/ReactRouterButton'
import GraphQLButton from 'components/GraphQLButton'

const Wrapper = styled.div`
	text-align: center;
	width: 100%;
	font-family: sans-serif;
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
				<ButtonWrapper>
					<ReactButton />
					<ReduxButton />
					<ReactRouterButton />
					<StyledComponentsButton />
					<GraphQLButton />
				</ButtonWrapper>
			</Wrapper>
		)
	}
}
