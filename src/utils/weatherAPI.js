//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// key: 0f5c09e8ea7ca947106c19059353b7c5

const latitude = 47.38;
const longitude = 122.23;
const APIKey = "0f5c09e8ea7ca947106c19059353b7c5";

export const getForecastWeather = () => {
  const weatherAPI = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&unit=imperial&appid=${APIKey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`error: ${res.status}`);
    }
  });

  return weatherAPI;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;

  return Math.ceil(temperature);
};
