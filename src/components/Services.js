import React from "react";
import CustomButton from "./CustomButton";

import "./Services.css";
import order from "../assests/order.png";
import liveorder from "../assests/liveorder.png";
import delivery from "../assests/delivery.png";
import guy from "../assests/Group 4.png";
function Services() {
	return (
		<>
			<div className="services">
				<div className="tag">Why Choose Fresh Grocery</div>
				<div>
					<h2>Because we are in it together</h2>
				</div>
				<div className="servicesGrid">
					<img src={order} alt="order" />
					<img src={liveorder} alt="liveorder" />
					<img src={delivery} alt="delivery" />
				</div>
			</div>
			<div className="partner">
				<div className="sgrid1">
					<div className="twoflex">
						<div className="spara">Become a Partner and start earning!</div>
					</div>
					<div className="stwodes">
						You can login and logout whenever you want! No mandatory timings!
					</div>
					<div className="ssbuton">
						<CustomButton text="Become a Partner" />
					</div>
				</div>
				<img src={guy} />
			</div>
		</>
	);
}

export default Services;
