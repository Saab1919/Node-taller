import React, { useState } from "react";

export default function Profile() {
	const [userData, setUserData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		city: '',
		country: '',
		birthDate: '',
		gender: ''
	});

	const [isEditing, setIsEditing] = useState(false);

	const handleInputChange = (e) => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value
		});
	};

	const handleSave = () => {
		setIsEditing(false);
		// Aquí podrías guardar en localStorage o enviar a una API
		localStorage.setItem('trickstore_user', JSON.stringify(userData));
	};

	React.useEffect(() => {
		const savedData = localStorage.getItem('trickstore_user');
		if (savedData) {
			setUserData(JSON.parse(savedData));
		}
	}, []);

	return (
		<div style={{ padding: '40px 20px', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
			<div style={{ background: '#2a2a2a', borderRadius: '20px', padding: '40px', border: '2px solid #e91e63' }}>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
					<h1 style={{ color: '#e91e63', fontSize: '2.5rem', margin: 0 }}>Mi Perfil</h1>
					<button 
						onClick={() => setIsEditing(!isEditing)}
						style={{
							background: isEditing ? '#666' : '#e91e63',
							color: 'white',
							border: 'none',
							padding: '10px 20px',
							borderRadius: '8px',
							cursor: 'pointer',
							fontSize: '1rem'
						}}
					>
						{isEditing ? 'Cancelar' : 'Editar'}
					</button>
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
					<div>
						<label style={{ color: '#e91e63', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
							Nombre Completo
						</label>
						<input
							type="text"
							name="name"
							value={userData.name}
							onChange={handleInputChange}
							disabled={!isEditing}
							style={{
								width: '100%',
								padding: '12px',
								border: '2px solid #444',
								borderRadius: '8px',
								background: isEditing ? '#333' : '#1a1a1a',
								color: '#fff',
								fontSize: '1rem'
							}}
							placeholder="Ingresa tu nombre completo"
						/>
					</div>

					<div>
						<label style={{ color: '#e91e63', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
							Email
						</label>
						<input
							type="email"
							name="email"
							value={userData.email}
							onChange={handleInputChange}
							disabled={!isEditing}
							style={{
								width: '100%',
								padding: '12px',
								border: '2px solid #444',
								borderRadius: '8px',
								background: isEditing ? '#333' : '#1a1a1a',
								color: '#fff',
								fontSize: '1rem'
							}}
							placeholder="tu@email.com"
						/>
					</div>

					<div>
						<label style={{ color: '#e91e63', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
							Teléfono
						</label>
						<input
							type="tel"
							name="phone"
							value={userData.phone}
							onChange={handleInputChange}
							disabled={!isEditing}
							style={{
								width: '100%',
								padding: '12px',
								border: '2px solid #444',
								borderRadius: '8px',
								background: isEditing ? '#333' : '#1a1a1a',
								color: '#fff',
								fontSize: '1rem'
							}}
							placeholder="+57 300 123 4567"
						/>
					</div>

					<div>
						<label style={{ color: '#e91e63', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
							Fecha de Nacimiento
						</label>
						<input
							type="date"
							name="birthDate"
							value={userData.birthDate}
							onChange={handleInputChange}
							disabled={!isEditing}
							style={{
								width: '100%',
								padding: '12px',
								border: '2px solid #444',
								borderRadius: '8px',
								background: isEditing ? '#333' : '#1a1a1a',
								color: '#fff',
								fontSize: '1rem'
							}}
						/>
					</div>

					<div style={{ gridColumn: '1 / -1' }}>
						<label style={{ color: '#e91e63', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
							Dirección
						</label>
						<input
							type="text"
							name="address"
							value={userData.address}
							onChange={handleInputChange}
							disabled={!isEditing}
							style={{
								width: '100%',
								padding: '12px',
								border: '2px solid #444',
								borderRadius: '8px',
								background: isEditing ? '#333' : '#1a1a1a',
								color: '#fff',
								fontSize: '1rem'
							}}
							placeholder="Calle 123 #45-67"
						/>
					</div>

					<div>
						<label style={{ color: '#e91e63', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
							Ciudad
						</label>
						<input
							type="text"
							name="city"
							value={userData.city}
							onChange={handleInputChange}
							disabled={!isEditing}
							style={{
								width: '100%',
								padding: '12px',
								border: '2px solid #444',
								borderRadius: '8px',
								background: isEditing ? '#333' : '#1a1a1a',
								color: '#fff',
								fontSize: '1rem'
							}}
							placeholder="Bogotá"
						/>
					</div>

					<div>
						<label style={{ color: '#e91e63', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
							País
						</label>
						<select
							name="country"
							value={userData.country}
							onChange={handleInputChange}
							disabled={!isEditing}
							style={{
								width: '100%',
								padding: '12px',
								border: '2px solid #444',
								borderRadius: '8px',
								background: isEditing ? '#333' : '#1a1a1a',
								color: '#fff',
								fontSize: '1rem'
							}}
						>
							<option value="">Selecciona un país</option>
							<option value="CO">Colombia</option>
							<option value="MX">México</option>
							<option value="AR">Argentina</option>
							<option value="PE">Perú</option>
							<option value="CL">Chile</option>
						</select>
					</div>
				</div>

				{isEditing && (
					<button
						onClick={handleSave}
						style={{
							background: '#e91e63',
							color: 'white',
							border: 'none',
							padding: '15px 30px',
							borderRadius: '10px',
							cursor: 'pointer',
							fontSize: '1.1rem',
							fontWeight: 'bold',
							marginTop: '30px',
							width: '100%'
						}}
					>
						Guardar Cambios
					</button>
				)}

				<div style={{ marginTop: '40px', padding: '20px', background: '#1a1a1a', borderRadius: '10px' }}>
					<h3 style={{ color: '#e91e63', marginBottom: '15px' }}>Estadísticas de Compras</h3>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px' }}>
						<div style={{ textAlign: 'center' }}>
							<div style={{ fontSize: '2rem', color: '#e91e63', fontWeight: 'bold' }}>0</div>
							<div style={{ color: '#ccc' }}>Pedidos</div>
						</div>
						<div style={{ textAlign: 'center' }}>
							<div style={{ fontSize: '2rem', color: '#e91e63', fontWeight: 'bold' }}>$0</div>
							<div style={{ color: '#ccc' }}>Total Gastado</div>
						</div>
						<div style={{ textAlign: 'center' }}>
							<div style={{ fontSize: '2rem', color: '#e91e63', fontWeight: 'bold' }}>⭐</div>
							<div style={{ color: '#ccc' }}>Cliente Nuevo</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}