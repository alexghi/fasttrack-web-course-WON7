console.log("hello");
function refreshData(data, isCelsius) {
  let container = document.getElementById("dayscontainer");
  let location = document.getElementById("location");
  location.innerText = data.region;

  let todayPic = document.getElementById("todayPic");
  todayPic.src = data.currentConditions.iconURL;
  let today = document.getElementById("today");
  if (isCelsius) {
    today.innerText =
      "" +
      data.currentConditions.dayhour +
      "-" +
      data.currentConditions.temp.c +
      "C";
  } else {
    today.innerText =
      "" +
      data.currentConditions.dayhour +
      "-" +
      data.currentConditions.temp.f +
      "F";
  }

  container.replaceChildren();
  for (const day of data.next_days) {
    let dayDiv = document.createElement("div");
    dayDiv.className = "day";
    container.appendChild(dayDiv);

    let dayName = document.createElement("h3");
    dayDiv.appendChild(dayName);
    dayName.innerText = day.day;

    let dayComment = document.createElement("div");
    dayDiv.appendChild(dayComment);
    dayComment.innerText = day.comment;

    let dayPic = document.createElement("img");
    dayDiv.appendChild(dayPic);
    dayPic.src = day.iconURL;

    let dayTempMax = document.createElement("div");
    dayDiv.appendChild(dayTempMax);
    if (isCelsius) {
      dayTempMax.innerText = "" + day.max_temp.c + " C";
    } else {
      dayTempMax.innerText = "" + day.max_temp.f + " F";
    }

    let dayTempMin = document.createElement("div");
    dayDiv.appendChild(dayTempMin);
    if (isCelsius) {
      dayTempMin.innerText = "" + day.min_temp.c + " C";
    } else {
      dayTempMin.innerText = "" + day.min_temp.f + " F";
    }
  }
  console.log(data);
}

window.onload = function () {
  fetch("weather.json")
    .then((response) => response.json())
    .then((data) => {
      refreshData(data,true);
      document.getElementById("isCelsius").addEventListener("change", (e) => {
        console.log(e.target.checked);
        refreshData(data,e.target.checked);
      });
    });
};