import React from "react";

export default function Banner({ image, title, description, buttonText, buttonLink, buttonAction }) {
		return (
			<section className="banner" style={{backgroundImage: `url(${image})`}}>
				<div className="banner-content">
					<h1>{title}</h1>
					<p>{description}</p>
					<button onClick={buttonAction || (() => window.location.href = buttonLink)}>{buttonText}</button>
				</div>
			</section>
		);
}
