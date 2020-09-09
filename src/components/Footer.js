import React from "react";
import "./Footer.css";
import logo from "../assests/Logo.png";
import apple from "../assests/apple.png";
import google from "../assests/google play.png";
import social from "../assests/social.png";
function Footer() {
	return (
		<div className="footergrid">
			<div className="footer1grid">
				<div>
					<img src={logo} alt="Fresh Grocery" className="footerlogo" />
					<ul className="footerul">
						<li>Help Center</li>
						<li>English(Recommended)</li>
					</ul>
					<div className="onegrid" style={{ marginTop: "90px" }}>
						<img src={apple} alt="apple store" />
						<img src={google} alt="google play" />
					</div>
				</div>
				<div>
					<div className="footerHead">About us</div>{" "}
					<ul className="footerul">
						<li>My Account</li> <li>Categories</li> <li>Cities</li>{" "}
						<li>Become a Partner</li> <li>Blog</li> <li>Careers</li>{" "}
					</ul>
				</div>
				<div>
					<div className="footerHead">Questions?</div>
					<ul className="footerul">
						<li>Frequently Asked Questions</li>
						<li>Contact us</li>
					</ul>
				</div>
				<div className="onesocialgrid">
					<img src={apple} alt="apple store" />
					<img src={google} alt="google play" />
				</div>
			</div>
			<div className="footerBottom">
				<div className="company">© 2020 Appening Infotech Pvt Ltd</div>
				<div className="privacy">
					<div>Privacy</div>
					<div>Accessibility</div>
					<div>Terms</div>
				</div>
				<img src={social} alt="social" className="social" />
			</div>
		</div>
	);
}

export default Footer;
