import "../WeatherCard/WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";

const WeatherCard = ({ day, type, temperature = "" }) => {
  const weatherOption = weatherOptions.find((option) => {
    return option.day === day && option.type === type;
  });

  const weatherImageSrcUrl = weatherOption.url || "";

  return (
    <section className="weatherCard" id="weather">
      <div className="weatherCard__temp">{temperature}° F</div>

      <img className="weatherCard__icon" src={weatherImageSrcUrl} />
    </section>
  );
};

export default WeatherCard;
