

const ModalWithPreview = ({selectedCard, onClose}) => {
  console.log("item preview");

  return (
    <div className={` modal `}>
      <div className="modal__content">
      <button className= 'modal__close' type='button' onClick={onClose}>X</button>
        <img src={selectedCard.link} />
        <div> {selectedCard.name}</div>
        <div>{selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ModalWithPreview;
