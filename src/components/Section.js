import React from "react";
import "./Section.css";
import guy from "../assests/illustration1.png";
import CustomButton from "./CustomButton";
import one from "../assests/1.png";
import two from "../assests/2.png";
import three from "../assests/3.png";
function Section() {
	return (
		<div className="section">
			<div className="top">
				<div className="grid1">
					<div className="hashtag">#GroceryDeliveredSafely</div>
					<div>
						<h2 className="s-start">
							Hygenically <br /> Packed,
						</h2>
					</div>
					<div className="section-button">
						<CustomButton text="Learn More" />
					</div>
				</div>
				<div className="grid2">
					<img src={guy} alt="guy" />
				</div>
			</div>
			<div className="sbottom">
				<img src={one} alt="one" />
				<img src={two} alt="two" />
				<img src={three} alt="three" />
			</div>
		</div>
	);
}

export default Section;
