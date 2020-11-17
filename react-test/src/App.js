import  React, { useState }  from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './App.css';

const coordinates = {london: [51.505, -0.09], paris: [48.8534, 2.3488]}

// eslint-disable-next-line
function App() {

  const [city, setCity] = useState("london")
  console.log(city, coordinates[city])

  return (
    <div>
      <FormControl variant="outlined">
        <InputLabel>Ville</InputLabel>
        <Select value={city} onChange={e => setCity(e.target.value)}>
          <MenuItem value="london">Londres</MenuItem>
          <MenuItem value="paris">Paris</MenuItem>
        </Select>
      </FormControl>
      <MapContainer center={coordinates[city]} zoom={13} scrollWheelZoom={false} key={city}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates[city]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    );
}

export default App;
