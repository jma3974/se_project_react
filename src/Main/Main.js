import "./Main.css";
const weatherTemp="55";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard.js";

const Main = ({onSelectedCard}) => {
    
  return (
    
    <main className="main">
        
      <WeatherCard day={false} type="snow" weatherTemp={weatherTemp}/>
    
      <ItemCard />

    </main>
  );
};

export default Main;
