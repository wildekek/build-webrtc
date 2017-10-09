/* global desc:false, task:false */
'use strict';

var execFileSync = require('child_process').execFileSync;
var config = require('./config');
var log = require('./log');

var WEBRTC_CHECKOUT_SRC = config.WEBRTC_CHECKOUT_SRC;
var WEBRTC_OUT = config.WEBRTC_OUT;

desc('Get the build arguments');
task('get-build-arguments', function() {
  log('Getting GN build arguments');
  execFileSync('gn', ['args', '--list', WEBRTC_OUT], {cwd: WEBRTC_CHECKOUT_SRC, stdio: 'inherit' });
});
