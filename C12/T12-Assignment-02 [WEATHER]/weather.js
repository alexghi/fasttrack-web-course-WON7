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
        console.log(location);
        document.getElementById(
            "w-header-l-b"
        ).innerHTML = `${data.region}, 47° 04' 0.01" N 21° 55' 59.99" E`;
        const currentTemp = data.currentConditions.temp.c;
        document.getElementById("w-header-r-t").innerHTML = `${currentTemp} ºC`;
        const currentTime = data.currentConditions.dayhour;
        document.getElementById("w-header-r-b").innerHTML = `${currentTime}`;

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
            if (dayName == data.next_days[0].day) {
            dateDiv.innerHTML = `Today`;
            } else if (dayName == data.next_days[1].day) {
            dateDiv.innerHTML = `Tomorrow`;
            } else {
            dateDiv.innerHTML = `${currentMonth} - ${incrementedDays}`;
            }
            document.getElementById(`w-day-${i}`).appendChild(dateDiv);

            // IMAGES
            var img = document.createElement("img");
            img.src = imageURL;
            console.log(img.src);
            img.alt = "missing pic";
            img.setAttribute("id", `w-icon-${i}`);
            document.getElementById(`w-day-${i}`).appendChild(img);

            // MAX TEMPERATURE
            var maxTempDiv = document.createElement("div");
            maxTempDiv.setAttribute("id", `w-maxTemp-${i}`);
            maxTempDiv.innerHTML = `${maxTempC}ºC`;
            if (maxTempC >= 30) {
            maxTempDiv.setAttribute("style", "background-color: #ffff00");
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

//===
console.log(weatherData)
var C = weatherData.next_days[i].max_temp.c;
  console.log(C);
  console.log(weatherData.next_days[1].max_temp.c);
var F = weatherData.next_days[i].max_temp.f;
  console.log(F);
  console.log(weatherData.next_days[1].max_temp.c);
// var unit = C;

toggleMeasurementUnit = () => {
  measurementUnit === C ? (measurementUnit = F) : (measurementUnit = C);
  generateForecast();
  return measurementUnit;
};

generateForecast = () => {
  for(i = 0; i < weatherData.next_days.length; i++) {
    console.log(weatherData.next_days[i].max_temp.c)
  }
};

var measure = weatherData.next_days[i].max_temp[0];
measure.forEach(function (item) {
    console.log(item)
})
console.log(measure.forEach)


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