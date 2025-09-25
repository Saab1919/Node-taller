import React, { useState } from "react";

export default function Cart({ cart, onClose, onRemoveFromCart }) {
	const total = cart.reduce((sum, p) => sum + p.price, 0);
	const [showOrder, setShowOrder] = useState(false);
	const [order, setOrder] = useState({ nombre: '', direccion: '', telefono: '', metodo: '' });
	const [pedidoEnviado, setPedidoEnviado] = useState(false);

	const handleOrderChange = (e) => {
		setOrder({ ...order, [e.target.name]: e.target.value });
	};

	const handleOrderSubmit = (e) => {
		e.preventDefault();
		setPedidoEnviado(true);
		setTimeout(() => {
			setPedidoEnviado(false);
			setShowOrder(false);
			onClose();
		}, 2000);
	};

	return (
		<div className="cart-modal">
			<div className="cart-content">
				<div className="cart-header">
					<h2>Carrito de compras</h2>
					<button className="close-btn" onClick={onClose}>✕</button>
				</div>
				{cart.length === 0 ? (
					<p>El carrito está vacío.</p>
				) : (
					<>
						<div>
							{cart.map((item, idx) => (
								<div key={idx} className="cart-item">
									<img src={item.image} alt={item.title} className="cart-item-image" onError={e => {e.target.onerror=null; e.target.src='https://via.placeholder.com/60x60?text=Sin+imagen';}} />
									<div className="cart-item-info">
										<span className="cart-item-title">{item.title}</span>
										<span className="cart-item-price">${item.price}</span>
									</div>
									<button className="remove-btn" onClick={() => onRemoveFromCart(idx)}>Eliminar</button>
								</div>
							))}
						</div>
						<div className="cart-total">Total: ${total.toFixed(2)}</div>
						{!showOrder && (
							<button className="cart-checkout-btn" onClick={() => setShowOrder(true)}>Realizar pedido</button>
						)}
						{showOrder && (
							<div className="order-form-container">
								<h3 className="order-form-title">Datos de entrega</h3>
								<form className="order-form" onSubmit={handleOrderSubmit}>
									<div className="form-group">
										<label>Nombre completo</label>
										<input name="nombre" type="text" placeholder="Ingresa tu nombre completo" value={order.nombre} onChange={handleOrderChange} required />
									</div>
									<div className="form-group">
										<label>Dirección de entrega</label>
										<input name="direccion" type="text" placeholder="Calle, número, ciudad" value={order.direccion} onChange={handleOrderChange} required />
									</div>
									<div className="form-group">
										<label>Teléfono de contacto</label>
										<input name="telefono" type="tel" placeholder="Ej: +57 300 123 4567" value={order.telefono} onChange={handleOrderChange} required />
									</div>
									<div className="payment-section">
										<label className="payment-label">Método de pago</label>
										<div className="payment-options">
											<label className="payment-option">
												<input type="radio" name="metodo" value="PSE" checked={order.metodo === 'PSE'} onChange={handleOrderChange} required />
												<span className="payment-text">💳 PSE</span>
											</label>
											<label className="payment-option">
												<input type="radio" name="metodo" value="Tarjeta" checked={order.metodo === 'Tarjeta'} onChange={handleOrderChange} required />
												<span className="payment-text">💳 Tarjeta</span>
											</label>
											<label className="payment-option">
												<input type="radio" name="metodo" value="Efectivo" checked={order.metodo === 'Efectivo'} onChange={handleOrderChange} required />
												<span className="payment-text">💵 Efectivo</span>
											</label>
										</div>
									</div>
									<button type="submit" className="order-submit-btn">Confirmar pedido</button>
								</form>
							</div>
						)}
						{pedidoEnviado && (
							<div className="contact-success" style={{ marginTop: 18 }}>¡Pedido enviado correctamente!</div>
						)}
					</>
				)}
			</div>
		</div>
	);
}