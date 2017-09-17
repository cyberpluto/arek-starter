import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'components/Icon'
import {connect} from 'react-redux'
import {exampleAction} from 'Redux/ducks/example-duck'
import Button from 'components/Button'

const message = `Redux state has changed.`

const ReactIcon = styled(Icon)`
	fill: ${p => (p.active ? `#764ABC` : `rgba(0,0,0,.3)`)};
	width: 3rem;
	height: 3rem;
	transition: 0.3s;
`

@connect(
	({reduxExample: {test}}) => ({
		test,
	}),
	{exampleAction}
)
class ReduxButton extends Component {
	handleClick = () => {
		const {test, exampleAction} = this.props
		exampleAction(!test)
	}
	render() {
		const {test} = this.props
		return (
			<Button id="redux" message={message} onClick={this.handleClick}>
				<ReactIcon glyph="reduxLogo" active={test} />
			</Button>
		)
	}
}
ReduxButton.propTypes = {
	test: PropTypes.bool,
	exampleAction: PropTypes.func,
}

export default ReduxButton
