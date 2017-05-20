import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class About extends Component {
	render() {
		return (
			<div>
				<Link to="/">
					Home
				</Link>
				<p>This is about page.</p>
			</div>
		);
	}
}

export default About
