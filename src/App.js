import './Main.css';
import { Route, Routes, NavLink, HashRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Book from './pages/Book.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import Services from './pages/Services.js';
import Logo from './images/Logo.jpg';
import './Main.css';

class Main extends Component {
	render() {
		return (
			<HashRouter>
				<div className="main">
					<img
						alt="two Lashes"
						src={Logo}
						style={{ width: '80px', height: '80px', borderRadius: '40px' }}
					/>
					<ul className="header">
						<li>
							<NavLink to="/pages/Home">Home</NavLink>
						</li>
						<li>
							<NavLink to="/pages/Services">Services</NavLink>
						</li>
						<li>
							<NavLink to="/pages/Contact">Contact</NavLink>
						</li>
						<li>
							<NavLink to="/pages/Book">Book</NavLink>
						</li>
					</ul>
				</div>

				<div className="content">
					<Routes>
						<Route path="/pages/Home" element={<Home />} />
						<Route path="/pages/Services" element={<Services />} />
						<Route path="/pages/Contact" element={<Contact />} />
						<Route path="/pages/Book" element={<Book />} />
					</Routes>
				</div>
			</HashRouter>
		);
	}
}

export default Main;
