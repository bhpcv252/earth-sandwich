import {
    MapContainer,
    TileLayer,
    Marker,
    useMapEvents,
    useMap,
} from "react-leaflet";
import { LatLngExpression, Map as LeafletMap } from "leaflet";
import { MutableRefObject, useEffect } from "react";

interface MapPaneProps {
    position: LatLngExpression;
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
    return (
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
    );
}
