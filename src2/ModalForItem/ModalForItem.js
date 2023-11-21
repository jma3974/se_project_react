import "./ModalForItem.css";

const ModalForItem = ({ selectedCard }) => {
  console.log("modal for image");

  return (
    <div className={`modal`}>
        <div className="modal__content">
          <img />
          <div>Text for item name</div>
          <div> Weather type</div>
        </div>
      </div>
  );
};

export default ModalForItem;
