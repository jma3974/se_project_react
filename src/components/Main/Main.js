import "../Main/Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.js"
import ItemCard from "../ItemCard/ItemCard.js";
import { defaultClothingItems } from "../../utils/constants.js";
import { useMemo } from "react";

function Main({ temperature, onSelectedCard }) {

  const weatherType = (() => {
    if (temperature >= 86) {
      return "hot";
    } else if (temperature >= 66 && temperature <= 85) {
      return "warm";
    } else if (temperature <= 65) {
      return "cold";
    }
  })();



const filteredCards = defaultClothingItems.filter((clothingItem)=> {

return clothingItem.weather.toLowerCase() === weatherType

})



  return (
    <main className="main">
      <WeatherCard day={false} type="clear" temperature={temperature} />
      <div className="main__reco">
        Today is {temperature}° F/ You may want to wear:
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
