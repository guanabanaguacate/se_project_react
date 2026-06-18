import { useContext } from "react";
import "./ItemModal.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, onClose, card, onDeleteItem }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser?._id;

  const itemDeleteButtonClassName = `modal__delete ${
    isOwn ? "" : "modal__delete-button_hidden"
  }`;

  const handleDeleteClick = () => {
    onDeleteItem(card._id);
  };

  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-white"
        />
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
       <div className="modal__footer">
          {/* LEFT SIDE */}
          <div className="modal__footer-left">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>

          {/* RIGHT SIDE */}
          {isOwn && (
            <button
              type="button"
              className={itemDeleteButtonClassName}
              onClick={handleDeleteClick}
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;