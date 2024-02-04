import "../ModalWithForm/ModalWithForm.css";
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
    <ModalWithForm
      buttonTextDelete="Yes, delete item"
      buttonTextCancel="Cancel"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="modal__form_element">
        <label className="modal__form_label">
          Are you sure you want to delete this item? <br />
          This action is irreversible.{" "}
        </label>
      </div>
      <div>
        <p>Delete</p>
        
      </div>
    </ModalWithForm>
  );
};

export default ModalDeleteConfirmation;
