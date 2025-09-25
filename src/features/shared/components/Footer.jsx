import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Footer({ text, links, social }) {
	const [showContact, setShowContact] = useState(false);
	const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
	const [sent, setSent] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
		emailjs.send(
			'service_ll7fl6a',
			'template_3wc4pde',
			{
				nombre: form.nombre,
				email: form.email,
				mensaje: form.mensaje,
			},
			'N8dLm0hcixBbqVCEP'
		)
		.then(() => {
			setSent(true);
			setTimeout(() => {
				setSent(false);
				setForm({ nombre: '', email: '', mensaje: '' });
			}, 2000);
		})
		.catch((error) => {
			console.error('Error al enviar email:', error);
			alert('Error al enviar el mensaje. Inténtalo de nuevo.');
		});
	};

	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-section">
					<h3>TRICKSTORE</h3>
					<p>Tu tienda de confianza para productos de alta calidad</p>
					<div className="contact-info">
						<p>📞 +57 300 123 4567</p>
						<p>✉️ contacto@trickstore.com</p>
					</div>
				</div>
				<div className="footer-section">
					<h4>Enlaces</h4>
					<div className="footer-links">
						{links.map((link, idx) => (
							<a key={idx} href={link.href}>{link.text}</a>
						))}
					</div>
				</div>
				<div className="footer-section">
					<h4>Síguenos</h4>
					<div className="social-links">
						{social.map((s, idx) => (
							<a key={idx} href={s.href}>{s.icon}</a>
						))}
					</div>
				</div>
				<div className="footer-section contact-section">
					<h4>Contáctanos</h4>
					{sent ? (
						<div className="contact-success-footer">¡Mensaje enviado!</div>
					) : (
						<form className="footer-contact-form" onSubmit={handleSubmit}>
							<input 
								name="nombre" 
								type="text" 
								placeholder="Tu nombre" 
								value={form.nombre} 
								onChange={handleChange} 
								required 
							/>
							<input 
								name="email" 
								type="email" 
								placeholder="Tu email" 
								value={form.email} 
								onChange={handleChange} 
								required 
							/>
							<textarea 
								name="mensaje" 
								placeholder="Tu mensaje" 
								rows={3} 
								value={form.mensaje} 
								onChange={handleChange} 
								required 
							/>
							<button type="submit" className="footer-send-btn">Enviar</button>
						</form>
					)}
				</div>
			</div>
			<div className="footer-bottom">
				<p>{text}</p>
			</div>
		</footer>
	);
}
