import React, { useState, useRef, useEffect } from "react";
import { Box, CssBaseline, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  useMapEvents,
} from "react-leaflet";
import { LatLngExpression, Icon, Point, DragEndEvent } from "leaflet";
import DrawerMenu from "./Components/DrawerMenu";
import { ServoControls } from "./Components/ServoControls";
import SimulationBar from "./Components/SimulationBar";
import StatusPanel from "./Components/StatusPanel";
import "./App.css"; // Pastikan file CSS diimpor

const icon = new Icon({
  iconUrl: "https://www.svgrepo.com/download/399369/drone.svg",
  iconSize: new Point(60, 75),
  className: "leaflet-div-icon",
});

const initialDrone1Position: LatLngExpression = [-7.915, 110.575];
const initialDrone2Position: LatLngExpression = [-7.9161, 110.5656];
const trackerPosition: LatLngExpression = [-7.9161, 110.5656];
const tracker2Position: LatLngExpression = [
  -7.917333041624366, 110.56736480105658,
];

function MapClickListener({
  setDronePosition,
}: {
  setDronePosition: (position: LatLngExpression) => void;
}) {
  useMapEvents({
    click(e) {
      setDronePosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

function calculatePolygonVertices(
  tracker: LatLngExpression,
  drone: LatLngExpression
): LatLngExpression[] {
  const [trackerLat, trackerLng] = tracker as number[];
  const [droneLat, droneLng] = drone as number[];

  const dx = droneLng - trackerLng;
  const dy = droneLat - trackerLat;
  const angle = Math.atan2(dy, dx);

  const length = Math.sqrt(dx * dx + dy * dy);
  const width = length / 10;

  const baseAngle = Math.PI / 2;
  const endPoint1 = [
    droneLat + width * Math.sin(angle + baseAngle),
    droneLng + width * Math.cos(angle + baseAngle),
  ] as LatLngExpression;
  const endPoint2 = [
    droneLat + width * Math.sin(angle - baseAngle),
    droneLng + width * Math.cos(angle - baseAngle),
  ] as LatLngExpression;

  return [tracker, endPoint1, endPoint2];
}

function App() {
  const [drone1Position, setDrone1Position] = useState<LatLngExpression>(
    initialDrone1Position
  );
  const [drone2Position, setDrone2Position] = useState<LatLngExpression>(
    initialDrone2Position
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const servoControlsRef = useRef<HTMLDivElement>(null);
  const statusBarRef = useRef<HTMLDivElement>(null);

  const updatePosition = (event: DragEndEvent) => {
    const marker = event.target;
    const newPos = marker.getLatLng();
    setDrone1Position([newPos.lat, newPos.lng]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDrone1Position((prevPosition) => {
        const [lat, lng] = prevPosition as number[];
        const newLat = lat + (Math.random() - 0.5) * 0.001;
        const newLng = lng + (Math.random() - 0.5) * 0.001;
        return [newLat, newLng];
      });
      setDrone2Position((prevPosition) => {
        const [lat, lng] = prevPosition as number[];
        const newLat = lat + (Math.random() - 0.5) * 0.001;
        const newLng = lng + (Math.random() - 0.5) * 0.001;
        return [newLat, newLng];
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const polygonVertices = calculatePolygonVertices(
    trackerPosition,
    drone1Position
  );
  const polygonVertice2 = calculatePolygonVertices(
    tracker2Position,
    drone2Position
  );

  const handleListItemClick = (text: string) => {
    setSelectedItem(text);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servoControlsRef.current &&
        !servoControlsRef.current.contains(event.target as Node)
      ) {
        setSelectedItem(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <Box sx={{ display: "flex", position: "relative" }}>
        <DrawerMenu
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onItemClick={handleListItemClick}
        />
        {selectedItem === "Servo" && (
          <Box
            ref={servoControlsRef}
            sx={{
              position: "absolute",
              top: 64,
              left: 0,
              width: 500,
              zIndex: 1300,
              backgroundColor: "white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <ServoControls />
          </Box>
        )}
        {!drawerOpen && (
          <Box
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              zIndex: 1300,
              backgroundColor: "transparent",
            }}
          >
            <SimulationBar />
            <Box ref={statusBarRef} className="status-panel">
              <StatusPanel />
            </Box>
          </Box>
        )}
        <MapContainer
          style={{ height: "calc(100vh - 64px)", width: "100%" }}
          center={trackerPosition}
          zoom={15}
          scrollWheelZoom={false}
          className="map-container" // Tambahkan kelas CSS untuk styling tombol zoom
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={drone1Position}
            icon={icon}
            draggable={true}
            eventHandlers={{ dragend: updatePosition }}
          >
            <Popup>Drone 1</Popup>
          </Marker>
          <Marker icon={icon} position={drone2Position}>
            <Popup>Drone 2</Popup>
          </Marker>
          <Marker position={trackerPosition}>
            <Popup>Tracker</Popup>
          </Marker>
          <Marker position={tracker2Position}>
            <Popup>Tracker 2</Popup>
          </Marker>
          <Polygon
            positions={polygonVertice2}
            color="yellow"
            fillColor="yellow"
            fillOpacity={0.4}
          />
          <Polygon
            positions={polygonVertices}
            color="yellow"
            fillColor="yellow"
            fillOpacity={0.4}
          />
          <MapClickListener setDronePosition={setDrone1Position} />
          <IconButton
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              zIndex: 1000,
              backgroundColor: "white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </MapContainer>
      </Box>
    </div>
  );
}

export default App;
