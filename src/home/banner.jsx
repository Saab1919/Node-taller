import React from "react";

export default function banner({ image, title, description, buttonText, buttonLink }) {
  return (
    <div className="banner">
      <img src={image} alt="Banner" className="banner-image" />
      <div className="banner-text">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={buttonLink} className="banner-btn">{buttonText}</a>
      </div>
    </div>
  );
}
