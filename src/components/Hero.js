import React from "react";
import hero from "../assests/Group 3.jpg";
import gps from "../assests/gps.png";
import location from "../assests/Location icon.png";
import "./Hero.css";
import CustomButton from "./CustomButton";
function Hero() {
	return (
		<div>
			{/* <img src={hero} alt="hero" width="100%" className="hero" /> */}
			<div className="hero-items">
				<h1>Stay Home We'll Deliver</h1>
				<h3>Get your groceries delivered in less than an hour</h3>
				<div className="search">
					<img src={location} alt="location" className="location" />
					<input type="search" placeholder="Search for a location" />
					<img src={gps} alt="gps" className="gps" />
					<span className="btn">
						<CustomButton text="Search" />
					</span>
				</div>
				<div className="cities">
					<div>New York</div>
					<div>Los Angeles</div>
					<div>Chicago</div>
					<div>Houston</div>
					<div>Phoenix</div>
					<div>Philadelphia</div>
					<div>San Antonio</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
