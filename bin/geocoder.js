#!/usr/bin/env node

var program  = require('commander'),
  GeocoderFactory = require('node-geocoder');

program
  .version('2.12.0')
  .option('-p, --provider [value]]', 'Geocoder provider (default to google)', 'google');

// Crappy hack
program.executables = true;

program
  .command('geocode [options] [value]')
  .description('geocode given value')
  .action(function(value){
    try {
      var geocoder = GeocoderFactory.getGeocoder(program.provider);
    } catch(e) {
      console.error(e.message);
      process.exit(1);
    }

    geocoder.geocode(value)
      .then(function(results) {
        console.log(results);
      }, function(err) {
        console.error(err.message);
        process.exit(1);
      });
  });

program
  .command('reverse [options] [lat] [long]')
  .description('reverse geocode given value')
  .action(function(lat, long){
    try {
      var geocoder = GeocoderFactory.getGeocoder(program.provider);
    } catch(e) {
      console.error(e.message);
      process.exit(1);
    }

    geocoder.reverse({lat:lat, lon:long})
      .then(function(results) {
        console.log(results);
      }, function(err) {
        console.error(err.message);
        process.exit(1);
      });
  });

program.parse(process.argv);


