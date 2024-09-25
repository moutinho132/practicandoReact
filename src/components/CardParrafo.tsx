import React from 'react';

// Estilos en línea
const cardStyles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    cardTitle: {
        fontSize: '1.5em',
        marginBottom: '8px',
    },
    cardDescription: {
        fontSize: '1em',
        color: '#666',
    },
};

interface CardParrafoProps {
    title: string;
    description: string;
}

const CardParrafo: React.FC<CardParrafoProps> = ({ title, description }) => {
    return (
        <div style={cardStyles.card}>
            <h2 style={cardStyles.cardTitle}>{title}</h2>
            <p style={cardStyles.cardDescription}>{description}</p>
        </div>
    );
};

export default CardParrafo;
