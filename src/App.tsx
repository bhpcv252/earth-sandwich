import { useRef, useState } from "react";
import MapPane from "./MapPane";
import { getAntipode } from "./utils";
import "./App.css";
import { Map as LeafletMap } from "leaflet";

function App() {
    const [location, setLocation] = useState<[number, number]>([0, 0]);
    const [antipode, setAntipode] = useState<[number, number]>(getAntipode(0, 0));

    const leftMapRef = useRef<LeafletMap | null>(null);
    const rightMapRef = useRef<LeafletMap | null>(null);

    const zoom = 5;

    const centerBothMaps = (loc: [number, number], anti: [number, number]) => {
        leftMapRef.current?.setView(loc, zoom);
        rightMapRef.current?.setView(anti, zoom);
    };

    const handleLeftClick = (coords: [number, number]) => {
        const anti = getAntipode(coords[0], coords[1]);
        setLocation(coords);
        setAntipode(anti);
        centerBothMaps(coords, anti);
    };

    const handleRightClick = (coords: [number, number]) => {
        const loc = getAntipode(coords[0], coords[1]);
        setLocation(loc);
        setAntipode(coords);
        centerBothMaps(loc, coords);
    };

    return (
        <div className="container">
            <div className="pane">
                <h3>Location</h3>
                <MapPane
                    position={location}
                    onClick={handleLeftClick}
                    zoom={zoom}
                    mapRef={leftMapRef}
                />
            </div>
            <div className="pane">
                <h3>Antipode</h3>
                <MapPane
                    position={antipode}
                    onClick={handleRightClick}
                    zoom={zoom}
                    mapRef={rightMapRef}
                />
            </div>
        </div>
    );
}

export default App;
