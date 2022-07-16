const weatherContainer = document.querySelector(".weather");
const section = document.querySelector(".section")
clicked = [];
// Function: Call api
function getCity(city) {
  //get the parent
  const parent = city.parentNode;
  var val =
    parent.querySelector("input[type=text]").value; //search the parent's children to simulate sibling searching
  if (val == "") {
    console.log("no input");
  }
  
  
  fetch(`https://weatherdbi.herokuapp.com/data/weather/${val}`)
    .then((res) => res.json())
    .then((data) => {renderWeather(data);})
	.catch(err => {
		      console.error(`Something went wrong 💥💥. Try again!`);
		    })
  const renderWeather = function (data) {
    for (var i = 0; i < 7; i++) {
      const html = `
		<div class="weather-block">
		<div class="info">
			<h2 style="text-align: center;">${data.next_days[i].day}</h2>
			<img class="cloud-image" src=${data.next_days[i].iconURL}>
			<h3>High: ${data.next_days[i].max_temp.c}&deg;</h3>
			<h3>Low: ${data.next_days[i].min_temp.c}&deg;</h3>
			<div>
		<div>
	`;
      weatherContainer.insertAdjacentHTML("beforeend", html);
	  clicked.push(val);
	  console.log(clicked.length);
	  if( clicked.length >= 8 ) {
		weatherContainer.removeChild(weatherContainer.firstElementChild);
	}
    }
  };
  

}


