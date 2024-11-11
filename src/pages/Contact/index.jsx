import React, { useState } from 'react';
import './styles.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulando uma requisição
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccessModal(true);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="contact-container">
      <h2>Entre em Contato</h2>
      <p>Tire suas dúvidas ou faça uma cotação</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className={`submit-button ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          {loading ? (
            <div className="loader"></div>
          ) : (
            'Enviar Mensagem'
          )}
        </button>
      </form>

      <div className="contact-info">
        <h3>Informações Adicionais</h3>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>Av. Principal, 1000 - Centro</p>
        </div>
        <div className="info-item">
          <i className="fas fa-phone"></i>
          <p>(11) 99999-9999</p>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <p>contato@carshop.com</p>
        </div>
      </div>

      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="success-modal">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3>Mensagem Enviada!</h3>
            <p>Agradecemos seu contato. Retornaremos em breve!</p>
            <button 
              className="close-modal-button"
              onClick={() => setShowSuccessModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 