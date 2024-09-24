// Footer.tsx
import React from 'react';
import './Footer.css'; // Asegúrate de crear un archivo CSS si deseas estilos personalizados

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="banner">
                <h2>¡Bienvenido a nuestro sitio!</h2>
                <p>Explora nuestras ofertas y promociones especiales.</p>
                <button className="btn">¡Descubre más!</button>
            </div>
        </footer>
    );
};

export default Footer;
