import React, { useState, useEffect } from 'react';
import { getCars } from '../../services/cars.service';
import './styles.css';
import { CarModal } from '../CarModal';

export function CarList({ searchTerm }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function fetchCars() {
    try {
      setLoading(true);
      const response = await getCars();
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setCars(response);
    } catch (err) {
      setError('Erro ao carregar os veículos. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCars();
  }, []);

  const filteredCars = searchTerm
    ? cars.filter(car =>
        car.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.marca.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : cars;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Carregando veículos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <i className="fas fa-exclamation-circle"></i>
        <p>{error}</p>
        <button onClick={fetchCars} className="retry-button">
          Tentar novamente
        </button>
      </div>
    );
  }

  if (filteredCars.length === 0) {
    return (
      <div className="no-results">
        <i className="fas fa-car-side"></i>
        <p>Nenhum veículo encontrado</p>
      </div>
    );
  }

  return (
    <>
      <div className="cars-grid">
        {filteredCars.map(car => (
          <div key={car.id} className="car-card">
            <div className="car-image">
              <img 
                src={car.imagem} 
                alt={`${car.marca} ${car.modelo}`}
                loading="lazy"
              />
              <div className="car-info">
                <h3>{car.modelo}</h3>
                <p>{car.marca}</p>
                <p>Ano: {car.ano}</p>
                <p>Preço: {formatPrice(car.preco)}</p>
              </div>
            </div>
            <div className="car-info">
              <h2>{car.modelo}</h2>
              <h3>{car.marca}</h3>
              <div className="car-details">
                <span>Ano: {car.ano}</span>
                <span className="price">{formatPrice(car.preco)}</span>
              </div>
              <button 
                className="btn-details" 
                onClick={() => {
                  setSelectedCar(car);
                  setIsModalOpen(true);
                }}
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <CarModal 
          car={selectedCar}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedCar(null);
          }}
        />
      )}
    </>
  );
} 