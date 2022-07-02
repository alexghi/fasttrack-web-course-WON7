async function loadWeather() {
    console.log('weather');

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    const data = await fetch("https://weatherdbi.herokuapp.com/data/weather/Oradea", requestOptions)
        .then(response => response.json())
        // .then(result => console.log(result))
        .then(result => result)
        .catch(error => console.log('error', error));

        console.log('mydata',  data.next_days);
        const filteredData = data.next_days;
            console.log('filtered data 1', filteredData);
        
    
    for(var i = 0; i < filteredData.length; i++) {
        var dayDiv = document.createElement('div');
        var someDay = filteredData[i];
        dayDiv.time = filteredData[i].day;
             console.log(dayDiv.time);
        // dayDiv.maxCelsius = filteredData[i].max_temp.c;
        //     console.log(dayDiv.maxCelsius)
        // dayDiv.icon = filteredData[i].iconURL;
        //     console.log(dayDiv.icon);
        // dayDiv.setAttribute('id', 'w-days');
        // document.getElementById('w-body').appendChild(dayDiv);
        // dayDiv.innerHTML = `${dayDiv.time} \n ${dayDiv.maxCelsius} \n ${dayDiv.icon}`

        var myDay = dayDiv.time;
        var maxCelsius = dayDiv.maxCelsius = someDay.max_temp.c;
             console.log(dayDiv.maxCelsius);
        var maxFahrenheit = dayDiv.maxCelsius = someDay.max_temp.f;
             console.log(dayDiv.maxFahrenheit);
        var minCelsius = dayDiv.minCelsius = someDay.min_temp.c;
             console.log(dayDiv.minCelsius);
        var minFahrenheit = dayDiv.minFahrenheit = someDay.min_temp.f;
             console.log(dayDiv.minFahrenheit);
        
             
        // dayDiv.className = 'w-day';
        dayDiv.setAttribute('id', 'w-day');
        dayDiv.innerHTML = `${myDay}  \n ${maxCelsius}ºC`; // \n ${minCelsius}ºC \n ${maxFahrenheit}ºF \n ${minFahrenheit}ºF
        document.getElementById('w-body').appendChild(dayDiv);
             console.log(dayDiv);


             // IMAGES
        var img = document.createElement('img');
        img.src = someDay.iconURL;
             console.log(img.src)
        img.alt = 'weather pic';
        // img.className = 'w-icon';
        img.setAttribute('id', 'w-icon')
        document.getElementById('w-day').appendChild(img);
    



        //// === INCERCARE ALTERNATIVA     #1  
        //     // DAY - am filtrat datele ca sa trec direct la datele pentru next_days (care includ si ziua curenta)
        // var someDay = filteredData[i];

        //     // DAY ARRAY (0 TO 7 DAYS)
        // var dayArr = [];
        // for(var i = 0; i < filteredData.length; i++) {
        //      dayArr.push(filteredData[i].day);
        //  }
        //     console.log(dayArr)
        
        //     // PARCURG dayArr
        // for(var i = 0; i <= dayArr.length-1; i++) {
        //     var dayDiv = document.createElement('div');
        //     var myDay = dayArr[i];
        //         console.log('dayDiv', myDay, '//', dayArr[i]);
             
        //     dayDiv.setAttribute('id', 'w-day');
        //     // dayDiv.innerHTML = `${myDay}  `; // \n ${maxCelsius}ºC \n ${minCelsius}ºC \n ${maxFahrenheit}ºF \n ${minFahrenheit}ºF
        //     document.getElementById('w-body').appendChild(dayDiv);
        //         console.log(dayDiv);

        // }

        //     // CREEZ <img/> IN <dayDiv/>, PENTRU FIECARE ZI, CU URL-UL AFERENT
        // var imageArr = [];
        // for(i = 0; i < filteredData.length; i++) {
        //     imageArr.push(filteredData[i].iconURL);
        // }
        //     console.log(imageArr)
        //     // PARCURG imageArr
        // for(var i = 0; i <= imageArr.length; i++) {
        //     // var image = someDay[i];
        //     // var image = filteredData[i].imageURL;
        //     var img = document.createElement('img');
        //     var myImg = imageArr[i];
        //         console.log('myImg', myImg, '//', imageArr[i])
        //     img.src = myImg;
        //         console.log(img.src)
        //     img.alt = 'pic missing';
        //     img.setAttribute('id', 'w-icon');
        //     document.getElementById('w-day').appendChild(img);
        // }
        

        ////===ALTERNATIVA    #2
        // var dayDiv = document.createElement('div');
        // var someDay = filteredData[i];
        // dayDiv.time = filteredData[i].day;
        //      console.log(dayDiv.time);
        // dayDiv.maxCelsius = filteredData[i].max_temp.c;
        //     console.log(dayDiv.maxCelsius)
        // dayDiv.icon = filteredData[i].iconURL;
        //     console.log(dayDiv.icon);
        // dayDiv.setAttribute('id', 'w-days');
        // document.getElementById('w-body').appendChild(dayDiv);
        // dayDiv.innerHTML = `${dayDiv.time} \n ${dayDiv.maxCelsius} \n ${dayDiv.icon}`

    }




    // for(i = 0; i < filteredData.length; i++) {
    //     var image = someDay[i];
    //     var img = document.createElement('img');
    //     var myImg = someDay.iconURL;
    //     img.src = someDay.iconURL;
    //         console.log(img.src)
    //     img.alt = 'weather pic';
    //     img.className = 'w-icon';
    //     document.querySelector('.w-day').appendChild(img);
    //         console.log(img.src)
    // }

    // for(i = 0;  i < filteredData.length; i++) {
    //     var maxCelsius = filteredData[i].max_temp[i];
    //         console.log('maxima in grade Celsius', maxCelsius);
    //     var maxCelsiusDiv = document.createElement('div');
    //     maxCelsiusDiv.className = 'w-maxCelsius';
    //     maxCelsiusDiv.innerHTML = `${maxCelsius}`;
    //     document.getElementsByClassName('w-day').appendChild(maxCelsiusDiv);
    // }



    const location = data.region;
            console.log(location);
    document.getElementById('w-header-l-b').innerHTML = `${data.region}, 47° 04' 0.01" N 21° 55' 59.99" E`;    
    const currentTemp = data.currentConditions.temp.c;
    document.getElementById('w-header-r-t').innerHTML = `${currentTemp} ºC`;
    const currentTime = data.currentConditions.dayhour;
    document.getElementById('w-header-r-b').innerHTML = `${currentTime}`;

        // const currentTime = new Date();
        // console.log(currentTime);
        // const currentHour = currentTime.getHours();
        // const currentMinutes = currentTime.getMinutes();


}
loadWeather();



// var myImage = filteredData[0].iconURL;
// var imago = document.createElement('img');
// console.log(myImage)
// document.getElementById('temp').appendChild(imago);
// document.getElementsByClassName('temp').innerHTML = myImage;