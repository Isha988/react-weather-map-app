import "./header.css"
import MapboxAutocomplete from 'react-mapbox-autocomplete'

export default function Header(props) {
    return (
        <div className="header">
            <div className="logo">
            <img className="logoImg" src="/icons8-weather-64.png"/>  
            </div>

            <MapboxAutocomplete publicKey={process.env.REACT_APP_MAPBOX_PUBLIC_KEY}
                    inputClass='form-control search'
                    onSuggestionSelect={(result,lat,lang)=> {props.onSelect(lat,lang)}}
                    resetSearch={true}/>
        </div>

    )
}