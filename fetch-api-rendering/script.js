console.log('about to fetch a rainbow');
fetch('rainbow.jpg').then(response => {
    console.log(response);
    return response.blob(); 
}).then(blob => {
    console.log(blob);
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
});