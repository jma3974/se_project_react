import "../WeatherCard/WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";

const WeatherCard = ({ day, type, temperature = "" }) => {
  const weatherImageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const weatherImageSrcUrl = weatherImageSrc[0].url || "";

  return (
    <section className="weatherCard" id="weather">
      <div className="weatherCard__temp">{temperature}° F</div>

      <img className="weatherCard__icon" src={weatherImageSrcUrl} />
    </section>
  );
};

export default WeatherCard;
