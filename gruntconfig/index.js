'use strict';

var config = {
  browserify: require('./browserify'),
  clean: require('./clean'),
  compass: require('./compass'),
  connect: require('./connect'),
  copy: require('./copy'),
  jshint: require('./jshint'),
  uglify: require('./uglify'),
  watch: require('./watch'),
  mocha_phantomjs: require('./mocha_phantomjs'),
  postcss: require('./postcss'),

  tasks: [
    'grunt-browserify',
    'grunt-contrib-clean',
    'grunt-contrib-compass',
    'grunt-contrib-connect',
    'grunt-contrib-copy',
    'grunt-contrib-jshint',
    'grunt-contrib-uglify',
    'grunt-contrib-watch',
    'grunt-mocha-phantomjs',
    'grunt-postcss'
  ]
};

module.exports = config;