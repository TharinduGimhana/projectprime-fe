import React, { useEffect, useRef, useState } from "react";
import "../Css/GetQuote/GoogleMapQuote.css";
import { Container } from "react-bootstrap";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { customMapStyles } from "../../components/common/customStyles/customMapStyles";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -33.334216,
  lng: 115.646554,
};

export const GoogleMapQuote = () => {
  const mapRef = useRef(null);
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  useEffect(() => {
    if (
      isApiLoaded &&
      mapRef.current &&
      window.google?.maps?.marker?.AdvancedMarkerElement
    ) {
      const { AdvancedMarkerElement } = window.google.maps.marker;

      const markerContent = document.createElement("div");
      markerContent.innerHTML = '<div class="custom-marker">📍</div>';

      const marker = new AdvancedMarkerElement({
        position: center,
        map: mapRef.current,
        content: markerContent,
      });

      return () => {
        marker.setMap(null);
      };
    }
  }, [isApiLoaded]);

  return (
    <div className="map-bg">
      <Container fluid className="map-container">
        <LoadScript
          googleMapsApiKey="AIzaSyDfD4gArJhBsmgrV_7pL7HppNtG7fqiIOY"
          libraries={["marker"]}
          onLoad={() => setIsApiLoaded(true)}
        >
          <GoogleMap
            onLoad={(map) => (mapRef.current = map)}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
            options={{
              styles: customMapStyles,
              disableDefaultUI: true,
              zoomControl: true,
            }}
          />
        </LoadScript>
      </Container>
    </div>
  );
};
