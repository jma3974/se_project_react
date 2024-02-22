import "../ModalWithPreview/ModalWithPreview.css";

const ItemModal = ({ selectedCard, onClose, onCreateModal }) => {
  return (
    <div className={`modal `}>
      <div className="modal__preview_container">
        <img
          className="modal__preview_image"
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <button
          className="modal__close modal__preview_close"
          type="button"
          onClick={onClose}
        />

        <div className="modal__preview_text-container">
          <div className="modal__preview_details">
            <div className="modal__preview-text"> {selectedCard.name}</div>
            <div>Weather: {selectedCard.weather}</div>
          </div>
          <div className="modal__preview_delete">
            <button
              type="text"
              className="modal__preview_delete-text"
              onClick={() => onCreateModal(selectedCard._id)}
            >
              Delete Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
