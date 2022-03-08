import React from 'react'
import "./weather.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function WeatherCard(props) {
  let src = `http://openweathermap.org/img/w/${props.weather.icon}.png`;
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  if (!props.isFetching)
  return (
    <div className="weatherCard">
        <div className="inner">
          <p className="h2">{days[new Date().getDay()]}</p>
          <p className="para">{(new Date().toDateString()).slice(3)}</p>
          <p className="para">
            <FontAwesomeIcon icon={faLocationDot} /> {props.weather.city} {props.weather.country}
          </p>

          <img className="icon" src={src}></img>
          <p className="h1">{props.weather.temperature}&#8451;</p>
          <p className="h3">{props.weather.description}</p>
        </div>
    </div>
  )
  else return (
    <div className="weatherCard">
        <div className="inner">
        <img className="loading" src="/icons8-dots-loading.gif"/> 
        </div>
    </div>
  )
}
