// Modul 'fs' und 'chalk' integrieren //
var fs = require('fs');
var chalk = require('chalk');

// Auslesen von Datei //
fs.readFile(__dirname+"/staedte.json", function(err, data) {

		if (err) throw err;

			var parsed = JSON.parse(data.toString());
// Sortieren nach population //
			parsed.cities.sort(function(a,b) {

				if (a.population > b.population) {
   					return 1;
  				}
  				if (a.population < b.population) {
    				return -1;
  				}
  				// wenn a = b //
  					return 0;
				}
			);
// Neue Datei erstellen //
		fs.writeFile(__dirname+"/sorted_staedte.json", JSON.stringify(parsed), function(err) {

			if (err) throw err;
// Formatierte Ausgabe + färben //
			for(var i in parsed.cities){
				console.log(chalk.white("Name:" + parsed.cities[i].name));
				console.log(chalk.blue("Country:" + parsed.cities[i].country));
				console.log(chalk.red("Population:" + parsed.cities[i].population));
				console.log("--------------------------------------");
			}
		});
 });
