import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from '../credentials.js';

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 37.912039,
  lng: 139.061775,
};

const positionAkiba = {
  lat: 37.9133196,
  lng: 139.0582136,
};

const positionIwamotocho = {
  lat: 37.9127904,
  lng: 139.0843233,
};

export const Map = () => {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      >
        <Marker position={positionAkiba} />
        <Marker position={positionIwamotocho} />
      </GoogleMap>
    </LoadScript>
  );
};
