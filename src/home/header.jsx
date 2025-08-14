import React from "react";

export default function header({ logo, menuItems, phone, email }) {
  return (
    <header className="header">
      <div className="logo">{logo}</div>

      <nav className="menu">
        {menuItems.map((item, index) => (
          <a key={index} href={item.href}>
            {item.text}
          </a>
        ))}
      </nav>

      <div className="search-box">
        <input type="text" placeholder="Buscar productos..." />
        <button>🔍</button>
      </div>

      <div className="contact-info">
        <span>📞 {phone}</span>
        <span>✉️ {email}</span>
      </div>
    </header>
  );
}
