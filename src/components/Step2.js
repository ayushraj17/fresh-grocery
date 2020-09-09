import React from "react";
import two from "../assests/Group 48.png";
import guy from "../assests/Group 2.png";
import "./Step2.css";
function Step2() {
	return (
		<div className="twogrid">
			<div>
				<div className="twoflex">
					<img src={two} alt="two" className="one" />
					<div className="para">Schedule and Pay</div>
				</div>
				<div className="twodes">
					Schedule the delivery at your convenient time and pay digitally
				</div>
			</div>
			<img src={guy} alt="guy" className="is2" />
		</div>
	);
}

export default Step2;
