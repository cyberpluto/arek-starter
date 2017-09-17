import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {gql, graphql} from 'react-apollo'
import styled from 'styled-components'
import Icon from 'components/Icon'
import {connect} from 'react-redux'
import Button from 'components/Button'

const message = `QraphQl mutation was performed.`

const ReactIcon = styled(Icon)`
	fill: ${p => (p.active ? `#E535AB` : `rgba(0,0,0,.3)`)};
	width: 3rem;
	height: 3rem;
	transition: 0.3s;
`

const buttonQuery = gql`
	query buttonInfo($id: ID!) {
		button(id: $id) {
			id
			isActive
		}
	}
`

@graphql(buttonQuery, {options: {variables: {id: 1}}})
@graphql(
	gql`
		mutation clickButton($id: ID!, $isActive: Boolean) {
			clickButton(id: $id, isActive: $isActive) {
				id
				isActive
			}
		}
	`
)
class GraphQLButton extends Component {
	handleClick = () => {
		const {data: {button}, mutate} = this.props
		mutate({
			variables: {id: 1, isActive: !button.isActive},
			refetchQueries: [
				{
					query: buttonQuery,
					variables: {id: 1},
				},
			],
		})
	}
	render() {
		const {data: {loading, button}} = this.props
		if (loading) return <div>...</div>
		return (
			<Button id="graphql" message={message} onClick={this.handleClick}>
				<ReactIcon glyph="graphQLLogo" active={button.isActive} />
			</Button>
		)
	}
}
GraphQLButton.propTypes = {
	test: PropTypes.bool,
	exampleAction: PropTypes.func,
}

export default GraphQLButton
