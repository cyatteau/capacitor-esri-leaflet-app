const map = L.map("map-container").setView([38.85, -77.1], 3);

const apiKey = "YOUR_API_KEY";
import { vectorBasemapLayer } from "esri-leaflet-vector";
vectorBasemapLayer("ArcGIS:Navigation", {
  apiKey: apiKey,
}).addTo(map);

