# 🗺 React Weather Map App
This is a react weather application. It uses OpenWeatherMap API for weather info, react-map-gl for map integartion and react-mapbox-autocomplete for geolocation(search box).

**User can get weather info in two ways:**

- **From Search** : The search box returns coordinates of a place which are used to position map and request weather data from api.
- **Using Map** : On click, the map also returns coordinates of the targeted place which are used to fetch data and focus map.

**Map as controlled component:**

The map is controlled using its viewState property which changes as map is moved to make it interactive.

**Map Styling**

In Mapbox, map styling is super easy with **Mapbox Styles API** (link in references)


## Hosed At
https://github.com/Isha988/react-weather-map-app


## Features
- Current weather
- Place search
- Interactive map to locate place


## Screenshot
![App Screenshot](https://github.com/Isha988/react-weather-map-app/blob/main/public/appSS.png)



## API Used
| API | key used    | Used In           |
| :-------- | :------- | :------------------------- |
| OpenWeatherMap | api_key | Weather data fetching|
| Mapbox | access_ token| Map integration|
| Mapbox | public_ Key| Search box|


## References

**Map Integration:**  https://visgl.github.io/react-map-gl/docs/get-started/get-started

**Autocomplete Search:**  https://www.npmjs.com/package/react-mapbox-autocomplete

**Weather API:**  https://openweathermap.org/current

**Map styles:**  https://docs.mapbox.com/api/maps/styles/



