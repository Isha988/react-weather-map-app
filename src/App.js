import {Component} from 'react';
import './App.css';
import SimpleMap from './components/mapComponent/map'
import Header from './components/headerComponent/header'
import WeatherCard from './components/weatherComponent/weather'

const position = navigator.geolocation.getCurrentPosition(setMapCenter);

class App extends Component{
  constructor(props) {
    super(props);
    this.changeMarker = this.changeMarker.bind(this);
    this.changeViewState = this.changeViewState.bind(this)
    this.abc = this.abc.bind(this);
    this.state = {
      marker: setMapCenter(position),
      viewState :  {
        longitude:setMapCenter(position)[1],
        latitude: setMapCenter(position)[0],
        zoom :4,
        fitBoundsOptions: true
      },
      isFetching: false,
      weather: {
        city: '',
        country: '',
        temperature: '',
        description:'',
        icon:''
      }
    };  
  } 

  changeMarker(lat, lang){
    this.setState({
      marker : [lat, lang],
      viewState: {
        ...this.state.viewState, 
        longitude: lang,
        latitude:lat,
        zoom: 8
      }
    })
    this.abc(lat,lang);
  }
  changeViewState(view){
    this.setState({
      viewState: view
    })

  }
 async abc(lat,lang){
    this.setState({isFetching: true})
    let weather = await weatherRequest(lat, lang)
    this.setState({weather: weather, isFetching : false});
}
componentDidMount(){
  this.abc(setMapCenter(position)[0],setMapCenter(position)[1]);
}
  render() {
    return (
      <div className="App">
        <Header onSelect = {this.changeMarker}/>
        <WeatherCard weather={this.state.weather} isFetching={this.state.isFetching}/>
        <SimpleMap viewState={this.state.viewState} 
          marker={this.state.marker} 
          onMove={this.changeViewState}
          onClick = {this.changeMarker}/>
      </div>
    );
  }
}

function setMapCenter(position){
  if(position) return [position.coords.latitude, position.coords.longitude];
  else return [22.1991660760527, 	78.476681027237];
}
async function weatherRequest(lat, lang){
  const res = await fetch(`${process.env.REACT_APP_WEATHER_API_URL}?lat=${lat}&lon=${lang}&APPID=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`,
    { mode: 'cors' },
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  const result_1 = await res.json();
  let obj = {
    city: result_1.name,
    country: result_1.sys.country,
    temperature: (result_1.main.temp - 273.15).toFixed(2),
    description: result_1.weather[0].description,
    icon: result_1.weather[0].icon
  };
  return obj;
}
export default App;
