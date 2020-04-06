import React from "react";
import { Menu } from "semantic-ui-react";
import { connect, useSelector } from "react-redux";

const WeatherComponent = (props) => {
  let city = useSelector((state) => state.city);
  let weather = useSelector((state) => state.weather);
  let temp = useSelector((state) => state.temp);
  let weatherIcon = useSelector((state) => state.weatherIcon);

  let celsius = parseFloat(temp - 273.15).toFixed(1);

  return (
    <Menu inverted borderless fluid id="weather-header">
      <Menu.Item id="city">{city}</Menu.Item>
      <Menu.Item id="temperature">{celsius}°C</Menu.Item>
      <Menu.Item id="condition">{weather}</Menu.Item>
      <Menu.Item>
        <img src={`http://openweathermap.org/img/wn/${weatherIcon}.png`} alt="icon"/>
      </Menu.Item>
    </Menu>
  );
};

const mapStateToProps = (state) => {
  return {
    localCity: state.localCity,
    lat: state.lat,
    long: state.long,
  };
};

export default connect(mapStateToProps)(WeatherComponent);
