/* global directory:false, task:false */
'use strict';

var config = require('./config');
var ninja = require('./ninja');
var log = require('./log');

var OUT_LIB = config.OUT_LIB;
var WEBRTC_CHECKOUT_SRC = config.WEBRTC_CHECKOUT_SRC;
var WEBRTC_OUT = config.WEBRTC_OUT;

directory(OUT_LIB);

task('build-webrtc', ['install-dependencies', 'set-build-arguments', OUT_LIB], function() {
  log('Running ninja');
  ninja(WEBRTC_OUT, { cwd: WEBRTC_CHECKOUT_SRC });
});
