/* global desc:false, task:false */
'use strict';

var execFileSync = require('child_process').execFileSync;
var config = require('./config');

var WEBRTC_CHECKOUT_SRC = config.WEBRTC_CHECKOUT_SRC;
var WEBRTC_OUT = config.WEBRTC_OUT;

console.log('WEBRTC_CHECKOUT_SRC', WEBRTC_CHECKOUT_SRC);

desc('Get the build arguments');
task('get-build-arguments', function() {
  execFileSync('gn', ['args', '--list', WEBRTC_OUT], {cwd: WEBRTC_CHECKOUT_SRC, stdio: 'inherit' });
});
