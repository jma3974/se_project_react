import "../Main/Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import ItemCard from "../ItemCard/ItemCard.js";
// import { defaultClothingItems } from "../../utils/constants.js";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

function Main({ weatherTemp, onSelectedCard, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

  const weatherType = (() => {
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp <= 65) {
        return "cold";
      }
    } else {
      if (currentTemperatureUnit === "C") {
        if (temp >= 86) {
          return "hot";
        } else if (temp >= 66 && temp <= 85) {
          return "warm";
        } else if (temp <= 65) {
          return "cold";
        }
      }
    }
  })();

  const filteredCards = clothingItems.filter(
    (clothingItem) => {
      return clothingItem.weather.toLowerCase() === weatherType;
    },
    [weatherTemp]
  );

  return (
    <main className="main">
      <WeatherCard day={false} type="clear" weatherTemp={temp} />
      <div className="main__reco">
        Today is {temp}° {currentTemperatureUnit}/ You may want to wear:
      </div>
      <section className="main__cards" id="cards">
        {filteredCards.map((clothingItem) => (
          <ItemCard
            clothingItem={clothingItem}
            key={clothingItem._id}
            onSelectedCard={onSelectedCard}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
