// import "es6-shim";
// import "es6-promise";
// import "es7-reflect-metadata";
import "core-js";
require("zone.js/dist/zone");

if ('production' === ENV) {
    // Production
} else {
    // Development
    Error.stackTraceLimit = Infinity;
    require("zone.js/dist/long-stack-trace-zone");
}
