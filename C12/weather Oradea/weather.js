const getWeatherData = function (country) {
  fetch(`https://weatherdbi.herokuapp.com/data/weather/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(".title").textContent = `Weather ${country}`;
      document.querySelector(".current--temp").innerHTML =
        data.currentConditions.temp.c + "&#8451;";
      document.querySelector(".current--Ftemp").innerHTML =
        data.currentConditions.temp.f + "&#8457;";
      document.querySelector(".country--region").textContent = data.region;
      document.querySelector(".currentday--hour").textContent =
        data.currentConditions.dayhour;
      const img = createImageElement(
        data.currentConditions.iconURL,
        data.currentConditions.comment
      );
      document
        .querySelector(".img-temperature-container")
        .insertAdjacentElement("afterbegin", img);
      for (let i = 0; i < data.next_days.length; i++) {
        const html = createDayContent(data.next_days[i], i);
        document
          .querySelector(".nextday--container")
          .insertAdjacentHTML("beforeend", html);
      }

      changeTemperature();
    });
};
getWeatherData("Oradea");

const createImageElement = function (src, alt) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;

  return img;
};

const createDayContent = function (data, nextDayIndex) {
  const date = dayFormat(nextDayIndex);
  const tempMaxStyle = temperatureStyle(data.max_temp.c);
  const tempMinStyle = temperatureStyle(data.min_temp.c);
  const html = `
    <div class="day">
        <div class="day--name">${data.day.substring(0, 3)}</div>
        <div class="today--data">${date}</div>
        <div class="icon-background">
            <img class="day--img" src="${data.iconURL}" />
        </div>
        <div class="max--temp temperature ${tempMaxStyle}">${
    data.max_temp.c
  }&#8451;</div>
        <div class="max--temp hidden temperature ${tempMaxStyle}">${
    data.max_temp.f
  }&#8457;</div>
        <div class="min--temp temperature ${tempMinStyle}">${
    data.min_temp.c
  }&#8451;</div>
        <div class="min--temp hidden temperature ${tempMinStyle}">${
    data.min_temp.f
  }&#8457;</div>
     </div>`;

  return html;
};

const dayFormat = function (days) {
  switch (days) {
    case 0:
      return "Today";
    case 1:
      return "Tomorrow";
    default:
      var d = new Date();
      d.setDate(d.getDate() + days);
      return d.getMonth() + 1 + "-" + d.getDate();
  }
};

const temperatureStyle = function (temperature) {
  if (temperature <= 0) {
    return "less-than-zero";
  } else if (temperature > 0 && temperature <= 10) {
    return "zero-ten";
  } else if (temperature > 10 && temperature <= 15) {
    return "ten-to-fifteen";
  } else if (temperature > 15 && temperature <= 20) {
    return "fifteen-to-twenty ";
  } else if (temperature > 20 && temperature <= 25) {
    return "twenty-to-twentyfive";
  } else if (temperature > 25 && temperature <= 30) {
    return "twentyfive-to-thirty";
  } else {
    return "more-than-thirty";
  }
};

const changeTemperature = function () {
  const toggleTemperature = document.getElementById("toggle-temperature");
  const temp = document.querySelectorAll(".temperature");
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
