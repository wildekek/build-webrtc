/* global desc:false, task:false */
'use strict';

var execFileSync = require('child_process').execFileSync;
var config = require('./config');
var log = require('./log');

var WEBRTC_CHECKOUT_SRC = config.WEBRTC_CHECKOUT_SRC;
var WEBRTC_OUT = config.WEBRTC_OUT;
var BUILD_ARGUMENTS = config.BUILD_ARGUMENTS;

// Convert the json build arguments to a format GN accepts
var gnArguments = Object.keys(BUILD_ARGUMENTS)
.map(function(key) {
  let value = BUILD_ARGUMENTS[key];
  if (typeof value === 'string') {
    value = '"' + value + '"';
  }
  return key + '=' + value;
})
.join(' ');

desc('Set the build arguments');
task('set-build-arguments', function() {
  log('Setting GN build arguments');
  execFileSync('gn', ['gen', WEBRTC_OUT, '--args=' + gnArguments], {cwd: WEBRTC_CHECKOUT_SRC, stdio: 'inherit' });
});
