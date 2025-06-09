// Inisialisasi peta
const map = L.map('map').setView([-0.020855, 109.33384], 13);

// Basemap Google Satellite
const baseMapSatellite = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  attribution: 'Satellite by <a href="https://maps.google.com/">Google</a>',
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

baseMapSatellite.addTo(map);

const baseMaps = {
  "Google Satellite": baseMapSatellite
};

// Tombol "Home"
const homeControl = L.control({ position: 'topleft' });
homeControl.onAdd = function(map) {
  const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
  div.innerHTML = '🏠';
  div.style.backgroundColor = 'white';
  div.style.width = '30px';
  div.style.height = '30px';
  div.style.lineHeight = '30px';
  div.style.textAlign = 'center';
  div.style.cursor = 'pointer';
  div.title = 'Kembali ke Home';
  div.onclick = function() {
    map.setView([home.lat, home.lng], home.zoom);
  };
  return div;
};
homeControl.addTo(map);

// Fitur "My Location"
L.control.locate({
  position: 'topleft',
  flyTo: true,
  strings: {
    title: "Temukan lokasiku"
  },
  locateOptions: {
    enableHighAccuracy: true
  }
}).addTo(map);

// Tombol Fullscreen
    map.addControl(new L.Control.Fullscreen());


// Style titik (optional, bisa digunakan untuk GeoJSON atau marker custom)
const symbologyPoint = {
  radius: 5,
  fillColor: "#9dfc03",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};
 
// Tambahkan marker wisata
const jalan = new L.LayerGroup();

L.control.layers(baseMaps, Component).addTo(map);

let legend = L.control({ position: "topright" });


legend.addTo(map);