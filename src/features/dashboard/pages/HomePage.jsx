import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "../../shared/components/Banner";
import ProductList from "../../shared/components/ProductList";
import AboutUs from "../../shared/components/AboutUs";
import Footer from "../../shared/components/Footer";
import Cart from "../../shared/components/Cart";
import Header from "../../shared/components/Header";
import ContactForm from "../../shared/components/ContactForm";
import Profile from "../../shared/components/Profile";
import "../../../assets/home.css";

export default function HomePage() {
	const [cart, setCart] = useState([]);
	const [showCart, setShowCart] = useState(false);
	const [search, setSearch] = useState("");
	const [showContact, setShowContact] = useState(false);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(data => {
				setProducts(data);
				setLoading(false);
			})
			.catch(error => {
				console.error('Error fetching products:', error);
				setLoading(false);
			});
	}, []);

		const [currentView, setCurrentView] = useState('home');
	const [favorites, setFavorites] = useState([]);
	const [showToast, setShowToast] = useState(null);
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

		const menuItems = [
			{ text: "Inicio", onClick: () => setCurrentView('home'), view: 'home' },
			{ text: "Catálogo", onClick: () => setCurrentView('products'), view: 'products' },
			{ text: "Nosotros", onClick: () => setCurrentView('about'), view: 'about' },
			{ text: "👤", onClick: () => setCurrentView('profile'), isIcon: true, view: 'profile' },
		];

	const footerLinks = [
		{ text: "Política de Privacidad", href: "#privacidad" },
		{ text: "Términos y Condiciones", href: "#terminos" },
		{ text: "Ayuda", href: "#ayuda" },
	];

	const socialLinks = [
		{ icon: "📘", href: "https://facebook.com" },
		{ icon: "📷", href: "https://instagram.com" },
		{ icon: "🐦", href: "https://twitter.com" },
	];

	// Filtrar productos según búsqueda
	const filteredProducts = products.filter(
		(p) =>
			p.title.toLowerCase().includes(search.toLowerCase()) ||
			p.description.toLowerCase().includes(search.toLowerCase())
	);

	// Función para agregar producto al carrito
	const handleAddToCart = (product) => {
		setCart((prev) => [...prev, product]);
		showToastMessage(`${product.title} agregado al carrito! 🛒`);
	};

	// Función para manejar favoritos
	const toggleFavorite = (product) => {
		setFavorites(prev => {
			const isFavorite = prev.some(fav => fav.id === product.id);
			if (isFavorite) {
				showToastMessage(`${product.title} removido de favoritos 💔`);
				return prev.filter(fav => fav.id !== product.id);
			} else {
				showToastMessage(`${product.title} agregado a favoritos! ❤️`);
				return [...prev, product];
			}
		});
	};

	// Función para mostrar toast
	const showToastMessage = (message) => {
		setShowToast(message);
		setTimeout(() => setShowToast(null), 3000);
	};

	// Eliminar producto del carrito por índice
	const handleRemoveFromCart = (removeIdx) => {
		setCart((prev) => prev.filter((_, idx) => idx !== removeIdx));
	};

		return (
			<div className="home-container">
				<Header
					logo="TRICKSTORE"
					menuItems={menuItems}
					currentView={currentView}
					phone="+57 300 123 4567"
					email="contacto@trickstore.com"
					cart={cart}
					onCartClick={() => setShowCart(true)}
					search={search}
					setSearch={setSearch}
				/>

				<div className={`cart-sidebar ${showCart ? 'cart-open' : ''}`}>
					<Cart cart={cart} onClose={() => setShowCart(false)} onRemoveFromCart={handleRemoveFromCart} />
				</div>
				{showCart && <div className="cart-overlay" onClick={() => setShowCart(false)}></div>}

				{showToast && (
					<div className="toast-notification">
						{showToast}
					</div>
				)}

				{showContact && (
					<ContactForm onClose={() => setShowContact(false)} />
				)}

				{!showContact && (
					<>
						{currentView === 'home' && (
							<>
								<div className="parallax-banner" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
									<Banner
										image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
										title="Bienvenido a TRICKSTORE"
										description="Descubre nuestra increíble colección de productos de alta calidad. Tu estilo, nuestra pasión."
										buttonText="Explorar Productos"
										buttonAction={() => setCurrentView('products')}
									/>
								</div>
								<div className="features-section" style={{ padding: '80px 20px', textAlign: 'center', background: '#1a1a1a' }}>
									<h2 style={{ color: '#e91e63', fontSize: '2.5rem', marginBottom: '30px' }}>Por qué elegir TRICKSTORE</h2>
									<div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
										<div className="feature-card" style={{ background: '#2a2a2a', padding: '30px', borderRadius: '15px', border: '2px solid #e91e63' }}>
											<h3 style={{ color: '#e91e63', marginBottom: '15px' }}>🚚 Envío Rápido</h3>
											<p style={{ color: '#ccc' }}>Entrega en 24-48 horas en toda Colombia</p>
										</div>
										<div className="feature-card" style={{ background: '#2a2a2a', padding: '30px', borderRadius: '15px', border: '2px solid #e91e63' }}>
											<h3 style={{ color: '#e91e63', marginBottom: '15px' }}>✨ Calidad Premium</h3>
											<p style={{ color: '#ccc' }}>Productos seleccionados con los más altos estándares</p>
										</div>
										<div className="feature-card" style={{ background: '#2a2a2a', padding: '30px', borderRadius: '15px', border: '2px solid #e91e63' }}>
											<h3 style={{ color: '#e91e63', marginBottom: '15px' }}>📞 Soporte 24/7</h3>
											<p style={{ color: '#ccc' }}>Atención al cliente siempre disponible</p>
										</div>
									</div>
								</div>
							</>
						)}

						{currentView === 'products' && (
							<div className="products-page" style={{ padding: '40px 20px', minHeight: '80vh' }}>
								<h1 style={{ textAlign: 'center', color: '#e91e63', marginBottom: '40px', fontSize: '2.5rem' }}>Nuestros Productos</h1>
								<ProductList products={filteredProducts} onAddToCart={handleAddToCart} toggleFavorite={toggleFavorite} favorites={favorites} />
							</div>
						)}

						{currentView === 'about' && (
							<div style={{ padding: '40px 20px', minHeight: '80vh' }}>
								<AboutUs
									title="Sobre TRICKSTORE"
									text="Somos una tienda dedicada a ofrecer productos de la más alta calidad. Nos apasiona brindar un excelente servicio y garantizar que cada cliente encuentre lo que busca, con precios justos y entrega rápida."
								/>
								<div style={{ maxWidth: '1200px', margin: '60px auto 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
									<div style={{ background: '#2a2a2a', padding: '40px', borderRadius: '15px', border: '2px solid #e91e63' }}>
										<h3 style={{ color: '#e91e63', marginBottom: '20px', fontSize: '1.5rem' }}>Nuestra Historia</h3>
										<p style={{ color: '#ccc', lineHeight: '1.6' }}>Fundada en 2025, TRICKSTORE nació con la visión de democratizar el acceso a productos de calidad. Comenzamos como una pequeña tienda y hoy somos líderes en e-commerce.</p>
									</div>
									<div style={{ background: '#2a2a2a', padding: '40px', borderRadius: '15px', border: '2px solid #e91e63' }}>
										<h3 style={{ color: '#e91e63', marginBottom: '20px', fontSize: '1.5rem' }}>Nuestra Misión</h3>
										<p style={{ color: '#ccc', lineHeight: '1.6' }}>Conectar a las personas con productos que mejoren su vida diaria, ofreciendo una experiencia de compra excepcional y un servicio al cliente incomparable.</p>
									</div>
								</div>
							</div>
						)}

						{currentView === 'profile' && (
							<Profile />
						)}

						<Footer
							text="© 2025 TRICKSTORE. Todos los derechos reservados."
							links={footerLinks}
							social={socialLinks}
						/>
					</>
				)}
			</div>
		);
}