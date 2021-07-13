import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, InputWrapper, TextareaWrapper } from './styles';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useState({
    subject: "",
    body: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // window.red(`mailto:geoff@geoffgraham.me`);
    window.open(`mailto:alejowind@gmail.com?subject=${formData.subject}&body=${formData.body}`);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <Form onSubmit={handleSubmit}>

      <InputWrapper>
        <input placeholder={t("Subject *")} required name="subject" onChange={handleChange} />
      </InputWrapper>

      <InputWrapper>
        <input placeholder={t("Email *")} required name="email" onChange={handleChange} />
      </InputWrapper>

      <TextareaWrapper>
        <textarea placeholder={t("Message *")} required name="body" onChange={handleChange} />
      </TextareaWrapper>

      <button>{t("Send")}</button>
    </Form>
  );
};

export default ContactForm;
