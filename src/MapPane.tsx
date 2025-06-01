import {
    MapContainer,
    TileLayer,
    Marker,
    useMapEvents,
    useMap,
} from "react-leaflet";
import { type LatLngExpression, Map as LeafletMap } from "leaflet";
import { type MutableRefObject, useEffect } from "react";

interface MapPaneProps {
    position: LatLngExpression; // This is the marker position
    onClick: (coords: [number, number]) => void;
    zoom?: number;
    mapRef: MutableRefObject<LeafletMap | null>;
}

const ClickHandler = ({
    onClick,
}: {
    onClick: (coords: [number, number]) => void;
}) => {
    useMapEvents({
        click(e) {
            onClick([e.latlng.lat, e.latlng.lng]);
        },
    });
    return null;
};

const MapInitializer = ({
    mapRef,
}: {
    mapRef: MutableRefObject<LeafletMap | null>;
}) => {
    const map = useMap();
    useEffect(() => {
        mapRef.current = map;
    }, [map, mapRef]);
    return null;
};

export default function MapPane({
    position,
    onClick,
    zoom = 4,
    mapRef,
}: MapPaneProps) {
    const [lat, lng] = position as [number, number];

    return (
        <div className="map-pane">
            <MapContainer
                center={position}
                zoom={zoom}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={position} />
                <ClickHandler onClick={onClick} />
                <MapInitializer mapRef={mapRef} />
            </MapContainer>

            <div className="label">
                Lat: {lat.toFixed(7)}, Lng: {lng.toFixed(7)}
            </div>
        </div>
    );
}
