import "./ModalWithForm.css";

const ModalWithForm = ({ children, buttonText = "Add garment", title, onClose, name }) => {
  console.log("modal with form");

  return (
    <div className={` modal modal_type_${name} `}>
      <div className="modal__content">
        <button type='button' onClick={onClose}>X</button>
        <h3>{title}</h3>
        <form className="modal__form">
          {children}
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
