import React from "react";
import two from "../assests/Group 56.png";
import guy from "../assests/Group 3.png";
import "./Step3.css";
function Step2() {
	return (
		<div className="threegrid">
			<img src={guy} alt="guy" className="threeGuy" />
			<div>
				<div className="twoflex">
					<img src={two} alt="two" className="one" />
					<div className="para">It’s delivered and Rate us</div>
				</div>
				<div className="twodes">
					Collect groceries at your doorstep and tell us about our service
				</div>
			</div>
		</div>
	);
}

export default Step2;
