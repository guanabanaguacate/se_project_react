import { useForm } from "../../utils/hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
 const defaultValues = { name: "", imageUrl: "", weather: "" }; 

 useEffect(() => {
  if (isOpen) {
    setValues({ name: "", imageUrl: "", weather: "" });
  }
}, [isOpen, setValues]);

 const { values, handleChange, handleReset } = useForm(defaultValues); 

  function handleSubmit(evt){
    evt.preventDefault();
    onAddItem(values);
  }

  return (
    <ModalWithForm
      title="New garment"
      name="new-card"
      onClose={onCloseModal}
      buttonText="Add garment"
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          id="clothing-name"
          className="modal__input modal__input_type_card-name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Image
        <input
          type="url"
          name="imageUrl"
          id="clothing-imageUrl"
          className="modal__input modal__input_type_url"
          placeholder="Image URL"
          required
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      <fieldset className="modal__fieldset modal__fieldset_type_radio">
        <legend className="modal__legend">Select the weather type:</legend>
        <div className="modal__legend_list_item">
          <input
            className="modal__radio-button"
            type="radio"
            id="choiceHot"
            name="weather"
            value="hot"
            onChange={handleChange}
          />
          <label
            className="modal__label modal__label_type_radio"
            htmlFor="choiceHot"
          >
            Hot
          </label>
        </div>
        <div className="modal__legend_list_item">
          <input
            className="modal__radio-button"
            type="radio"
            id="choiceWarm"
            name="weather"
            value="warm"
            onChange={handleChange}
          />
          <label
            className="modal__label modal__label_type_radio"
            htmlFor="choiceWarm"
          >
            Warm
          </label>
        </div>
        <div className="modal__legend_list_item">
          <input
            className="modal__radio-button"
            type="radio"
            id="choiceCold"
            name="weather"
            value="cold"
            onChange={handleChange}
          />
          <label
            className="modal__label modal__label_type_radio"
            htmlFor="choiceCold"
          >
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};
export default AddItemModal;
