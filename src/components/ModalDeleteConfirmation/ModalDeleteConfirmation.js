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
    <div className="modal"
      // buttonText="Yes, delete item"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="modal__deleteForm_element">
        {/* <label className="modal__form_label">
          Are you sure you want to delete this item? <br />
          This action is irreversible.
        </label> */}
        Are you sure you want to delete this item? <br />
        This action is irreversible.
      </div>
      <button type="text" className="modal__deleteForm_button">
        Yes, delete this item
</button>
      
    </div>
  );
};

export default ModalDeleteConfirmation;
