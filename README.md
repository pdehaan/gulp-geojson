# gulp-geojson

[![Build Status](https://travis-ci.org/DataGarage/gulp-geojson.png?branch=master)](https://travis-ci.org/DataGarage/gulp-geojson)

Converting multipule geo file format to geojson using gulp.

## Install

```
npm install --save-dev gulp-geojson
```


## Support

- kml
- csv
- tsv
- topojson
- gpx 


## Example

```js
var gulp = require('gulp');
var geojson = require('./');
var rename = require('gulp-rename');

// kml
gulp.task('kml', function () {
    gulp.src('sample/data/*.kml')
        .pipe(geojson())
        .pipe(rename({extname: '.geojson'}))
        .pipe(gulp.dest('./sample/dist'));
});

// csv
gulp.task('csv', function () {
    gulp.src('sample/data/*.csv')
        .pipe(geojson())
        .pipe(rename({extname: '.geojson'}))
        .pipe(gulp.dest('./sample/dist'));
});


// tsv
gulp.task('tsv', function () {
    gulp.src('sample/data/*.tsv')
        .pipe(geojson())
        .pipe(rename({extname: '.geojson'}))
        .pipe(gulp.dest('./sample/dist'));
});

// gpx
gulp.task('gpx', function () {
    gulp.src('sample/data/*.gpx')
        .pipe(geojson())
        .pipe(rename({extname: '.geojson'}))
        .pipe(gulp.dest('./sample/dist'));
});

// topojson
gulp.task('topojson', function () {
    gulp.src('sample/data/*.topojson')
        .pipe(geojson())
        .pipe(rename({extname: '.geojson'}))
        .pipe(gulp.dest('./sample/dist'));
});

gulp.task('default', ['kml','csv','tsv','gpx','topojson']);
```


## API

### geojson()

```
geojson()
```

## License

MIT [@chilijung](http://github.com/chilijung)
