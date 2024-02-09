import "../ModalDeleteConfirmation/ModalDeleteConfirmation.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const ModalDeleteConfirmation = ({
  handleCloseModal,
  onDeleteItem,
  isOpen,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onDeleteItem({});
  };

  return (
    <div
      className="modal__delete"
     
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="modal__delete_block">

      <button
          className="modal__close modal__delete_close"
          type="button"
          onClick={handleCloseModal}
        />


        <div className="modal__delete_content">
          <div className="modal__delete_content-text">
            Are you sure you want to delete this item? <br />
            This action is irreversible.
          </div>
          <div>
            <button
              type="text"
              className="modal__deleteConfirmation_button modal__deleteConfirmation_button-delete"
            onclick={onDeleteItem}>
              Yes, delete this item
            </button>
          </div>

          <div>
            <button type="text" className="modal__deleteConfirmation_button" onClick={handleCloseModal}>Cancel</button>
            
            
            </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteConfirmation;
