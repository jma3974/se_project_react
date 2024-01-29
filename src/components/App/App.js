import "../App/App.css";
import Header from "../Header/Header";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";
import ModalWithPreview from "../ModalWithPreview/ModalWithPreview.js";
import {
  getForecastWeather,
  parseWeatherData,
} from "../../utils/weatherAPI.js";
import { useEffect, useState } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min.js";
import Profile from "../Profile/Profile.js"

function App() {
  /* VARIABLES */

  // const temperature = "55F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  /* FUNCTIONS */
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

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);

        setTemp(temperature);
        console.log(temperature);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  console.log(currentTemperatureUnit);

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} />
        <Switch>
          <Route exact path="/">
            <Main weatherTemp={temp} onSelectedCard={handleSelectedCard} />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm
            title="New garment"
            buttonText="Add garment"
            onClose={handleCloseModal}
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
                />
              </div>

              <p>Select the weather type:</p>
              <div className="modal__input_radio-buttons">
                <div className="modal__input-radio">
                  <input type="radio" id="hot" value="hot" name="selectTemp" />
                  <label className="modal__input-radio-label">Hot</label>
                </div>
                <div className="modal__input-radio">
                  <input
                    type="radio"
                    id="warm"
                    value="warm"
                    name="selectTemp"
                  />
                  <label className="modal__input-radio-label">Warm</label>
                </div>
                <div className="modal__input-radio">
                  <input
                    type="radio"
                    id="cold"
                    value="cold"
                    name="selectTemp"
                  />
                  <label className="modal__input-radio-label">Cold</label>
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
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}
export default App;
