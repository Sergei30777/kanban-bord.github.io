import React, { Component } from 'react';
import './css/Footer.css';

class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Footer">
				<div className="footer-text">Active tasks {this.props.active}</div>
				<div className="footer-text">Finished tasks {this.props.finished}</div>
				<div className="footer-text right">Kanban board by tasks &lt;NAME&gt;, &lt;YEAR&gt;</div>
			</div>
		);
	}
}

export default Footer;
