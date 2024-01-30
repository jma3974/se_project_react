import React, { useState } from 'react'
import ModalWithForm from '../components/ModalWithForm/ModalWithForm';

const AddItemModal = ({handleCloseModal, onAddItem, isOpen}) => {
    const [name, setName] = useState("")
    const handleNameChange =(e) => {
        console.log(e.target.value)
        setName(e.target.value)
    };

    const [link, setURL] = useState("")
    const handleUrlChange =(e) => {
        console.log(e.target.value)
        setURL(e.target.value)
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        onAddItem ({name, link})
    };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      onClose={handleCloseModal} isOpen={isOpen} onSubmit={handleSubmit}
    >
      <div className="modal__form_element">
        <label className="modal__form_label">Name </label>
        <div>
          <input
            className="modal__form modal__input-text"
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            placeholder="Name"
            value={name} 
            onChange={handleNameChange}
          />
        </div>
      </div>
      <div>
        <label className="modal__form_label">Image</label>
        <div>
          <input
            className="modal__form modal__input-text"
            type="url"
            name="link"
            placeholder="Image URL"
            value={link} 
            onChange={handleUrlChange}
          />
        </div>

        <p>Select the weather type:</p>
        <div className="modal__input_radio-buttons">
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
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
