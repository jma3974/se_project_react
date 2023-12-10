import {weatherOptions,} from "../../utils/constants.js";

const WeatherCard = ({day, type, temperature = '' }) => {
  console.log("WeatherCard");
  const weatherImageSrc = weatherOptions.filter((i) => {
    // console.log(i);
    return i.day === day && i.type === type;
  });

  const weatherImageSrcUrl = weatherImageSrc[0].url || "";

//   console.log(weatherImageSrc[0].url)

  return (
    <section className="main__weather" id="weather">
      <div className="main__weather-temp">{temperature}° F</div>

      <img
        className="main__weather-icon"
        src={weatherImageSrcUrl}
      />
    </section>
  );
};

export default WeatherCard;
