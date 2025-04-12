import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ isVisible }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isClicked, setIsClicked] = useState(false); // Nuevo estado para el clic

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(true); // Activamos el efecto de clic
    setIsSending(true);

    emailjs
      .send(
        'service_latxn7h',
        'template_vmlhyh7',
        formData,
        'zjWHHJaBVjcPdeQrj'
      )
      .then(
        (result) => {
          setStatus('Mensaje enviado con éxito!');
          setFormData({ name: '', phone: '', email: '', message: '' });
          setIsSending(false);
          setIsClicked(false); // Reseteamos el estado de clic
        },
        (error) => {
          setStatus('Error al enviar el mensaje. Por favor, intenta de nuevo.');
          console.error('Error:', error);
          setIsSending(false);
          setIsClicked(false); // Reseteamos el estado de clic
        }
      );
  };

  return (
    <section id="contact-section" className={`abstract-section contact-footer ${isVisible ? 'visible' : ''}`}>
      <div className="contact-container">
        <div className="contact-info">
          <h2>CONTACT </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div className="contact-details">
            <h3>ADDRESS</h3>
            <p>San José, CR</p>
            <h3>PHONE</h3>
            <p>+506 71381221</p>
            <h3>E-MAIL</h3>
            <p>
              <a href="mailto:keanufrederick@hotmail.com">keanufrederick@hotmail.com</a>
            </p>
          </div>
        </div>
        <div className="contact-form">
          <h2>CONTACT</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel" 
              name="phone"
              placeholder="Your phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className={`form-button ${isSending ? 'sending' : ''} ${isClicked ? 'clicked' : ''}`}
              disabled={isSending}
            >
              {isSending ? 'ENVIANDO...' : 'SEND MESSAGE'}{' '}
              {!isSending && <FontAwesomeIcon icon={faArrowRight} />}
            </button>
          </form>
          {status && <p>{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;