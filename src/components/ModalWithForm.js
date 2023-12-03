import "../../src/index.css";

const ModalWithForm = ({ children, buttonText = "Add garment", title, onClose, name }) => {
  console.log("modal with form");

  return (
    <div className={` modal modal_type_${name} `}>
      <div className="modal__content">
        <button className='modal__close' type='button' onClick={onClose} aria-label="Close edit profile"/>
        <p className='modal__text modal__element'>{title}</p>
        <form>
          {children}
          <button type="submit" className="modal__text modal__button">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
