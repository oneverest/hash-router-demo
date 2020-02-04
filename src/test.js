const { pathToRegexp, match, parse, compile } = require("path-to-regexp");
const keys = [];
const rex = pathToRegexp('/user/details/id/:name', keys, {end: false});


console.log(keys)