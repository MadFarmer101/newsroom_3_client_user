import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { connect, useSelector } from "react-redux";

const WeatherComponent = props => {
  let city = useSelector((state) => state.city);
  let weather = useSelector((state) => state.weather);
  let temp = useSelector((state) => state.temp);

  let celsius = (parseFloat(temp - 273.15).toFixed(1))

  return (
    <Segment>
      <Menu id="weather-header">
        <Menu.Item id="city">{city}</Menu.Item>
        <Menu.Item id="temperature">{celsius}°C</Menu.Item>
        <Menu.Item id="condition">{weather}</Menu.Item>
      </Menu>
    </Segment>
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
