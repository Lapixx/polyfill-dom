"use strict";

if (typeof window !== "undefined")
    return;

const window = require("./window");

global = { ...global, window, ...window };
