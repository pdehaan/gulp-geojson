'use strict';
var path = require('path');
var fs = require('graceful-fs');
var gutil = require('gulp-util');
var map = require('map-stream');
var geojson = require('convert-geo');
var filesize = require('filesize');
var tempWrite = require('temp-write');


module.exports = function () {
	return map(function (file, cb) {
		if (file.isNull()) {
			return cb(null, file);
		}

		if (file.isStream()) {
			return cb(new gutil.PluginError('gulp-geojson', 'Streaming not supported'));
		}

		if (['.gpx', '.kml', '.csv', '.tsv', '.topojson', '.json'].indexOf(path.extname(file.path)) === -1) {
			gutil.log('gulp-geojson: Skipping unsupported geo format: ' + gutil.colors.blue(file.relative));
			return cb(null, file);
		}

		tempWrite(file.contents, path.extname(file.path), function (err, tempFile) {
			if (err) {
				return cb(new gutil.PluginError('gulp-geojson', err));
			}

			fs.stat(tempFile, function (err, stats) {
				if (err) {
					return cb(new gutil.PluginError('gulp-geojson', err));
				}

				geojson({
				    // now supporting kml, topojson, gpx, csv, tsv format
				    input: tempFile // input file
				}, function(err, result) {
				    if(err) {
				    	return cb(new gutil.PluginError('gulp-geojson', err));
				    }else {
				    	gutil.log('gulp-geojson:', gutil.colors.green('✔ ') + file.relative);
						file.contents = new Buffer(JSON.stringify(result));
						
						cb(null, file);
				    }

				});


			});
		});
	});
};
