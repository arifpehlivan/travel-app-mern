import  React, { useState } from 'react';
import  {Map,Marker} from 'react-map-gl';
import { Room } from "@material-ui/icons";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 47.040182,
    longitude: 17.071727,
    zoom: 4,
  });
  return (
    <Map
      {...viewport}
      initialViewState={{
        longitude: 2.349014,
        latitude: 48.864716,
        zoom: 3
      }}
      mapboxAccessToken={"pk.eyJ1IjoiYXJpZnBlaGxpdmFuIiwiYSI6ImNsMWlseWVubjB1c2kzZHF1ZW1udjB6d3kifQ.5J79vaEUq-MGwMIFSeWAwg"}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Marker longitude={2.349014} latitude={48.864716}>{/*offsetleft={-10} offsetTop={-10}*/}
        <Room style={{fontSize:viewport.zoom}}/>
      </Marker>
    </Map>
  );
}

export default App;
