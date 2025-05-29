import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import eventsData from '../data/eventsData';  // Adjust path as needed
import '../styles/MapView.css';

// Location to coordinates mapping
const locationCoords = {
  "Mesopotamia": [33.2232, 43.6793],
  "Egypt": [26.8206, 30.8025],
  "Babylon": [32.54, 44.42],
  "Greece": [39.0742, 21.8243],
  "Rome": [41.9028, 12.4964],
  "England": [52.3555, -1.1743],
  "Germany": [51.1657, 10.4515],
  "Americas": [15.7835, -90.2308],
  "USA": [37.0902, -95.7129],
  "France": [46.2276, 2.2137],
  "Europe": [54.5260, 15.2551],
  "Tokyo" : [35.6895, 139.6917],
  "Global": [20, 0],
  "India": [20.5937, 78.9629],
  "USSR": [61.5240, 105.3188],
  "Moon": [0, 0],
  "Switzerland": [46.8182, 8.2275],
  "Berlin, Germany": [52.52, 13.405],
  "San Francisco, USA": [37.7749, -122.4194],
  "Space": [0, 0],
  "Mars": [0, 0],
  "Various": [20, 0],
  "Earth": [20, 0],
  "Laboratories": [51.5074, -0.1278],
  "Unknown": [0, 0],
};

const MapView = () => {
  return (
    <div className="map-container">
      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false} style={{ height: '600px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {eventsData.map(event => {
          const coords = locationCoords[event.location] || [20, 0];
          return (
            <Marker key={event.id} position={coords}>
              <Popup>
                <strong>{event.title}</strong><br />
                {event.description}<br />
                <em>{event.location} - Year: {event.year}</em>
                <br />
                <img src={event.image} alt={event.title} style={{width: '100px', marginTop: '5px'}} />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapView;
