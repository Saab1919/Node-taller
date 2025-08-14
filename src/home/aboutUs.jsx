import React from "react";

export default function aboutUs({ title, text }) {
  return (
    <section className="about-us">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}
