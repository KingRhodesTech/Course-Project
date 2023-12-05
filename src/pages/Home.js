import React, { Component } from 'react';
import '../Home.css';
import Pic1 from '../images/pic1.jpg';
import Pic2 from '../images/pic2.jpg';
import Pic3 from '../images/pic3.jpg';
import About from '../components/About';
import Faq from '../components/Faq';
class Home extends Component {
	render() {
		return (
			<div>
				<h1>Welcome To My Lash Bar, </h1>

				<div className="holder">
					<img
						alt="make-up"
						src={Pic1}
						style={{
							width: '250px',
							height: '250px',
							padding: '30px',
							borderRadius: '40px',
						}}
					/>
					<img
						alt="woman"
						src={Pic2}
						style={{
							width: '250px',
							height: '250px',
							padding: '30px',
							borderRadius: '40px',
						}}
					/>
					<img
						alt="woman"
						src={Pic3}
						style={{
							width: '250px',
							height: '250px',
							padding: '30px',
							borderRadius: '40px',
						}}
					/>
				</div>
				<div className="btnHolder">
					<button>Book</button>
					<button>Contact</button>
				</div>

				<About />
				<Faq />
			</div>
		);
	}
}

export default Home;
