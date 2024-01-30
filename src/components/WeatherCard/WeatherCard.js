import "../WeatherCard/WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { useContext } from "react";

const WeatherCard = ({ day, type, weatherTemp }) => {
  const weatherOption = weatherOptions.find((option) => {
    return option.day === day && option.type === type;
  });
console.log(weatherOptions)
  const {currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext) ;
  const weatherImageSrcUrl = weatherOption.url || "";

  return (
    <section className="weatherCard" id="weather">
      <div className="weatherCard__temp">{weatherTemp}° {currentTemperatureUnit}</div>

      <img className="weatherCard__icon" src={weatherImageSrcUrl} />
    </section>
  );
};

export default WeatherCard;
