import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {Marker} from "react-map-gl";

export default function Pin(props){
        return(
            <Marker longitude={props.marker[1]} latitude={props.marker[0]} anchor="bottom">
                <FontAwesomeIcon icon={faLocationDot} className="locationMarker"/>
            </Marker>
        )
}

