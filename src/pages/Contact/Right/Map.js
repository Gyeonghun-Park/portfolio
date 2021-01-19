import React from "react";
import GoogleMapReact from "google-map-react";
import markerIcon from "../../../img/marker.svg";
import { useEffect, useState } from "react";
import clsx from "clsx";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const Map = () => {
  const LAT = 42.999788256588396;
  const LNG = -81.24519473906872;
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: LAT, lng: LNG },
      map,
      animation: window.google.maps.Animation.DROP,
      icon: {
        url: markerIcon,
        scaledSize: mobileOpen
          ? new window.google.maps.Size(50, 50)
          : new window.google.maps.Size(120, 120),
      },
    });
    return marker;
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [mobileOpen, setMobileOpen] = useState(windowDimensions.width < 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
      if (windowDimensions.width < 1024) {
        setMobileOpen(true);
      } else {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-full mt-16">
      <p
        className={clsx(
          "text-sm absolute z-10 max-w-xs p-2 text-white whitespace-pre-line bg-nav left-0 -top-2 bg-opacity-90 animate__animated animate__fadeInUp",
          "lg:left-10 lg:top-5 lg:text-lg lg:p-5"
        )}
      >
        {`Gyeonghun Park 
          London, Ontario, Canada
          
          `}
        <span className="text-prime">@</span>
        <span>: gp112795@gmail.com</span>
      </p>
      <div className="absolute w-full outline-none bottom-1 h-full">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={
            mobileOpen
              ? {
                  lat: LAT + 2.5,
                  lng: LNG - 4,
                }
              : {
                  lat: LAT + 4,
                  lng: LNG - 4,
                }
          }
          defaultZoom={mobileOpen ? 5 : 6}
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
