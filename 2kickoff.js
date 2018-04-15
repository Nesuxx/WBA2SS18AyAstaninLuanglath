// Modul 'fs' und 'chalk' integrieren //
var fs = require('fs');
var chalk = require('chalk');

// Auslesen von Datei //
fs.readFile(__dirname+"/staedte.json", function(err, data) {

		if (err) throw err;

			var parsed = JSON.parse(data.toString());

// Formatierte Ausgabe + färben //
			for(var i in parsed.cities){
				console.log(chalk.white("Name:" + parsed.cities[i].name));
				console.log(chalk.blue("Country:" + parsed.cities[i].country));
				console.log(chalk.red("Population:" + parsed.cities[i].population));
				console.log("--------------------------------------");
			}
 });
