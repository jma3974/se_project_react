import "./ModalForItem.css";

const ModalForItem = ({ children, item, weather, onClose, name, }) => {
console.log('modal for image')


    return (
        <div className={`modal`}>
        <div className="modal__content">
          <button type="button" onClick={onClose}>X</button>
          <img />
        <div>{item}</div>
        <div>Weather: {weather}</div>
     
      </div></div>


    )
} 


export default ModalForItem;