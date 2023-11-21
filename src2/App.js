import "./App.css";
import Main from "./Main/Main.js";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import ModalWithForm from "./ModalWithForm/ModalWithForm.js";
import ModalForImage from "./ModalForItem/ModalForItem.js";
import { useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
  };

  console.log(selectedCard)
  return (
    <div className="page">
      <Header onCreateModal={handleCreateModal} />

      <Main onSelectedCard={handleSelectedCard} />

      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment Form" onClose={handleCloseModal}>
          <div>
            <label>
              Name
              <input
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
                placeholder="Name"
              ></input>
            </label>
          </div>
          <div>
            <label>
              Image
              <input
                type="url"
                name="link"
                minLength="1"
                maxLength="30"
                placeholder="Image Url"
              ></input>
            </label>
          </div>
          <label>
            <p>Select the weather type:</p>
            <div>
              <div>
                <input type="radio" id="hot" value="hot" />
                <label>Hot</label>
              </div>
              <div>
                <input type="radio" id="warm" value="warm" />
                <label>Warm</label>
              </div>
              <div>
                <input type="radio" id="cold" value="cold" />
                <label>Cold</label>
              </div>
            </div>
          </label>
        </ModalWithForm>
      )}
{activeModal === 'preview' && (
      <ModalForImage selectedCard={selectedCard}/>

     
   
  )}
  </div>
  );}

export default App;
