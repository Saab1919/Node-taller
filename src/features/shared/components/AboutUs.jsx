import React from "react";

export default function AboutUs({ title, text }) {
	return (
		<section id="nosotros" className="about-section">
			<div className="about-content">
				<h2 className="about-title">{title}</h2>
				<p className="about-text">{text}</p>
			</div>
		</section>
	);
}
