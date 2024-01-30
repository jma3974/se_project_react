import "../ModalWithForm/ModalWithForm.css";

const ModalWithForm = ({ children, buttonText, title, onClose, name, isOpen, onSubmit }) => {
  
  return (
    <div className={` modal modal_type_${name} `}>
      <div className="modal__add-form_content">
        <button className='modal__close modal__add-form_close ' type='button' onClick={onClose} aria-label="Close edit profile"/>
        <p className='modal__text modal__form_element'>{title}</p>
        <form onSubmit={onSubmit} >
          {children}
          <button type="submit" className="modal__text modal__button">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
