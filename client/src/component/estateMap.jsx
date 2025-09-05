import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


const estates = [
  { id: 1, title: "Modern Apartment", location: "Dubai Marina", lat: 25.0800, lng: 55.1400, price: "$250,000" },
  { id: 2, title: "Luxury Villa", location: "Palm Jumeirah", lat: 25.1122, lng: 55.1381, price: "$3,500,000" },
  { id: 3, title: "Downtown Studio", location: "Dubai Downtown", lat: 25.1972, lng: 55.2744, price: "$150,000" },
];
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const EstateMap = ({posts}) => {
  return (
    <MapContainer
      center={[25.276987, 55.296249]} // Default center: Dubai
      zoom={11}
      scrollWheelZoom={true}
      className="rounded-2xl shadow-md"
      style={{ height: "600px", width: "100%" }}
    >
      {/* Map background */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Markers for each estate */}
      {estates.map((estate) => (
        <Marker
          key={estate.id}
          position={[estate.lat, estate.lng]}
          icon={markerIcon}
        >
          <Popup>
            <div className="text-sm">
              <h3 className="font-bold">{estate.title}</h3>
              <p>{estate.location}</p>
              <p className="text-green-600">{estate.price}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default EstateMap;
