// Variables
const baseAPI = "https://api.wheretheiss.at/v1/satellites/25544";

// Fetch data from API
async function getData(apiURL) {
  let data = await fetch(apiURL);
  return data.json();
}

console.log(getData(baseAPI));
