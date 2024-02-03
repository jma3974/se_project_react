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
    //   title="New garment"
      buttonTextDelete="Yes, delete item"
      buttonTextCancel="Cancel"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="modal__form_element">
        <label className="modal__form_label">Are you sure you want to delete this item? <br/>This action is irreversible. </label>
        <div>
          {/* <input
            className="modal__form modal__input-text"
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            placeholder="Name"
            value={name} 
            onChange={handleNameChange}
          /> */}
        </div>
      </div>
      <div>
        <label className="modal__form_label">Image</label>
        <div>
          {/* <input
            className="modal__form modal__input-text"
            type="url"
            name="link"
            placeholder="Image URL"
            value={link} 
            onChange={handleUrlChange}
          /> */}
        </div>

        <p>Delete</p>
        {/* <div className="modal__input_radio-buttons">
          <div className="modal__input-radio">
            <input type="radio" id="hot" value="hot" name="selectTemp" />
            <label className="modal__input-radio-label">Hot</label>
          </div>
          <div className="modal__input-radio">
            <input type="radio" id="warm" value="warm" name="selectTemp" />
            <label className="modal__input-radio-label">Warm</label>
          </div>
          <div className="modal__input-radio">
            <input type="radio" id="cold" value="cold" name="selectTemp" />
            <label className="modal__input-radio-label">Cold</label>
          </div>
        </div> */}
      </div>
    </ModalWithForm>
  );
};

export default ModalDeleteConfirmation;
