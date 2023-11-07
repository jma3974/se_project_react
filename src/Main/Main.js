import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard.js";

const Main = () => {
    const weatherTemp="55";
  return (
    
    <main className="main">
        
      <WeatherCard day={false} type="snow" weatherTemp={weatherTemp}/>
    
      <ItemCard />

    </main>
  );
};

export default Main;
