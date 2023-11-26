import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard.js";
import { defaultClothingItems } from "../utils/constants.js";

function Main({temperature}) {
    console.log("main")
    return <main className="main">
      <WeatherCard day={false} type="clear" temperature={temperature} />
      <div className='main__reco'>Today is {temperature} / You may want to wear: </div>
      <section className="main__cards" id="cards">

        {defaultClothingItems.map((clothingItem) => <ItemCard clothingItem={clothingItem} key={clothingItem._id} />

        )}
      </section>
    </main>;
  }

  export default Main