import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import { useForm } from "../../hooks/useForm";

const AddItemModal = ({ activeModal, onCloseModal }) => {
  return (
    <ModalWithForm
      title="New garment"
      name="new-card"
      onClose={onCloseModal}
      activeModal={activeModal}
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
        />
      </label>
      <label className="modal__label">
        Image
        <input
          type="url"
          name="imageUrl"
          id="clothing-link"
          className="modal__input modal__input_type_url"
          placeholder="Image URL"
          required
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
