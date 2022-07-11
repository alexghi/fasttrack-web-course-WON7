document.getElementById("car-selector").addEventListener("click", Response);

      function Response() {
        let brand = document.getElementById("car-selector").value;
        fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${brand}?format=json`
        )
          .then((res) => res.json())
          .then((data) => {
            let output = `<h2 class="mb-4">${brand.toUpperCase()} Models:</h2>`;
            for (var i = 0; i < 4; i++) {
              output += `<a href="https://en.wikipedia.org/wiki/${brand}_${data.Results[i].Model_Name}" class="card card-body mb-3 link-success" target="_blank">
             <h3>${data.Results[i].Make_Name}</h3>
             <p id="redirect">${data.Results[i].Model_Name}</p> </a>`;
            }

            document.getElementById("output").innerHTML = output;
          });
      }