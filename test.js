'use strict';
var fs = require('fs');
var assert = require('assert');
var gutil = require('gulp-util');
var geojson = require('./index');

it('should convert csv to geojson', function (cb) {
    // csv
    var stream = geojson();
    stream.on('data', function (file) {
        var parse_file = JSON.parse(file.contents.toString('utf-8'));
        assert(parse_file instanceof Object);
        cb();
    });

    stream.write(new gutil.File({
        path: __dirname + '/sample/data/polygon.csv',
        contents: fs.readFileSync(__dirname + '/sample/dist/polygon.geojson')
    }));
});

it('should convert tsv to geojson', function (cb) {
    // tsv
    var stream = geojson();
    stream.on('data', function (file) {
        var parse_file = JSON.parse(file.contents.toString('utf-8'));
        assert(parse_file instanceof Object);
        cb();
    });

    stream.write(new gutil.File({
        path: __dirname + '/sample/data/simple.tsv',
        contents: fs.readFileSync(__dirname + '/sample/dist/simple.geojson')
    }));
});

it('should convert kml to geojson', function (cb) {
    // kml
    var stream = geojson();
    stream.on('data', function (file) {
        var parse_file = JSON.parse(file.contents.toString('utf-8'));
        assert(parse_file instanceof Object);
        cb();
    });

    stream.write(new gutil.File({
        path: __dirname + '/sample/data/extended_data.kml',
        contents: fs.readFileSync(__dirname + '/sample/dist/extended_data.geojson')
    }));
});

it('should convert gpx to geojson', function (cb) {
    // gpx
    var stream = geojson();
    stream.on('data', function (file) {
        var parse_file = JSON.parse(file.contents.toString('utf-8'));
        assert(parse_file instanceof Object);
        cb();
    });

    stream.write(new gutil.File({
        path: __dirname + '/sample/data/blue_hills.gpx',
        contents: fs.readFileSync(__dirname + '/sample/dist/blue_hills.geojson')
    }));
});

it('should convert topojson to geojson', function (cb) {
    // topojson
    var stream = geojson();
    stream.on('data', function (file) {
        var parse_file = JSON.parse(file.contents.toString('utf-8'));
        assert(parse_file instanceof Object);
        cb();
    });

    stream.write(new gutil.File({
        path: __dirname + '/sample/data/us-10m.topojson',
        contents: fs.readFileSync(__dirname + '/sample/dist/us-10m.geojson')
    }));
});

