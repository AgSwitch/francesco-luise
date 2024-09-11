'use client';

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const mapData = {
    lat:45.564470557633605,
    lng: 12.301835837433977,
    zoom: 17,
    name: 'Francesco Luise Fisioterapista',
    address: 'Via Don Giovanni Bosco, 30020 Marcon VE',
    href: 'https://www.google.com/maps/dir//Via+Pasqualigo,+59%2FH,+30174+Venezia+VE/@45.5086748,12.1798239,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x477eb464c72a4d9d:0xf80e3d11c992c194!2m2!1d12.2622495!2d45.5086981?entry=ttu',
    directionText: 'map.visitUs',
    scrollWheelZoom: false,
};

const customMarker = L.icon({
  iconUrl: "/map/mapMarker.png",

  iconSize: [38, 57], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 56], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -20], // point from which the popup should open relative to the iconAnchor
});

export default function Map({ className, mapStyle }) {
  return (
    <div
      className={`w-full h-full bg-background flex justify-center relative z-0 ${className}`}
    >
      <MapContainer
        center={[mapData.lat, mapData.lng]}
        zoom={mapData.zoom}
        scrollWheelZoom={mapData.scrollWheelZoom}
        className={`w-full lg:w-1/2 aspect-video ${mapStyle}`}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={customMarker} position={[mapData.lat, mapData.lng]}>
          <Popup>
            <p className="font-bold">{mapData.name}</p>
            <p>{mapData.address}</p>
            <a href={mapData.href} target="_blank">
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
