import React from "react";
import "./Header.css";

export default function Header({ logo, menuItems, phone, email, cart, onCartClick, search, setSearch }) {
	return (
		<header className="header">
			<div className="logo">{logo}</div>
				<nav className="menu">
					{menuItems.map((item, index) => (
						item.onClick ? (
							<a key={index} href={item.href} onClick={e => { e.preventDefault(); item.onClick(); }}>{item.text}</a>
						) : (
							<a key={index} href={item.href}>{item.text}</a>
						)
					))}
				</nav>
			<div className="search-box">
				<input type="text" placeholder="Buscar productos..." value={search} onChange={e => setSearch(e.target.value)} />
				<button disabled>🔍</button>
			</div>
			<div className="contact-info">
				<span>📞</span>
				<span>✉️ {email}</span>
			</div>
					<div className="cart-icon" title="Ver carrito" onClick={onCartClick}>
							<span role="img" aria-label="carrito">🛒</span>
							<span>{cart ? cart.length : 0}</span>
					</div>
		</header>
	);
}
