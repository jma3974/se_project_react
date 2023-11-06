const weatherOptions = [
    { url: require("../images/weather_icons/day-clear.svg").default, day: true, type: "clear" },
    { url: require("../images/weather_icons/day-cloudy.svg").default, day: true, type: "cloudy" },
    { url: require("../images/weather_icons/day-fog.svg").default, day: true, type: "fog" },
    { url: require("../images/weather_icons/day-rainy.svg").default, day: true, type: "rainy" },
    { url: require("../images/weather_icons/day-snow.svg").default, day: true, type: "snow" },
    { url: require("../images/weather_icons/day-storm.svg").default, day: true, type: "storm" },
    { url: require("../images/weather_icons/night-clear.svg").default, day: false, type: "clear" },
    { url: require("../images/weather_icons/night-cloudy.svg").default, day: false, type: "cloudy" },
    { url: require("../images/weather_icons/night-fog.svg").default, day: false, type: "fog" },
    { url: require("../images/weather_icons/night-rain.svg").default, day: false, type: "rainy" },
    { url: require("../images/weather_icons/night-snow.svg").default, day: false, type: "snow" },
    { url: require("../images/weather_icons/night-storm.svg").default, day: false, type: "storm" },
];

const WeatherCard = ({ day, type, weatherTemp = ''  }) => {
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
        <div>Today is {weatherTemp}° F/ You may want to wear:</div>
    </section>
    </>
  );
};

export default WeatherCard;
