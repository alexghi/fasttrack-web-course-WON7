async function loadWeather() {
  console.log("weather");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const data = await fetch(
    "https://weatherdbi.herokuapp.com/data/weather/Oradea",
    requestOptions
  )
    .then((response) => response.json())
    // .then(result => console.log(result))
    .then((result) => result)
    .catch((error) => console.log("error", error));

  window.weatherData = data;
  // =================  HEADER
        const location = data.region;
        document.getElementById(
            "w-header-l-b"
        ).innerHTML = `${data.region}, 47° 04' 0.01" N 21° 55' 59.99" E`;

        var currentImg = document.createElement('img');
        currentImg.src = data.currentConditions.iconURL;
        currentImg.alt = "missing pic";
        currentImg.setAttribute('id', 'current-imgg');
        currentImg.setAttribute('style', 'background-color: inherit; width: 40px; height: 40px;')
        document.getElementById('w-header-r-t').appendChild(currentImg); 

        var currentTempDiv = document.createElement('div');
        currentTempDiv.setAttribute('id', 'current-temp');
        currentTempDiv.setAttribute('style', 'background-color:inherit; padding-left: 15px;')
        currentTempDiv.innerHTML = `${data.currentConditions.temp.c} ºC`;
        document.getElementById('w-header-r-t').appendChild(currentTempDiv);

        
        const currentTime = data.currentConditions.dayhour;
        document.getElementById('w-header-r-b').innerHTML = `${currentTime}`;

       

  // ================= BODY
        for (var i = 0; i < data.next_days.length; i++) {
            var dayData = data.next_days[i];
            console.log(dayData);
            var currentDayName = data.next_days[i].day;
            console.log(currentDayName);
            var dayName = data.next_days[i].day;
            console.log(dayName);
            var imageURL = data.next_days[i].iconURL;
            console.log(imageURL);
            var minTempC = data.next_days[i].min_temp.c;
            console.log(minTempC);
            var minTempF = data.next_days[i].min_temp.f;
            console.log(minTempF);
            var maxTempC = data.next_days[i].max_temp.c;
            console.log(maxTempC);
            var maxTempF = data.next_days[i].max_temp.f;
            console.log(maxTempF);

            // Prepare the proper display of the day after tomorrow and on
            const d = new Date();
            const currentMonth = d.getMonth() + 1;
            const currentDayInMonth = d.getDate();
            const currentMonthDay = `${currentMonth} - ${currentDayInMonth}`;
            var increment = data.next_days.indexOf(data.next_days[i]);
            const incrementedDays = currentDayInMonth + increment;

            // PARENT DIV: creating w-day-${i}. This div will include all the information for every particular day
            var dayDiv = document.createElement("div");
            dayDiv.setAttribute("id", `w-day-${i}`);
            dayDiv.setAttribute(
            "style",
            "display:flex; flex-direction: column; padding:5px;margin:1px; width: 150px;"
            );
            // dayDiv.innerHTML = `${dayName}`;
            // if(dayName == data.next_days[0].day) {
            //      dayDiv.innerHTML = `${dayName} \n Today`;
            // } else if(dayName == data.next_days[1].day) {
            //      dayDiv.innerHTML = `${dayName} \n Tomorrow`;
            // }
            // else {
            //      dayDiv.innerHTML = `${dayName} \n ${currentMonth} - ${incrementedDays}`;
            // }
            document.getElementById("w-body").appendChild(dayDiv);

            // DAY
            var dayNameDiv = document.createElement("div");
            dayNameDiv.setAttribute("id", `w-name-${i}`);
            dayNameDiv.setAttribute(
            "style",
            "font-weight:bolder; font-variant: small-caps; padding-top:5px;"
            );
            dayNameDiv.innerHTML = `${dayName}`;
            document.getElementById(`w-day-${i}`).appendChild(dayNameDiv);

            // DATE
            var dateDiv = document.createElement("div");
            dateDiv.setAttribute("id", `w-date-${i}`);
            dateDiv.setAttribute("style", "padding-top:5px;");
            if (dayName == data.next_days[0].day && increment===0 ) {
              console.log(dayName)
               dateDiv.innerHTML = 'Today';
            } else if (dayName == data.next_days[1].day) {
               dateDiv.innerHTML = 'Tomorrow';
            } else if (dayName == data.next_days[7].day) {
              dateDiv.innerHTML = `${currentMonth} - ${incrementedDays}`;
            } else {
                dateDiv.innerHTML = `${currentMonth} - ${incrementedDays}`;
            }
            document.getElementById(`w-day-${i}`).appendChild(dateDiv);
                console.log(data.next_days.indexOf(data.next_days[0]))
            // IMAGES
            var img = document.createElement("img");
            img.src = imageURL;
              console.log(img.src);
            img.alt = "missing pic";
            img.setAttribute('id', `w-icon-${i}`, 'style', 'width: 45em;');
            
            document.getElementById(`w-day-${i}`).appendChild(img);

            // MAX TEMPERATURE
            var maxTempDiv = document.createElement("div");
            maxTempDiv.setAttribute("id", `w-maxTemp-${i}`);
            maxTempDiv.setAttribute("class", 'celsius');
            maxTempDiv.innerHTML = `${maxTempC}ºC`;
            if (maxTempC >= 30) {
            maxTempDiv.setAttribute("style", "background-color: #ffff00;");
            } else if (maxTempC >= 25 && maxTempC <= 29) {
            maxTempDiv.setAttribute("style", "background-color: #ffffb3");
            } else if (maxTempC >= 20 && maxTempC <= 24) {
            maxTempDiv.setAttribute("style", "background-color: #ffffe6");
            } else if ((maxTempC >= 15) & (maxTempC <= 19)) {
            maxTempDiv.setAttribute("style", "background-color: #00cc41");
            } else if ((maxTempC >= 10) & (maxTempC <= 14)) {
            maxTempDiv.setAttribute("style", "background-color: #80ffa8");
            } else if ((maxTempC >= 5) & (maxTempC <= 9)) {
            maxTempDiv.setAttribute("style", "background-color: #e6ffee");
            } else if ((maxTempC >= 1) & (maxTempC <= 4)) {
            maxTempDiv.setAttribute("style", "background-color: #99ffdd");
            } else if ((maxTempC = 0 & (maxTempC >= -5))) {
            maxTempDiv.setAttribute("style", "background-color: #e6ffff");
            } else if ((maxTempC <= -6) & (maxTempC >= -10)) {
            maxTempDiv.setAttribute("style", "background-color: #66ffff ");
            } else {
            maxTempDiv.setAttribute("style", "background-color: #00cccc");
            }
            document.getElementById(`w-day-${i}`).appendChild(maxTempDiv);
            maxTempDiv.style.visibility = 'visible';
                // MAX TEMPERATURE FAHRENHEIT
                var maxTempFahrenheitDiv = document.createElement("div");
                maxTempFahrenheitDiv.setAttribute("id", `w-maxTemp-${i}`);
                maxTempFahrenheitDiv.setAttribute('class', 'fahrenheit');
                maxTempFahrenheitDiv.innerHTML = `${maxTempF}ºF`;
                if (maxTempF >= 30) {
                  maxTempFahrenheitDiv.setAttribute("style", "background-color: #ffff00;");
                } else if (maxTempF >= 25 && maxTempF <= 29) {
                  maxTempFahrenheitDiv.setAttribute("style", "background-color: #ffffb3;");
                } else if (maxTempF >= 20 && maxTempF <= 24) {
                  maxTempFahrenheitDiv.setAttribute("style", "background-color: #ffffe6;");
                } else if ((maxTempF >= 15) & (maxTempF <= 19)) {
                  maxTempFahrenheitDiv.setAttribute("style", "background-color: #00cc41;");
                } else if ((maxTempF >= 10) & (maxTempF <= 14)) {
                  maxTempFahrenheitDiv.setAttribute("style", "background-color: #80ffa8;");
                } else if ((maxTempF >= 5) & (maxTempF <= 9)) {
                  maxTempFahrenheitDiv.setAttribute("style", "background-color: #e6ffee;");
                } else if ((maxTempF >= 1) & (maxTempF <= 4)) {
                  maxTempFahrenheitDiv.setAttribute("style", "background-color: #99ffdd; display:none");
                } else if ((maxTempF = 0 & (maxTempF >= -5))) {
                  maxTempFahrenheitDiv.setAttribute("style", "background-color: #e6ffff;");
                } else if ((maxTempF <= -6) & (maxTempF >= -10)) {
                  maxTempFahrenheitDiv.setAttribute("style", "background-color: #66ffff;");
                } else {
                  maxTempFahrenheitDiv.setAttribute("style", "background-color: #00cccc;");
                }
                // document.getElementById(`w-day-${i}`).appendChild(maxTempFahrenheitDiv);
                maxTempFahrenheitDiv.style.visibility = 'hidden';
                window.maxTempFahrenheitDiv;

                // const toggleTemperature = () => {
                //  var far = document.getElementById(`w-day-${i}`).appendChild(maxTempFahrenheitDiv) = true;
                //  far == true;
                //  console.log(far)
                //  return far
                // }
                

            // MIN TEMPERATURE
            var minTempDiv = document.createElement("div");
            minTempDiv.setAttribute("id", `w-minTemp-${i}`);
            minTempDiv.innerHTML = `${minTempC}ºC`;
            if (minTempC >= 30) {
            minTempC.setAttribute("style", "background-color: #ffff00");
            document.documentElement.style.setProperty(
                "--temperature-color1",
                "pink"
            );
            } else if (minTempC >= 25 && minTempC <= 29) {
            minTempDiv.setAttribute("style", "background-color: #ffffb3");
            } else if (minTempC >= 20 && minTempC <= 24) {
            maxTempDiv.setAttribute("style", "background-color: #ffffe6");
            } else if ((minTempC >= 15) & (minTempC <= 19)) {
            minTempDiv.setAttribute("style", "background-color: #00cc41");
            } else if ((minTempC >= 10) & (minTempC <= 14)) {
            minTempDiv.setAttribute("style", "background-color: #80ffa8");
            } else if ((minTempC >= 5) & (minTempC <= 9)) {
            minTempDiv.setAttribute("style", "background-color: #e6ffee");
            } else if ((minTempC >= 1) & (minTempC <= 4)) {
            minTempDiv.setAttribute("style", "background-color: #99ffdd");
            } else if ((minTempC = 0 & (minTempC >= -5))) {
            minTempDiv.setAttribute("style", "background-color: #e6ffff");
            } else if ((minTempC <= -6) & (minTempC >= -10)) {
            minTempDiv.setAttribute("style", "background-color: #66ffff ");
            } else {
            minTempDiv.setAttribute("style", "background-color: #00cccc");
            }
            document.getElementById(`w-day-${i}`).appendChild(minTempDiv);
        }
}
loadWeather();

const toggleTemperature = () => {
  for (var i = 0; i < weatherData.next_days.length; i++) {
  
    var maxTempFahrenheitDiv = document.createElement('div');
    maxTempFahrenheitDiv.setAttribute("id", `w-maxTemp-${i}`);
    maxTempFahrenheitDiv.setAttribute('class', 'fahrenheit');
    maxTempFahrenheitDiv.innerHTML = `${weatherData.next_days[i].max_temp.f}ºF`;;
    document.getElementById(`w-day-${i}`).appendChild(maxTempFahrenheitDiv);
    // return maxTempFahrenheitDiv  
    

    var maxTempDiv = document.createElement("div");
    // document.getElementById(`w-day-${i}`).removeChild(maxTempDiv);
    maxTempDiv.style.visibility = 'hidden';
    
  
    // maxTempDiv.setAttribute("id", `w-maxTemp-${i}`);
    // maxTempDiv.setAttribute("class", 'celsius');
    // document.getElementById(`w-day-${i}`).appendChild(maxTempDiv);
    // maxTempDiv.style.visibility = 'hidden';
  }
 }



 function toggleTemperature () {
  const tT = document.getElementById('CFbutton');
  const temp = document.querySelectorAll('fahrenheit');
  toggleTemperature.addEventListener("click", function () {
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].classList.contains("hidden")) {
        temp[i].classList.remove("hidden");
      } else {
        temp[i].classList.add("hidden");
      }
    }
  });
};




 
// const toggleTemperature = () => {
//   window.weatherData.next_days[i];
//   var result = document.getElementById(`w-day-${i}`).appendChild(maxTempFahrenheitDiv);
//   result = true;
//   return result
// }
// toggleTemperature()

// document.getElementById("CFbutton")
//         .addEventListener("click", function() {
//   for (var i = 0; i < weatherData.next_days.length; i++) {
    
//                 const result = document.getElementById(`w-day-${i}`).appendChild(maxTempFahrenheitDiv) = true;
//                 result.style.visibility = 'visible'
//                 return result;
//                 maxTempFahrenheitDiv.style.visibility = 'hidden';
//                 window.maxTempFahrenheitDiv;
//     document.getElementById(`w-day-${i}`).appendChild(maxTempFahrenheitDiv) = true;
//     maxTempFahrenheitDiv.style.visibility = 'visible';
//     maxTempDiv.style.visibility = 'hidden';
  
//     document.getElementById(`w-day-${i}`).appendChild(maxTempFahrenheitDiv) = false;
//     maxTempFahrenheitDiv.style.visibility = 'hidden';
  
//   }
// }, false);


// const F = document.getElementsByClassName('fahrenheit');
// console.log(F)
// const C = document.getElementsByClassName('celsius');
// console.log(C.style)
// console.log(F.style.visibility)
// function toggleTemperature() {
//   if(F.style.visibility = 'hidden') {
//     F.style.visibility = 'visible';
//     C.style.visibility = 'hidden'
//   } else {
//     F.style.visibility = 'hidden';
//     C.style.visibility = 'visible';
//   }
// }
// console.log(toggleTemperature());



//===
// console.log(weatherData)
// var C = weatherData.next_days[i].max_temp.c;
//   console.log(C);
//   console.log(weatherData.next_days[1].max_temp.c);
// var F = weatherData.next_days[i].max_temp.f;
//   console.log(F);
//   console.log(weatherData.next_days[1].max_temp.c);
// // var unit = C;

// toggleMeasurementUnit = () => {
//   measurementUnit === C ? (measurementUnit = F) : (measurementUnit = C);
//   generateForecast();
//   return measurementUnit;
// };

// generateForecast = () => {
//   for(i = 0; i < weatherData.next_days.length; i++) {
//     console.log(weatherData.next_days[i].max_temp.c)
//   }
// };

// var measure = weatherData.next_days[i].max_temp[0];
// measure.forEach(function (item) {
//     console.log(item)
// })
// console.log(measure.forEach)


//=== A
// var measurementUnit = "C";
// toggleMeasurementUnit = () => {
//   measurementUnit === "C" ? (measurementUnit = "F") : (measurementUnit = "C");
//   generateForecast();
//   return measurementUnit;
//   // if(measurementUnit === 'C') {
//   //     measurementUnit = 'F'
//   // }
// };

// generateForecast = () => {
//   weatherData.forEach(function (item) {
//     console.log(item);
//   });
// };

// var measure = weatherData.next_days[i].max_temp[0];
// measure.forEach(function (item) {
//     console.log(item)
// })
// console.log(measure.forEach)