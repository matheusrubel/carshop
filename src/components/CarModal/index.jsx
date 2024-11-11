import React from 'react';
import './styles.css';

export function CarModal({ car, onClose }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-image">
          <img src={car.imagem} alt={`${car.marca} ${car.modelo}`} />
        </div>
        
        <div className="modal-info">
          <h2>{car.modelo}</h2>
          <h3>{car.marca}</h3>
          
          <div className="modal-details">
            <div className="detail-item">
              <span className="label">Ano:</span>
              <span>{car.ano}</span>
            </div>
            <div className="detail-item">
              <span className="label">Preço:</span>
              <span>{formatPrice(car.preco)}</span>
            </div>
            <div className="detail-item">
              <span className="label">Status:</span>
              <span className={car.disponivel ? 'available' : 'unavailable'}>
                {car.disponivel ? 'Disponível' : 'Indisponível'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 