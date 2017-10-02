/* global desc:false, task:false */
'use strict';

var gn = require('./gn');
var config = require('./config');
var log = require('./log');

var WEBRTC_OUT = config.WEBRTC_OUT;
var WEBRTC_CHECKOUT_SRC = config.WEBRTC_CHECKOUT_SRC;

desc('Generate ninja config');
task('gen-ninja-cfg', ['install-dependencies'], function() {
  log('Running gn');
  gn(WEBRTC_OUT, { cwd: WEBRTC_CHECKOUT_SRC });
});
