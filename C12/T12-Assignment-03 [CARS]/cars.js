
async function loadCars() {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
       const dataHONDA = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
            console.log('honda: ', dataHONDA);
       const myHondaCarsChoice = [dataHONDA.Results[0], dataHONDA.Results[7], dataHONDA.Results[10]];

       const dataDODGE = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/dodge?format=json", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
              console.log('dodge: ', dataDODGE);
       const myDodgeCarsChoice = [dataDODGE.Results[5], dataDODGE.Results[9], dataDODGE.Results[15]];


       const dataBMW = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/bmw?format=json", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
       const myBMWCarsChoice = [dataBMW.Results[10], dataBMW.Results[20], dataBMW.Results[30]];

        for(var i = 0; i < myHondaCarsChoice.length; i++) {
            var HONDA = myHondaCarsChoice[i];
            var divHonda = document.createElement('div');
            divHonda.setAttribute('id', `hondaCar-${i}`);
            divHonda.style = 'padding-top: 25px; background-color:inherit;';
            divHonda.innerHTML = `Brand: ${HONDA.Make_Name} \n Model: ${HONDA.Model_Name}`;
            document.getElementById('honda').appendChild(divHonda);
        }

        for(var i = 0; i <myDodgeCarsChoice.length; i++) {
            var DODGE = myDodgeCarsChoice[i];
            var divDodge = document.createElement('div');
            divDodge.setAttribute('id', `dodgeCar-${i}`);
            divDodge.style = 'padding-top: 25px; background-color:inherit';
            divDodge.innerHTML = `${DODGE.Make_Name} \n ${DODGE.Model_Name}`;
            document.getElementById('dodge').appendChild(divDodge);
        }

        for(var i = 0; i < myBMWCarsChoice.length; i++) {
            var BMW = myBMWCarsChoice[i];
            var divBMW = document.createElement('div');
            divBMW.style = 'padding-top: 25px; background-color:inherit';
            divBMW.innerHTML = `${BMW.Make_Name} \n ${BMW.Model_Name}`;
            document.getElementById('bmw').appendChild(divBMW);
        }
}

loadCars();


