async function loadNasaImages( ) {
    console.log('loadNasaImages');

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    //   const data = await fetch("https://api.nasa.gov/planetary/apod?api_key=AaMpAKQyQTDmPP3yC1RoArvqG2MjgukNtir4D8Y6", requestOptions)
    //     .then(response => response.json())
    //     .then(result => result)
    //     .catch(error => console.log('error', error));

    var inputStart = document.getElementById('start_date').value;
    var inputEnd = document.getElementById('end_date').value;
        console.log(inputStart, inputEnd);
    var apiUpdated = `https://api.nasa.gov/planetary/apod?api_key=AaMpAKQyQTDmPP3yC1RoArvqG2MjgukNtir4D8Y6&start_date=${inputStart}&end_date=${inputEnd}`;
        console.log(apiUpdated);
    var data = await fetch(`${apiUpdated}`, requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
        console.log(data);

        if(inputStart.length == 0) {
            inputError = 'Introdu data inițială!';            
        } else if(inputEnd.length == 0) {
            inputError = 'Introdu data finală!';
        } else{
            // document.getElementById('nasa-images').children;
            // debugger
            for(var i = 0; i < data.length; i++) {
                var image = data[i];
                    console.log(image)
                var img = document.createElement('img');
                img.src = image.url;
                img.alt = image.title;
                img.className = 'nasa-image';
                document.getElementById('nasa-images').appendChild(img);
                inputError = '';
            }        
        }
        document.getElementById('message').innerHTML = inputError;
}
 