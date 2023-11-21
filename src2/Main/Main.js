import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard.js";
const weatherTemp="55";

const Main = ({onSelectedCard}) => {
    
  return (
    
    <main className="main">
        
      <WeatherCard day={false} type="snow" weatherTemp={weatherTemp}/>
    
      <ItemCard item='' onSelectedCard={onSelectedCard} />

    </main>
  );
};

export default Main;
