import React from "react";
import '../Css/GetQuote/GoogleMapQuote.css'
import { Container } from 'react-bootstrap';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

export const GoogleMapQuote = () => {
  return (
    <div>
      <Container fluid className="map-container">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          ></GoogleMap>
        </LoadScript>
      </Container>
    </div>
  );
};
