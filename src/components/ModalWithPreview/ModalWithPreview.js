import "../ModalWithPreview/ModalWithPreview.css";

const ModalWithPreview = ({ selectedCard, onClose }) => {
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
            Delete Item
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWithPreview;
