import React from "react";

export default function AboutUs({ title, text }) {
	return (
		<section className="about-us">
			<h2>{title}</h2>
			<p>{text}</p>
		</section>
	);
}
