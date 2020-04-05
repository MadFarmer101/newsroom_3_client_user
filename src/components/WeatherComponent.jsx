import React, { useState, useEffect } from 'react';
import { Menu, Segment } from "semantic-ui-react";
import { connect, useDispatch } from "react-redux";
import { SET_CURRENT_LOCATION } from "../state/actions/actionTypes";
import {weatherData} from "../modules/weatherData"

const WeatherComponent = (props) => {
const [position, setPosition] = useState([])
const [city, setCity] = useState("")
const [description, setDescription] = useState("")

useEffect(() => {
  getPosition()
}, [])
useEffect(() => {
  getWeather()
}, [])
const getWeather = async () => {
  let weather = await weatherData(position);
  if (weather.status === 200) {
    setCity(weather.name)
    setDescription(weather.weather[0].decription)
  }
}
const getPosition = () => {
  
  navigator.geolocation.getCurrentPosition( (pos) => {
    debugger
  setPosition([pos.coords.latitude, pos.coords.longitude])

  })
}

return (

  <Segment>
    <Menu id="weather-header">
      <Menu.Item id="city" >{city}</Menu.Item>
      <Menu.Item id="temperature" >5</Menu.Item>
      <Menu.Item id="condition" >{description}</Menu.Item>
      <Menu.Item id="wind" >25 km</Menu.Item>
      <Menu.Item id="timezone" >GMT+2</Menu.Item>
    </Menu>
  </Segment>

)
}

const mapStateToProps = (state) => {
  return {
    localCity: state.localCity
  }
}

export default connect(mapStateToProps)(WeatherComponent)