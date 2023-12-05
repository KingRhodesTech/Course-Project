import React, { Component } from 'react';
class Contact extends Component {
	render() {
		return (
			<div>
				<h1 style={{ display: 'flex', justifyContent: 'center' }}>
					Contact Page
				</h1>
				<ul style={{ listStyle: 'none' }}>
					<li>Name: Kathy Jones</li>
					<li>Phone #: (376)-453-4543</li>
					<li>Email: kathyj@gmail.com</li>
				</ul>
			</div>
		);
	}
}

export default Contact;
