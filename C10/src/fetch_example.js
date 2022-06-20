const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
		'X-RapidAPI-Key': '2e2efc9591msh6c32a9d1f127278p104ecajsnb73193cddf68'
	}
};

fetch('https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));