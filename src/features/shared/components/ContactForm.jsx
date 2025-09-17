import React, { useState } from "react";
import "../../../home/home.css";
import emailjs from '@emailjs/browser';

export default function ContactForm({ onClose }) {
  const [show, setShow] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  React.useEffect(() => {
    setTimeout(() => setShow(true), 50);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // EmailJS config
    const serviceId = 'service_ll7fl6a';
    const templateId = 'template_3wc4pde';
    const publicKey = 'N8dLm0hcixBbqVCEP';
    // Los valores deben coincidir con los de tu plantilla en EmailJS
    emailjs.send(serviceId, templateId, {
      nombre: form.nombre,
      email: form.email,
      mensaje: form.mensaje,
      to_email: 'blandonsantiago67@gmail.com',
    }, publicKey)
      .then(() => {
        setSent(true);
        setTimeout(() => {
          setSent(false);
          onClose();
        }, 1800);
      })
      .catch(() => {
        alert('Error al enviar el mensaje.');
      });
  };

  return (
    <div className={`contact-modal${show ? " show" : ""}`}>
      <div className="contact-card">
        <button className="close-btn" onClick={onClose}>Cerrar</button>
        <h2>Contacto</h2>
        {sent ? (
          <div className="contact-success">¡Mensaje enviado correctamente!</div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="nombre" type="text" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Correo electrónico" value={form.email} onChange={handleChange} required />
            <textarea name="mensaje" placeholder="Mensaje" rows={4} value={form.mensaje} onChange={handleChange} required />
            <button type="submit" className="send-btn">Enviar</button>
          </form>
        )}
      </div>
    </div>
  );
}
