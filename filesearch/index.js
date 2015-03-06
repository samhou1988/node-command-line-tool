#!/usr/bin/env node

var userArgs = process.argv.splice(2);
var searchPattern = userArgs[0];

var exec = require('child_process').exec;
var child = exec('ls -ltra | grep ' + searchPattern, function (err, stdout, stderr) {
  console.log(stdout);
});