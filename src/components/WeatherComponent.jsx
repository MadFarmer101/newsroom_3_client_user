import React, {useEffect} from 'react';
import { Menu, Segment } from "semantic-ui-react";
import { connect, useDispatch } from "react-redux";

const WeatherComponent = (props) => {

  const dispatch = useDispatch()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async pos => {
      debugger
      const currentLocation = { location: pos.coords }
      // dispatch({ type: SET_CURRENT_LOCATION, payload: currentLocation.data })
    });
  }, []);
  

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