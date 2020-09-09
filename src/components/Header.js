import React from "react";
import logo from "../assests/Logo.png";
import shape from "../assests/Shape.png";
import "./Header.css";
import CustomButton from "./CustomButton";
function Header() {
	return (
		<nav>
			<input type="checkbox" id="check" />
			<label for="check" className="checkbtn">
				<img src={shape} alt="ham" />
			</label>
			<label className="logo">
				<img src={logo} alt="Fresh Grocery" className="imglogo" />
			</label>
			<ul className="headerul">
				<li className="login">Login</li>
				<li>
					<CustomButton text="Sign up" />
				</li>
			</ul>
		</nav>
	);
}

export default Header;
