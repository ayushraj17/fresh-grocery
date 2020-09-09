import React from "react";

function CustomButton({ text }) {
	const style = {
		padding: "12px 43.65px",
		background: "#3EC390",
		color: "white",
		fontWeight: "600",
		borderRadius: "0.5rem",
		outline: "none",
		focus: "none",
		border: "none",
	};
	return <button style={style}>{text}</button>;
}

export default CustomButton;
