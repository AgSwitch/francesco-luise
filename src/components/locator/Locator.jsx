'use client';

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useTranslations } from "next-intl";

const mapData = {
    lat:45.56200979042744,
    lng: 12.246667953262252,
    zoom: 17,
    name: 'storeLocator.label',
    address: 'Via Zermanesa 35 31021 Mogliano Veneto (TV)',
    href: 'https://maps.app.goo.gl/dqmCfn6M5Q7ZEqqeA',
    directionText: 'map.visitUs',
    scrollWheelZoom: false,
};

const customMarker = L.icon({
  iconUrl: "/map/marker.svg",

  iconSize: [60, 57], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 56], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [8, -20], // point from which the popup should open relative to the iconAnchor
});

export default function Map({ className, mapStyle }) {
const t = useTranslations("contacts");
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
            <p className="font-bold">{t(mapData.name)}</p>
            <p>{mapData.address}</p>
            <a href={mapData.href} target="_blank">
              {t('storeLocator.hrefLabel')}
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
