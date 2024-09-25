// Footer.tsx
import React from 'react';
import './Footer.css';

interface FooterProps {
    title: string;
    message: string;
    buttonText: string;
    onButtonClick: () => void;
}

const Footer = ({ title, message, buttonText, onButtonClick }: FooterProps) => {
    return (
        <footer className="footer">
            <div className="banner">
                <h2>{title}</h2>
                <p>{message}</p>
                <button className="btn" onClick={onButtonClick}>{buttonText}</button>
            </div>
        </footer>
    );
};

export default Footer;
