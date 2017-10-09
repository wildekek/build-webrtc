/* global task:false, desc:false */
'use strict';

var config = require('./config');
var log = require('./log');
var execSync = require('child_process').execSync;

var HOST_PLATFORM = config.HOST_PLATFORM;
var DEPENDECY_INSTALLER_LINUX = config.DEPENDECY_INSTALLER_LINUX;

desc('Installing dependencies');
task('install-dependencies', ['checkout-webrtc'], function() {
  if (HOST_PLATFORM === 'linux') {
    log('Installing dependencies');
    execSync([
      DEPENDECY_INSTALLER_LINUX,
      '--no-syms --no-chromeos-fonts --no-nacl'
    ].join(' '), {
      stdio: 'inherit'
    });
  } else {
    log('Skipping dependency installer, ' + HOST_PLATFORM + ' not supported');
  }
});
