import React from 'react';
import './Card.css'; // Assuming you have a separate CSS file for styling

const Card = ({ title, content, children }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h2>{title}</h2>
                <p>{content}</p>
                {children} {/* Render the chart component */}
            </div>
        </div>
    );
};

export default Card;
