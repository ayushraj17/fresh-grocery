import React from "react";
import "./QuickSearch.css";
import CustomButton from "./CustomButton";
import grocery from "../assests/Group 1.png";
import veg from "../assests/veg.png";
import personal from "../assests/personal.png";
import bev from "../assests/bev.png";
import home from "../assests/home.png";

function QuickSearch() {
	return (
		<div className="quick-search">
			<div className="tag">Here's what you need</div>
			<div>
				<h2>Quick Search</h2>
			</div>
			<div className="qsgrid">
				<img src={grocery} alt="grocery" />
				<img src={veg} alt="veg" />
				<img src={personal} alt="personal" />
				<img src={home} alt="home" />
				<img src={bev} alt="bev" />
			</div>
			<div>
				<CustomButton text="Explore More" />
			</div>
		</div>
	);
}

export default QuickSearch;
