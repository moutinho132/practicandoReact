import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Experience {
    title: string;
    company: string;
    duration: string;
    description: string;
}

interface CardBodyProps {
    experience: Experience;
}

interface CardBodyProps {
    experiences: Experience[];
}

const CardBody: React.FC<CardBodyProps> = ({ experiences }) => {
    return (
        <div>
            {experiences.map((experience, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{experience.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{experience.company}</h6>
                        <p className="card-text">{experience.duration}</p>
                        <p className="card-text">{experience.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardBody;