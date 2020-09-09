import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Section from "./components/Section";
import QuickSearch from "./components/QuickSearch";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Section />
			<QuickSearch />
			<Step1 />
			<Step2 />
			<Step3 />
			<Services />
			<Footer />
		</div>
	);
}

export default App;
