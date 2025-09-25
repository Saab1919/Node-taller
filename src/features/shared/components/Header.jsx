import React from "react";
import { Link } from "react-router-dom";


export default function Header({ logo, menuItems, currentView, phone, email, cart, onCartClick, search, setSearch }) {
		return (
			<header className="header">
				<div className="logo">{logo}</div>
				<nav className="menu">
					{menuItems.map((item, index) => (
						item.onClick ? (
							<button 
								key={index} 
								onClick={item.onClick}
								className={`nav-button ${currentView === item.view ? 'active' : ''}`}
								style={{
									background: currentView === item.view ? '#e91e63' : 'none',
									border: 'none',
									color: currentView === item.view ? 'white' : 'inherit',
									cursor: 'pointer',
									fontSize: item.isIcon ? '1.5rem' : 'inherit',
									padding: item.isIcon ? '8px' : '10px 15px',
									borderRadius: item.isIcon ? '50%' : '20px',
									transition: 'all 0.3s',
									fontWeight: currentView === item.view ? '600' : 'normal',
									boxShadow: currentView === item.view ? '0 4px 15px rgba(233, 30, 99, 0.3)' : 'none'
								}}
							>
								{item.text}
							</button>
						) : (
							<Link key={index} to={item.href}>{item.text}</Link>
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
