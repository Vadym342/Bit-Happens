import React, { useState } from 'react';
import './FakeCheckoutModal.css';

const FakeCheckoutModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isPaid, setIsPaid] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cardNumber && name && cvv) {
      setIsPaid(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const closeModal = () => {
    onClose();
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyDigits = e.target.value.replace(/\D/g, '');
    setCardNumber(onlyDigits);
  };

  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyDigits = e.target.value.replace(/\D/g, '');
    setCvv(onlyDigits);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyLetters = e.target.value.replace(/[^a-zA-Zа-яА-ЯїЇєЄіІґҐʼ' ]/g, '');
    setName(onlyLetters);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {isPaid ? (
          <div className="success-message">
            <h2>Payment completed successfully!</h2>
            <p>Thank you for your purchase 💙</p>
            <button onClick={closeModal}>Close</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2>CHECKOUT</h2>
              <button className="close-btn" onClick={closeModal}>
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <label className="labels">CARD NUMBER</label>
              <input
                className="inputs"
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder="0000 0000 0000 0000"
                required
                maxLength={16}
              />

              <label className="labels">CARDHOLDER NAME</label>
              <input
                className="inputs"
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Name Surname"
                required
              />

              <label className="labels">SECURITY CODE</label>
              <input
                className="inputs"
                type="text"
                value={cvv}
                onChange={handleCVVChange}
                placeholder="123"
                required
                maxLength={3}
              />

              <button type="submit" className="pay-button">
                Complete purchase
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default FakeCheckoutModal;
