// Variables
const output = document.querySelector('#output');
const interval = 1500;

// Fetch data from API
async function getData() {
  let data;  
  const baseAPI = "https://api.wheretheiss.at/v1/satellites/25544";
  data = await fetch(baseAPI);
  let dataParsed = await data.json();
  output.innerHTML = dataParsed.latitude; 
}
setInterval(getData, interval);

