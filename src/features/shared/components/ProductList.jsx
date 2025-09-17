import React from "react";

export default function ProductList({ products, onAddToCart }) {
	return (
		<section className="featured-products">
			<h2>Productos Destacados</h2>
			<div className="product-list">
				{products.map((product, index) => (
					<div className="product-card" key={index}>
						<img src={product.image} alt={product.title} onError={e => {e.target.onerror=null; e.target.src='https://via.placeholder.com/200x200?text=Imagen+no+disponible';}} />
						<h3>{product.title}</h3>
						<p>{product.description}</p>
						<p className="price">${product.price}</p>
						<button className="buy-btn" onClick={() => onAddToCart(product)}>
							Añadir al carrito
						</button>
					</div>
				))}
			</div>
		</section>
	);
}
