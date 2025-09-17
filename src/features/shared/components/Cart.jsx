import React from "react";

export default function Cart({ cart, onClose, onRemoveFromCart }) {
	const total = cart.reduce((sum, p) => sum + p.price, 0);
	return (
		<div className="cart-modal">
			<div className="cart-content">
				<button className="close-btn" onClick={onClose}>Cerrar</button>
				<h2>Carrito de compras</h2>
				{cart.length === 0 ? (
					<p>El carrito está vacío.</p>
				) : (
					<ul>
						{cart.map((item, idx) => (
							<li key={idx}>
								<span>{item.title}</span> - <span>${item.price}</span>
								<button className="eliminar-btn" onClick={() => onRemoveFromCart(idx)}>Eliminar</button>
							</li>
						))}
					</ul>
				)}
				<div className="cart-total">Total: ${total.toFixed(2)}</div>
			</div>
		</div>
	);
}
