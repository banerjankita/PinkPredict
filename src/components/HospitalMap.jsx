import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const HospitalMap = () => {
  const [map, setMap] = useState(null);
  const [userCoords, setUserCoords] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setUserCoords({ lat: latitude, lng: longitude });

        // Init map
        const mapInstance = L.map("map").setView([latitude, longitude], 13);
        setMap(mapInstance);

        // Add OpenStreetMap tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '© OpenStreetMap contributors'
        }).addTo(mapInstance);

        // Add marker for user location
        L.marker([latitude, longitude])
          .addTo(mapInstance)
          .bindPopup("You are here")
          .openPopup();

        // Correct Overpass API query
        const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node[amenity=hospital](around:5000,${latitude},${longitude});out;`;

        const response = await fetch(overpassUrl);
        const data = await response.json();

        data.elements.forEach((hospital) => {
          L.marker([hospital.lat, hospital.lon])
            .addTo(mapInstance)
            .bindPopup(hospital.tags.name || "Unnamed Hospital");
        });
      },
      (err) => {
        console.error("Geolocation error:", err);
        alert("Location access is required to find nearby hospitals.");
      }
    );
  }, []);

  return (
    <div>
      
      <div id="map" style={{ height: "500px", width: "100%", borderRadius: "12px" }}></div>
    </div>
  );
};

export default HospitalMap;
