import React from 'react';

interface TituloProps {
    titulo: string;
}

const Titulo: React.FC<TituloProps> = ({ titulo }) => {
    return (
        <header>
            <h1>{titulo}</h1>
        </header>
    );
};

export default Titulo;