import React from 'react';
import '../styles/Service.css'
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


const Service = () => {
  

  const totalRows = 3;
  const cardsPerRow =2;
  const totalCards = totalRows * cardsPerRow;

  const renderCards = () => {
    const cards = [];
    cards.push(<Card key={0} title="C. Sanjeevini Blood Bank" content={['Rtc X Roads']} />);
    cards.push(<Card key={1} title="Aaraadhya Blood Center" content={['Malakpet']} />);
    cards.push(<Card key={2} title="Sri Balaji Blood Bank" content={['KPHB Phase 4']} />);
    cards.push(<Card key={3} title="Rudhira Health Organisation" content={['Himayat Nagar']} />);
    cards.push(<Card key={4} title="Pranaam Blood Bank" content={['Nallagadla']} />);
    cards.push(<Card key={5} title="NTR Blood Bank" content={['Road No. 2 Bangara Hills']} />);

    return cards;
  };

  return (
    <div>
      <h1 className="page-heading">Service Units</h1>
      <div className="card-container">{renderCards()}</div>
    </div>
  );
};

export default Service;