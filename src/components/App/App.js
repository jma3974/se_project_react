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
import Profile from "../Profile/Profile.js";
import AddItemModal from "../../AddItemModal/AddItemModal.js";
import DeleteModalConfirmation from "../ModalDeleteConfirmation/ModalDeleteConfirmation.js";

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

  const onAddItem = (values) => {
    console.log(values);
  };

  const onDeleteItem = (values) => {
    console.log(values);
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
            <Profile
              onSelectedCard={handleSelectedCard}
              onCreateModal={handleCreateModal}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ModalWithPreview
            selectedCard={selectedCard}
            onClose={handleCloseModal}
          />
        )}
        {activeModal === "create" && (
          <DeleteModalConfirmation
            onCreateModal={handleCreateModal}
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onDeleteItem={onDeleteItem}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}
export default App;
