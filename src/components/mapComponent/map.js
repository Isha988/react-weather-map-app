
import ReactMapGL from 'react-map-gl';
import Pin from './marker'
import "./map.css"
import 'mapbox-gl/dist/mapbox-gl.css'

export default function SimpleMap(props){
    return (
      <ReactMapGL 
        viewState={props.viewState}
        style = {{width: "100%", height: "100vh", position:'absolute', top:0, zIndex:50}}
        mapboxAccessToken ={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        onMove = {(evt)=> props.onMove(evt.viewState)}
        onClick={(evt)=> {props.onClick(evt.lngLat.lat, evt.lngLat.lng)}}
      >
        <Pin marker={props.marker}/>
      </ReactMapGL> 
    )
}
  


