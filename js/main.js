// Variables
const output = document.querySelector('#output');
const interval = 1200;
let dataParsed;
let isFirstIteration = true;
// Fetch data from API
async function getData() {
  let data;  
  const baseAPI = "https://api.wheretheiss.at/v1/satellites/25544";
  data = await fetch(baseAPI);
  dataParsed = await data.json();
  output.innerHTML = `LAT: ${dataParsed.latitude.toFixed(2)} | LON ${dataParsed.longitude.toFixed(2)} | ${parseFloat(dataParsed.velocity).toFixed(2)}<tt>KM/h</tt>`;
  marker.setLatLng([dataParsed.latitude, dataParsed.longitude]);
  
}

const myIcon = L.icon({
  iconUrl: 'img/iss-icon.png',
  iconSize: [100, 100],
  iconAnchor: [100, 100],
});
let mm = L.map('mapid'); 
mm.setView([0,0], 3);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1Ijoibmlja2VheCIsImEiOiJjazFsaDdzdXowNDF3M2ttOGY1NjNzbmVlIn0.RxHqZkNWSwvPA5-_e5loWA'
}).addTo(mm);
const marker = L.marker([0, 0], {icon:myIcon}).addTo(mm);

setInterval(getData, interval, [mm]);