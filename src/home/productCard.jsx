import React from "react";

export default function productCard({ image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="price">${price}</p>
    </div>
  );
}
