import "../../src/index.css"
import Header from "../components/Header";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import ModalWithForm from "../components/ModalWithForm.js";
import ModalWithPreview from "../components/ModalWithPreview.js";
import { getForecastWeather, parseWeatherData } from "../utils/weatherAPI.js";
import { useEffect, useState } from "react";

function App() {
  const temperature = "55F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather().then((data) => {
      const temperature = parseWeatherData(data);
      console.log(temperature);
      setTemp(temperature);
    });
  }, []);
  console.log(temp);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main temperature={temp} onSelectedCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New garment" onClose={handleCloseModal}>
          <div className="modal__form_element">
            <label className="modal__form_label">
              Name </label>
              <div>
              <input className="modal__form modal__input-text"
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
                placeholder="Name"
              /></div>
            
          </div>
          <div>
            <label className="modal__form_label">
              Image</label>
              <div>
              <input className="modal__form modal__input-text" type="url" name="link" placeholder="Image URL" /></div>
            
            <p>Select the weather type:</p>
            <div>
              <div className="modal__input-radio">
                <input type="radio" id="hot" value="hot" />
                <label>Hot</label>
              </div>
              <div className="modal__input-radio">
                <input type="radio" id="warm" value="warm" />
                <label>Warm</label>
              </div>
              <div className="modal__input-radio">
                <input type="radio" id="cold" value="cold" />
                <label>Cold</label>
              </div>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ModalWithPreview
          selectedCard={selectedCard}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
export default App;
