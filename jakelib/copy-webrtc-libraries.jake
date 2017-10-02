/* global complete:false, desc:false, directory:false, fail:false, task:false */
'use strict';

var config = require('./config');
var copy = require('./copy');
var log = require('./log');
var path = require('path');

var WEBRTC_OUT = config.WEBRTC_OUT;
var OUT_LIB = config.OUT_LIB;

var WEBRTC_LIB = path.join(WEBRTC_OUT, 'obj', 'webrtc');

desc('Copy libraries');
task('copy-webrtc-libraries', function() {
  log('Copying libraries to ' + OUT_LIB);
   copy.files(/libwebrtc.a?$/, WEBRTC_LIB, OUT_LIB).then(complete, fail);
}, { async: true });
