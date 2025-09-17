// Página principal restaurada
import React, { useState } from "react";

import Banner from "../../shared/components/Banner";
import ProductList from "../../shared/components/ProductList";
import AboutUs from "../../shared/components/AboutUs";
import Footer from "../../shared/components/Footer";
import Cart from "../../shared/components/Cart";
import Header from "../../shared/components/Header";
import ContactForm from "../../shared/components/ContactForm";
import "../../../home/home.css";

const products = [
	{
		image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
		title: "Mochila Fjallraven",
		description: "Mochila resistente al agua con compartimento para portátil.",
		price: 109.95,
	},
	{
		image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
		title: "Camisa Slim Fit",
		description: "Camisa casual de alta calidad, perfecta para oficina o eventos.",
		price: 22.3,
	},
	{
		image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
		title: "Chaqueta Impermeable",
		description: "Chaqueta térmica e impermeable, ideal para invierno.",
		price: 59.99,
	},
	{
		image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
		title: "Samsung Curved Gaming Monitor",
		description: "Monitor gamer ancho de 49 pulgadas.",
		price: 150.0,
	},
	{
		image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nike.com%2Fus%2Fes%2Fw%2Fhombres-running-calzado-37v7jznik1zy7ok&psig=AOvVaw23Mn6KP0YUyqSQ8AbbYN7b&ust=1757080687790000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPDh-uKhv48DFQAAAAAdAAAAABAE",
		title: "Zapatos deportivos Nike",
		description: "Zapatos cómodos y modernos para correr o uso diario.",
		price: 89.99,
	},
	{
		image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.universalshopcolombia.com.co%2Fproductos%2Freloj-casio-b640wc-5a-retro-clasico-juvenil%2F%3Fsrsltid%3DAfmBOoqrK-QeE9B7DbsYaX6EGVP6GRwENV7EhUxvEDKdw3UexMCHjwZw&psig=AOvVaw3c3D9unYdGy0zMU1hYLpvb&ust=1757080750941000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOjav4Civ48DFQAAAAAdAAAAABAE",
		title: "Reloj Casio Vintage",
		description: "Reloj digital clásico, resistente al agua y con alarma.",
		price: 39.99,
	},
	{
		image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ray-ban.com%2Fspain%2Fgafas-de-sol%2FRB3025JM%2BUNISEX%2Baviator%2Bfull%2Bcolor%2Blegend-rojo%2F8056597446587&psig=AOvVaw0lzKznPBfyRYnFyHe4k1Js&ust=1757080861050000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJjXlraiv48DFQAAAAAdAAAAABAE",
		title: "Gafas Ray-Ban Aviator",
		description: "Gafas de sol originales, protección UV y diseño icónico.",
		price: 129.99,
	},
	{
		image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-premium%2Fbolso-cuero-hombre-hecho-cuero-genuino-foto-fue-creada-taller-artesanal-fondo-hay-herramientas-trabajo-cinturon-maletin-cuero-marron-cartera-trabajo_35596234.htm&psig=AOvVaw0T9SbIIDQXCJ7dW4gfA57z&ust=1757080914360000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKC23dCiv48DFQAAAAAdAAAAABAE",
		title: "Bolso de cuero artesanal",
		description: "Bolso hecho a mano, ideal para trabajo o universidad.",
		price: 79.99,
	},
	{
		image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.falabella.com.co%2Ffalabella-co%2Fproduct%2Fprod13431503%2FAudifonos-bluetooth-JBL-TFLEX-%2F72724690&psig=AOvVaw2MZx4IydS6sWLFtQqUF6SF&ust=1757080956064000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOj_p_Oiv48DFQAAAAAdAAAAABAE",
		title: "Audífonos inalámbricos JBL",
		description: "Sonido potente, batería de larga duración y bluetooth.",
		price: 59.99,
	},
	{
		image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ubuy.com.co%2Fsp%2Fproduct%2F4K16MTLYY-canon-eos-rebel-t3i-18-megapixel-digital-slr-camera-with-lens-0-71-2-17%3Fsrsltid%3DAfmBOopszJ3Zb1p1xnDA-zkm2_sJZBzo_TqsooMelX8_eDnr4gocA4Zq&psig=AOvVaw0TizjGzFBfXX3sQbCkkGnl&ust=1757081025333000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMiwhISjv48DFQAAAAAdAAAAABAE",
		title: "Cámara Canon EOS Rebel",
		description: "Cámara profesional para fotografía y video HD.",
		price: 499.99,
	},
];

export default function HomePage() {
	const [cart, setCart] = useState([]);
	const [showCart, setShowCart] = useState(false);
	const [search, setSearch] = useState("");
	const [showContact, setShowContact] = useState(false);

		const menuItems = [
			{ text: "Inicio", href: "/" },
			{ text: "Catálogo", href: "/catalogo.html" },
			{ text: "Ofertas", href: "/ofertas.html" },
			{ text: "Nosotros", href: "/nosotros.html" },
			{ text: "Contacto", href: "#contacto", onClick: () => setShowContact(true) },
		];

	const footerLinks = [
		{ text: "Política de Privacidad", href: "/privacidad.html" },
		{ text: "Términos y Condiciones", href: "/terminos.html" },
		{ text: "Ayuda", href: "/ayuda.html" },
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
	};

	// Eliminar producto del carrito por índice
	const handleRemoveFromCart = (removeIdx) => {
		setCart((prev) => prev.filter((_, idx) => idx !== removeIdx));
	};

		return (
			<div className="home-container">
				<Header
					logo="KeyStore"
					menuItems={menuItems}
					phone="+57 300 123 4567"
					email="contacto@keystore.com"
					cart={cart}
					onCartClick={() => setShowCart(true)}
					search={search}
					setSearch={setSearch}
				/>

				{showCart && (
					<Cart cart={cart} onClose={() => setShowCart(false)} onRemoveFromCart={handleRemoveFromCart} />
				)}

				{showContact && (
					<ContactForm onClose={() => setShowContact(false)} />
				)}

				{!showContact && <>
					<Banner
						image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
						title="Nuevas Tendencias 2025"
						description="Renueva tu estilo con nuestra colección más reciente de productos de alta calidad."
						buttonText="Ver catálogo"
						buttonLink="/catalogo.html"
					/>

					<ProductList products={filteredProducts} onAddToCart={handleAddToCart} />

					<AboutUs
						title="Sobre KeyStore"
						text="Somos una tienda dedicada a ofrecer productos de la más alta calidad. 
									Nos apasiona brindar un excelente servicio y garantizar que cada cliente 
									encuentre lo que busca, con precios justos y entrega rápida."
					/>

					<Footer
						text="© 2025 KeyStore. Todos los derechos reservados."
						links={footerLinks}
						social={socialLinks}
					/>
				</>}
			</div>
		);
}
