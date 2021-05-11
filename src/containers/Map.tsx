import React, { Fragment } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from '../credentials.js';
// import mapStyles from "./mapUtils/mapStyles";

const containerStyle = {
  width: "100%",
  height: "85vh",
};

const center = {
  lat: 37.912039,
  lng: 139.061775,
};

// 仮位置データ
const positionAkiba = {
  lat: 37.9133196,
  lng: 139.0582136,
};

// 仮位置データ
const positionIwamotocho = {
  lat: 37.9127904,
  lng: 139.0843233,
};

const markerLabelAkiba = {
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "15px",
  fontWeight: "100",
  text: "ト",
};

const markerLabelIwamotocho = {
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "15px",
  fontWeight: "100",
  text: "ト",
};

const divStyle = {
  background: "white",
  fontSize: 7.5,
};

export const Map = () => {
  return (
    <Fragment>
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      >
        <InfoWindow position={positionAkiba}>
          <div style={divStyle}>
            <h1>トイレ1</h1>
          </div>
        </InfoWindow>
        <InfoWindow position={positionIwamotocho}>
          <div style={divStyle}>
            <h1>トイレ2</h1>
          </div>
        </InfoWindow>
        <Marker position={positionAkiba} label={markerLabelAkiba} />
        <Marker position={positionIwamotocho} label={markerLabelIwamotocho} />
      </GoogleMap>
    </LoadScript>
    </Fragment>
  );
};
