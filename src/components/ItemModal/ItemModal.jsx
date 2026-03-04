import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card, onDeleteItem }) {
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
          <button
            type="button"
            className="modal__delete"
            onClick={handleDeleteClick}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
