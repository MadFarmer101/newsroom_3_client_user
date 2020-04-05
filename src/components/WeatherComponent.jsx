import React, { useState } from 'react';
import { Menu, Segment } from "semantic-ui-react";
import { connect, useDispatch } from "react-redux";
import { SET_CURRENT_LOCATION } from "../state/actions/actionTypes";


const WeatherComponent = (props) => {
const [position, setPosition] = useState([])
const getPosition = () => {
  navigator.geolocation.getCurrentPosition(async pos => {
  setPosition([pos.coords.latitude, pos.coords.latitude])
  })
}

return (

  <Segment>
    <Menu id="weather-header">
      <Menu.Item id="city" >{props.localCity}</Menu.Item>
      <Menu.Item id="temperature" >5</Menu.Item>
      <Menu.Item id="condition" >cloudy</Menu.Item>
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