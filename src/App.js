import "./App.css";
import "./Main/Main.css";
import Header from "./Header/Header";
import WeatherCard from "./WeatherCard/WeatherCard";
import ItemCard from "./ItemCard/ItemCard.js";
import { defaultClothingItems } from "./utils/constants.js";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <WeatherCard day={false} type="clear" />
        <div className='main__reco'>Today is 75 deg F / You may want to wear: </div>
        <section className="main__cards" id="cards">
          
          {defaultClothingItems.map((clothingItem) => <ItemCard clothingItem={clothingItem} />
            
          )}
        </section>
      </main>
    </div>
  );


}
export default App;
