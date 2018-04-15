// Modul 'fs' integrieren //
var fs = require('fs');

// Auslesen von Datei //
fs.readFile(__dirname+"/staedte.json", function(err, data) {

		if (err) throw err;

			var parsed = JSON.parse(data.toString());

// Formatierte Ausgabe //
			for(var i in parsed.cities){
				console.log("Name:" + parsed.cities[i].name);
				console.log("Country:" + parsed.cities[i].country);
				console.log("Population:" + parsed.cities[i].population);
				console.log("--------------------------------------");
			}
 });
