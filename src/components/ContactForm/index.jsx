import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, InputWrapper, TextareaWrapper } from './styles';

const ContactForm = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <Form onSubmit={handleSubmit}>

      <InputWrapper>
        <input placeholder={t("Name *")} required />
      </InputWrapper>

      <InputWrapper>
        <input placeholder={t("Email *")} required />
      </InputWrapper>

      <TextareaWrapper>
        <textarea placeholder={t("Message *")} required />
      </TextareaWrapper>

      <button>{t("Send")}</button>

    </Form>
  );
};

export default ContactForm;
