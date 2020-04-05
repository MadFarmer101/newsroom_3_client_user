import axios from "axios";

const weatherData = async coords => {
  try {
    let token = "0c1b30324a585f4c8276c8a2e1189a84";
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&APPID=${token}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export { weatherData };