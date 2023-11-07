import "./WeatherCard.css";
import weatherOptions from "../utils/constants";



const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  console.log("Weather Card");
  const imageSrc = weatherOptions.filter((i) => {
    // console.log(i);
    return i.day === day && i.type === type;
  });
  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <>
      <section id="temp-weather" className="weather">
        <div className="temperature">{weatherTemp}° F</div>

        <img src={imageSrcUrl} className="weather_icon" />
      </section>
      <section>
        <div className="weatherCard__temp">
          Today is {weatherTemp}° F/ You may want to wear:
        </div>
      </section>
    </>
  );
};

export default WeatherCard;
