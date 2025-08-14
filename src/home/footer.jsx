import React from "react";

export default function footer({ text, links, social }) {
  return (
    <footer className="footer">
      <div className="footer-links">
        {links.map((link, index) => (
          <a key={index} href={link.href}>
            {link.text}
          </a>
        ))}
      </div>

      <div className="social-icons">
        {social.map((item, index) => (
          <a key={index} href={item.href} target="_blank" rel="noreferrer">
            {item.icon}
          </a>
        ))}
      </div>

      <form className="newsletter">
        <input type="email" placeholder="Tu correo electrónico" />
        <button>Suscribirse</button>
      </form>

      <p>{text}</p>
    </footer>
  );
}
