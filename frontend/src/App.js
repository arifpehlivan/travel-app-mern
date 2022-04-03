// import * as React from 'react';
// import Map from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';


// function App() {
// const MAPBOX="pk.eyJ1IjoiYXJpZnBlaGxpdmFuIiwiYSI6ImNsMWlseWVubjB1c2kzZHF1ZW1udjB6d3kifQ.5J79vaEUq-MGwMIFSeWAwg"
  
//   const [viewState, setViewState] = React.useState({
//     longitude: -100,
//     latitude: 40,
//     zoom: 3.5
//   });
//   return (
//     <Map
//     {...viewState}
//     mapboxAccessToken={MAPBOX}
//     onMove={evt => setViewState(evt.viewState)}
//     mapStyle="mapbox://styles/mapbox/streets-v9"
//   />
//   );
// }

import * as React from 'react';
import Map, {Marker} from 'react-map-gl';

function App() {
  return (
    <Map
      initialViewState={{
        longitude: 41,
        latitude: 29,
        zoom: 4
      }}
      mapboxAccessToken={"pk.eyJ1IjoiYXJpZnBlaGxpdmFuIiwiYSI6ImNsMWlseWVubjB1c2kzZHF1ZW1udjB6d3kifQ.5J79vaEUq-MGwMIFSeWAwg"}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={41} latitude={29} anchor="bottom" >
        <div>You are here</div>
      {/* <img src="./pin.png" /> */}
    </Marker>
    </Map>
  );
}

export default App;
