import React from "react";
import GoogleMapReact from "google-map-react";
import markerIcon from "../../../img/Marker.svg";

const Map = () => {
  const LAT = 42.999788256588396;
  const LNG = -81.24519473906872;
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: LAT, lng: LNG },
      map,
      title: "Hello World!",
      animation: window.google.maps.Animation.DROP,
      icon: markerIcon,
    });
    return marker;
  };

  return (
    <div className="relative w-full h-screen">
      <p className="bg-nav left-10 top-5 text-white p-5 bg-opacity-90 max-w-xs absolute z-10 whitespace-pre-line animate__animated animate__fadeInUp">
        {`Gyeonghun Park 
          London, Ontario, Canada
          
          `}
        <span className="text-prime">@</span>
        <span>: gp112795@gmail.com</span>
      </p>
      <div className="w-full absolute bottom-1" style={{ height: "110vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={{
            lat: LAT + 4,
            lng: LNG - 4,
          }}
          defaultZoom={6}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
          options={{
            disableDefaultUI: true,
            backgroundColor: "none",
            styles: [
              {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#ffffff",
                  },
                ],
              },
              {
                featureType: "all",
                elementType: "labels.text.stroke",
                stylers: [
                  {
                    visibility: "off",
                  },
                ],
              },
              {
                featureType: "administrative",
                elementType: "geometry",
                stylers: [
                  {
                    visibility: "on",
                  },
                  {
                    color: "#012621",
                  },
                  {
                    weight: 0.8,
                  },
                ],
              },
              {
                featureType: "administrative.country",
                elementType: "labels",
                stylers: [
                  {
                    color: "#012621",
                  },
                ],
              },
              {
                featureType: "administrative.country",
                elementType: "labels.text",
                stylers: [
                  {
                    color: "#0c0000",
                  },
                ],
              },
              {
                featureType: "administrative.province",
                elementType: "labels.text",
                stylers: [
                  {
                    color: "#012621",
                  },
                ],
              },
              {
                featureType: "administrative.locality",
                elementType: "labels.text",
                stylers: [
                  {
                    color: "#012621",
                  },
                ],
              },
              {
                featureType: "administrative.neighborhood",
                elementType: "labels.text",
                stylers: [
                  {
                    color: "#012621",
                  },
                ],
              },
              {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#06c5a9",
                  },
                ],
              },
              {
                featureType: "poi",
                elementType: "all",
                stylers: [
                  {
                    color: "#06c5a9",
                  },
                  {
                    lightness: -7,
                  },
                ],
              },
              {
                featureType: "poi.park",
                elementType: "all",
                stylers: [
                  {
                    color: "#06c5a9",
                  },
                ],
              },
              {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [
                  {
                    color: "#ffffff",
                  },
                  {
                    weight: 0.3,
                  },
                  {
                    lightness: 10,
                  },
                ],
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#047968",
                  },
                  {
                    lightness: "-7",
                  },
                ],
              },
              {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#06c5a9",
                  },
                  {
                    visibility: "on",
                  },
                  {
                    lightness: -15,
                  },
                ],
              },
              {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#06c5a9",
                  },
                  {
                    lightness: "7",
                  },
                ],
              },
              {
                featureType: "transit",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#06c5a9",
                  },
                  {
                    lightness: -34,
                  },
                ],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#222222",
                  },
                ],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Map;
