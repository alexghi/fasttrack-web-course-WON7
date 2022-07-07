async function loadNasaImages( ) {
    console.log('loadNasaImages');

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      

      const data = await fetch("https://api.nasa.gov/planetary/apod?api_key=AaMpAKQyQTDmPP3yC1RoArvqG2MjgukNtir4D8Y6&start_date=2022-06-01", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));

   
    for(var i = 0; i < data.length; i++) {
        var image = data[i];
        var img = document.createElement('img');
        img.src = image.url;
        img.alt = image.title;
        img.className = 'nasa-image';
        document.getElementById('nasa-images').appendChild(img);
    }
}
