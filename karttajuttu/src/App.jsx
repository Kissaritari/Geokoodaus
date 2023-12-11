import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import './App.css';

//import Services from "./components/Yhdistin";



function App() {
  const [paikkax, setPaikkaX] = useState(62.79);
  const [paikkay, setPaikkaY] = useState(22.82);
  const [paikka,setPaikka] = useState();
  //var marker = L.marker([62.79, 22.82]).addTo(map);
  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }
  return (
    <>
    <div>
    <h1>Kartta
      <div>
        <h3></h3>
      </div>
    </h1>
      <MapContainer center={[62.79, 22.82]} zoom={12}scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
          <LocationMarker/>
      </MapContainer></div>
    </>
  );
}

export default App;