import React from "react";
import "./step1.css";
import i2 from "../assests/illustration2.png";
import one from "../assests/Group 18.png";
import apple from "../assests/apple.png";
import google from "../assests/google play.png";
function step1() {
	return (
		<div className="step1">
			<div className="tag">Get delivered in 3 easy steps</div>
			<div>
				<h2>Here's how it works</h2>
			</div>
			<img src={i2} alt="app" className="step-app" />
			<div className="oneflex">
				<img src={one} alt="one" className="one" />
				<div className="para">Request in the App</div>
			</div>
			<div className="onedes">
				Set your delivery location, Choose your groceries from a wide range of
				5000+ products.
			</div>
			<div className="onegrid">
				<img src={apple} alt="apple store" />
				<img src={google} alt="google play" />
			</div>
		</div>
	);
}

export default step1;
