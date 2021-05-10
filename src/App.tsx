import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from '../credentials.js';

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

const MyComponent = () => {
  return (
    <LoadScript googleMapsApiKey="API Key">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      ></GoogleMap>
    </LoadScript>
  );
};

export default MyComponent;