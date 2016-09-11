var gulp = require('gulp');
var cp = require('child_process');
var del = require('del');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var nodemon = require('gulp-nodemon');
var rename = require('gulp-rename');
var path = require('path');
var minify = require('gulp-minify');
var less = require('gulp-less');
var concatCss = require('gulp-concat-css');


/**
 * Build (Webpack)
 */
gulp.task('clean:build', function() {
    del('./public/js/*','./public/css/*')
})

gulp.task('build', ['clean:build'], function() {
  return gulp.src('./app/app.js')
    .pipe(webpack(webpackConfig))
    .on('error', function handleError() {
      this.emit('end'); // Recover from errors
    })
    .pipe(gulp.dest('./'));
});


gulp.task('watch:build', function() {
  return gulp.watch('./app/**/*', ['build']);
});


gulp.task('less', function() {
  return gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'))
    .pipe(concatCss('site.css'))
    .pipe(gulp.dest('./public/css'))
});


gulp.task('watch:less',function(){
  return gulp.watch('less/*.less',['less']);
});


gulp.task('compress', function() {
  return gulp.src('public/js/bundle.js')
    .pipe(minify({noSource : true}))
    .pipe(gulp.dest('./public/js'))
});


gulp.task('watch:compress',function(){
  return gulp.watch('public/js/bundle.js',['compress']);
});


/**
 * API Server (Database)
 */

gulp.task('restore-database', function() {
  return gulp.src('data/restore.json')
    .pipe(rename('db.json'))
    .pipe(gulp.dest('data'));
});

gulp.task('serve:api', ['restore-database'], function(done) {
  var serverPath = path.join(__dirname, 'node_modules/.bin/json-server');
  cp.exec(serverPath + ' --watch data/db.json --port 3001', {stdio: 'inherit'})
    .on('close', done);
});


/**
 * Node Server (Express)
 */

gulp.task('serve:node', function(done) {
  var babelPath = path.join(__dirname, 'node_modules/.bin/babel-node');
  nodemon({
    exec: babelPath + ' ./server.js',
    watch: ['server.js'],
    ext: 'js html'
  });
});





/**
 * Main tasks
 */

//> gulp serve
gulp.task('serve', ['serve:node', 'serve:api']);
//> gulp watch 
gulp.task('watch', ['build', 'watch:build', 'less','watch:less']);
//> gulp 
gulp.task('default', ['serve']);
