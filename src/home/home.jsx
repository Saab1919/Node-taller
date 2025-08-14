import React from "react";
import Header from "./header";
import Banner from "./banner";
import ProductList from "./ProductList";
import AboutUs from "./aboutUs";
import Footer from "./footer";
import "./home.css"; 

export default function Home() {
  const menuItems = [
    { text: "Inicio", href: "/" },
    { text: "Catálogo", href: "/catalogo.html" },
    { text: "Ofertas", href: "/ofertas.html" },
    { text: "Nosotros", href: "/nosotros.html" },
    { text: "Contacto", href: "/contacto.html" },
  ];

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
      description: "Monitor gamer ancho de 49 pulgadas",
      price: 150.0,
    },
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

  return (
    <div className="home-container">
      <Header
        logo="KeyStore"
        menuItems={menuItems}
        phone="+57 300 123 4567"
        email="contacto@keystore.com"
      />

      <Banner
        image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
        title="Nuevas Tendencias 2025"
        description="Renueva tu estilo con nuestra colección más reciente de productos de alta calidad."
        buttonText="Ver catálogo"
        buttonLink="/catalogo.html"
      />

      <ProductList products={products} />

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
    </div>
  );
}
