"use strict";

if (typeof window !== "undefined")
    return;

const window = require("./window");

global.window = window;
Object.keys(window).forEach(key => {
    global[key] = window[key];
});
