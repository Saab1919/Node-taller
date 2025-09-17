import React from "react";

export default function Footer({ text, links, social }) {
	return (
		<footer className="footer">
			<div className="footer-text">{text}</div>
			<div className="footer-links">
				{links.map((link, idx) => (
					<a key={idx} href={link.href}>{link.text}</a>
				))}
			</div>
			<div className="footer-social">
				{social.map((s, idx) => (
					<a key={idx} href={s.href}>{s.icon}</a>
				))}
			</div>
		</footer>
	);
}
