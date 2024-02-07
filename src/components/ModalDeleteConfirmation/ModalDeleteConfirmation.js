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
      // buttonText="Yes, delete item"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="modal__delete_block">
        <div className="modal__delete_content">
          <div className="modal__delete_content-text">
            Are you sure you want to delete this item? <br />
            This action is irreversible.
          </div>
          <div className="modal__delete_content-text">
            <button
              type="text"
              className="modal__deleteConfirmation_button modal__deleteConfirmation_button-delete"
            >
              Yes, delete this item
            </button>
          </div>

          <div className="modal__delete_content-text">
            <button type="text" className="modal__deleteConfirmation_button">Cancel</button>
            
            
            </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteConfirmation;
