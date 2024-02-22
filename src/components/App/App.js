import "../App/App.css";
import Header from "../Header/Header";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import ItemModal from "../ModalWithPreview/ModalWithPreview.js";
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
import api from "../../utils/api.js";

function App() {
  /* VARIABLES */

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItem] = useState([]);

  /* FUNCTIONS */
  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleDeleteConfirmationModal = () => {
    setActiveModal("delete");
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

  /* API CALLS */

  const onAddItem = (values) => {
    api.addItems(values).then((item) => {
      setClothingItem([...clothingItems, item]);
      handleCloseModal();
    });
  };

  const onDeleteItem = () => {
    api
      .deleteItems(selectedCard._id)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
      });
  };

  useEffect(() => {
    api
      .getItems()
      .then((items) => {
        setClothingItem(items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);

        setTemp(temperature);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div className="app__page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectedCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onSelectedCard={handleSelectedCard}
              onCreateModal={handleCreateModal}
              clothingItems={clothingItems}
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
          <ItemModal
            onCreateModal={handleDeleteConfirmationModal}
            selectedCard={selectedCard}
            onClose={handleCloseModal}
          />
        )}
        {activeModal === "delete" && (
          <DeleteModalConfirmation
            onCreateModal={handleDeleteConfirmationModal}
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "delete"}
            onDeleteItem={onDeleteItem}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}
export default App;
