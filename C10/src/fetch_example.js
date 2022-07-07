const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
		'X-RapidAPI-Key': '2e2efc9591msh6c32a9d1f127278p104ecajsnb73193cddf68'
	}
};

async function getTracks() {
	const spotifyTracks = await fetch('https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	console.log(spotifyTracks)
}

getTracks()


var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";

debugger

a == c; // true
b == c; // true
a == b; // false