import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import CategoryHeader from "./components/CategoryHeader";
import DisplayComponents from "./components/DisplayComponents";
import WeatherComponent from "./components/WeatherComponent";
import axios from "axios";
import {SET_CURRENT_SESSION, SET_WEATHER} from './state/actions/actionTypes'

const App = (props) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const currentSession = await axios.post(
        "/sessions",
        {
          location: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          },
        }
      );
      let token = "0c1b30324a585f4c8276c8a2e1189a84";
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&APPID=${token}`
      );     
      dispatch({
        type: SET_CURRENT_SESSION,
        payload: { session: { edition: currentSession.data.session.edition } },
      });
      debugger
      dispatch({
        type: SET_WEATHER,
        payload: {
          city: response.data.name,
          weather: response.data.weather[0].description,
          temp: response.data.main.temp,
          weatherIcon : response.data.weather[0].icon
          
        },
      });
    });
  });

  return (
    <>
      <CategoryHeader />
      <WeatherComponent />
      <Switch>
        <Route exact path="/" component={DisplayComponents}></Route>
        <Route
          exact
          path={props.selectedCategory}
          component={DisplayComponents}
        ></Route>
      </Switch>
    </>
  );
};

export default App;
