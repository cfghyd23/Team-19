import React from 'react';
import './CountBlood.css'; // Assuming you have a separate CSS file for styling

const Card = ({ title, content }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};


const CountBlood = () => {


    const totalRows = 2;
    const cardsPerRow = 4;
    const totalCards = totalRows * cardsPerRow;

    const renderCards = () => {
        const cards = [];
        cards.push(<Card key={0} title="A+" content="Units available : 10" />);
        cards.push(<Card key={1} title="A-" content="Units available : 16" />);
        cards.push(<Card key={2} title="B+" content="Units available : 78" />);
        cards.push(<Card key={3} title="B-" content="Units available : 45" />);
        cards.push(<Card key={4} title="AB+" content="Units available : 32" />);
        cards.push(<Card key={5} title="AB-" content="Units available : 76" />);
        cards.push(<Card key={6} title="O+" content="Units available : 32" />);
        cards.push(<Card key={7} title="O-" content="Units available : 89" />);

        return cards;
    };

    return (
        <div>
            <h1 className="page-heading">Service Units</h1>
            <div className="card-container">{renderCards()}</div>
        </div>
    );
};

export default CountBlood;