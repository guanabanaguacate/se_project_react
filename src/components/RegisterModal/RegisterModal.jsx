import { useEffect } from "react";
import { useForm } from "../../utils/hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onCloseModal, onRegister }) => {
  const defaultValues = { name: "", avatar: "", email: "", password: "" };

  const { values, handleChange, setValues } = useForm(defaultValues);

  useEffect(() => {
    if (isOpen) {
      setValues(defaultValues);
    }
  }, [isOpen, setValues]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(values);
  }

  return (
    <ModalWithForm
      title="Sign up"
      name="register"
      onClose={onCloseModal}
      buttonText="Next"
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          id="register-email"
          className="modal__input"
          placeholder="Email"
          required
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          id="register-password"
          className="modal__input"
          placeholder="Password"
          required
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          id="register-name"
          className="modal__input"
          placeholder="Name"
          required
          minLength="2"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          type="url"
          name="avatar"
          id="register-avatar"
          className="modal__input"
          placeholder="Avatar URL"
          required
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;