import React from "react";

export default function ProductList({ products, onAddToCart, toggleFavorite, favorites = [] }) {
	const [currentIndex, setCurrentIndex] = React.useState(0);
	const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 480);
	const [touchStart, setTouchStart] = React.useState(0);
	const [isDragging, setIsDragging] = React.useState(false);
	const [dragOffset, setDragOffset] = React.useState(0);
	const [isTransitioning, setIsTransitioning] = React.useState(false);
	const gridRef = React.useRef(null);
	
	React.useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 480);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	
	const itemsPerView = isMobile ? 1 : 4;
	const maxIndex = Math.max(0, products.length - itemsPerView);
	const cardWidth = 100 / itemsPerView;

	const nextSlide = () => {
		if (isTransitioning || isDragging) return;
		setIsTransitioning(true);
		setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
		setTimeout(() => setIsTransitioning(false), 400);
	};

	const prevSlide = () => {
		if (isTransitioning || isDragging) return;
		setIsTransitioning(true);
		setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
		setTimeout(() => setIsTransitioning(false), 400);
	};

	const handleTouchStart = (e) => {
		const touch = e.targetTouches[0];
		setTouchStart(touch.clientX);
		setIsDragging(true);
		setIsTransitioning(false);
	};

	const handleTouchMove = (e) => {
		if (!isDragging || isTransitioning) return;
		
		const touch = e.targetTouches[0];
		const deltaX = touch.clientX - touchStart;
		
		// Resistencia simple en los bordes
		let resistance = 1;
		if (deltaX > 0 && currentIndex === 0) {
			resistance = 0.3;
		} else if (deltaX < 0 && currentIndex >= maxIndex) {
			resistance = 0.3;
		}
		
		setDragOffset(deltaX * resistance);
		e.preventDefault();
	};

	const handleTouchEnd = () => {
		if (!isDragging) return;
		
		setIsDragging(false);
		setIsTransitioning(true);
		
		const threshold = 80;
		const absOffset = Math.abs(dragOffset);
		
		if (absOffset > threshold) {
			if (dragOffset < 0 && currentIndex < maxIndex) {
				// Swipe left - next
				setCurrentIndex(prev => prev + 1);
			} else if (dragOffset > 0 && currentIndex > 0) {
				// Swipe right - prev
				setCurrentIndex(prev => prev - 1);
			}
		}
		
		// Reset offset y transición
		setDragOffset(0);
		setTouchStart(0);
		
		// Permitir nueva interacción después de la transición
		setTimeout(() => {
			setIsTransitioning(false);
		}, 400);
	};

	return (
		<section id="catalogo" className="products-section">
			<h2>Productos Destacados</h2>
			<div className="products-carousel">
				<button 
					className="carousel-btn prev" 
					onClick={prevSlide}
					disabled={isTransitioning}
					style={{ opacity: isTransitioning ? 0.5 : 1 }}
				>
					‹
				</button>
				<div 
					ref={gridRef}
					className={`products-grid ${isDragging ? 'dragging' : 'smooth-scroll'}`}
					style={{
						transform: `translateX(calc(-${currentIndex * cardWidth}% + ${dragOffset}px))`
					}}
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					{products.map((product, index) => (
						<div className="product-card" key={index}>
							{toggleFavorite && (
								<button 
									className="favorite-btn"
									onClick={() => toggleFavorite(product)}
									style={{
										position: 'absolute',
										top: '10px',
										right: '10px',
										background: 'rgba(0,0,0,0.7)',
										border: 'none',
										borderRadius: '50%',
										width: '40px',
										height: '40px',
										cursor: 'pointer',
										fontSize: '1.2rem',
										transition: 'all 0.3s'
									}}
								>
									{favorites.some(fav => fav.id === product.id) ? '❤️' : '🤍'}
								</button>
							)}
							<img src={product.image} alt={product.title} className="product-image" onError={e => {e.target.onerror=null; e.target.src='https://via.placeholder.com/200x200?text=Imagen+no+disponible';}} />
							<div className="product-info">
								<h3 className="product-title">{product.title}</h3>
								<p className="product-description">{product.description}</p>
								<p className="product-price">${product.price}</p>
								<button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
									🛒 Añadir al carrito
								</button>
							</div>
						</div>
					))}
				</div>
				<button 
					className="carousel-btn next" 
					onClick={nextSlide}
					disabled={isTransitioning}
					style={{ opacity: isTransitioning ? 0.5 : 1 }}
				>
					›
				</button>
			</div>
		</section>
	);
}
