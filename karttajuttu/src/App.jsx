import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

//import Services from "./components/Yhdistin";



function App() {
  const [paikkax, setPaikkaX] = useState(62.79);
  const [paikkay, setPaikkaY] = useState(22.82);
  //var marker = L.marker([62.79, 22.82]).addTo(map);
  return (
    <>
    <div>
    <h1>Kartta</h1>
      <MapContainer center={[62.79, 22.82]} zoom={12}scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
              <Marker position={[paikkax,paikkay]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer></div>
    </>
  );
}

export default App;