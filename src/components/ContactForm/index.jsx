import React from 'react';
import { Form, InputWrapper, TextareaWrapper } from './styles';

const ContactForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
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
  );
};

export default ContactForm;
