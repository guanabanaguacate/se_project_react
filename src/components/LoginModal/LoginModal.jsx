import { useEffect } from "react";
import { useForm } from "../../utils/hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onCloseModal, onLogin }) => {
  const defaultValues = { email: "", password: "" };

  const { values, handleChange, setValues } = useForm(defaultValues);

  useEffect(() => {
    if (isOpen) {
      setValues(defaultValues);
    }
  }, [isOpen, setValues]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values);
  }

  return (
    <ModalWithForm
      title="Log in"
      name="login"
      onClose={onCloseModal}
      buttonText="Log in"
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          id="login-email"
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
          id="login-password"
          className="modal__input"
          placeholder="Password"
          required
          value={values.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;