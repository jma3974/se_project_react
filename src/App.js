import "./App.css";
import "./Main/Main.css";
import "./Footer/Footer.css";
import Header from "./Header/Header";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import ModalWithForm from "./ModalWithForm/ModalWithForm.js";
import { useState } from "react";

function App() {
  const temperature = "55F";
  const [activeModal, setActiveModal] = useState("");
  const handleCreateModal = () => {
    setActiveModal('create');};

    const handleCloseModal = () => {
      setActiveModal("");
    };
  
  return (
    <div>
      <Header onCreateModal={handleCreateModal}/>
      <Main temperature={temperature} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <div>
            <label>
              Name{" "}
              <input
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
                placeholder="Name"
              />
            </label>
          </div>
          <div>
            <label>
              Image{" "}
              <input type="url" name="link" placeholder="https:// image url" />
            </label>
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
          </div>
        </ModalWithForm>
      )}
    </div>
  );
}
export default App;
