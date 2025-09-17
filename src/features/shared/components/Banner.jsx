import React from "react";

export default function Banner({ image, title, description, buttonText, buttonLink }) {
		return (
			<section className="banner">
				<img src={image} alt={title} className="banner-image" />
				<div className="banner-text">
					<h1>{title}</h1>
					<p>{description}</p>
					<a href={buttonLink} className="banner-btn">{buttonText}</a>
				</div>
			</section>
		);
}
