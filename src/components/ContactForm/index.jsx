import React from 'react';
import { ContactFormWrapper, Form, InputWrapper, TextareaWrapper } from './styles';

const ContactForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <ContactFormWrapper>
      <h2>Trabajemos juntos</h2>
      <h4>Tu email se mantiene privado. Los campos obligatorios estan marcados con un *</h4>

      <Form onSubmit={handleSubmit}>

        <InputWrapper>
          <input placeholder="Nombre *" required />
        </InputWrapper>

        <InputWrapper>
          <input placeholder="Email *" required />
        </InputWrapper>

        <TextareaWrapper>
          <textarea placeholder="Mensaje *" required />
        </TextareaWrapper>

        <button>Enviar</button>

      </Form>

    </ContactFormWrapper>
  );
};

export default ContactForm;
