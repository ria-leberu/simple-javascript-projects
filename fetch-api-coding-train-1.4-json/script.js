
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'
async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const {latitude, longitude} = data; //js destructuring lets you pull the attirbutes from the json file and set them as variables
    document.getElementById('lat').textContent = latitude
    document.getElementById('long').textContent = longitude

    console.log(latitude)
    console.log(longitude)
}


getISS();

